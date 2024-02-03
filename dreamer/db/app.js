const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./database');


// init app & middleware
const app = express()
app.use(express.json())

// db connection
let db;
let PORT = process.env.PORT;
connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`Server in ${process.env.STATUS} mode, Listening on port: ${PORT}`);
        });
        db = getDb();
    }
})

// routes
app.get('/users', (req, res) => {
    const page = req.query.p || 0;
    const booksPerPage = 3 // books per page to show

    let books = [];

    db.collection('users')
    .find()
    .skip(page * usersPerPage) // return specific page requested
    .limit(usersPerPage) // show 3 books per page
    .forEach(user => users.push(user))
    .then(() => {
        res.status(200).json(users)
    })
    .catch(() => {
        res.status(500).json({error: "could not fetch"})
    });

})

app.post('/users', (req, res) => {
    const user = req.body

    db.collection('users')
    .insertOne(user)
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({err: 'could not insert document'})
    })
})

app.get('/users/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('users')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: "could not fetch"});
        });
    } else res.status(500).json({error: "invalid Id"});
})

app.delete('/users/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({error: "could not delete document"});
        });
    } else res.status(500).json({error: "invalid Id"});

})

app.patch("/users/:id", (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
        .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({error: "could not update document"});
        });
    } else res.status(500).json({error: "invalid Id"});
})