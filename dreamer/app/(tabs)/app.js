
import { Stack, useRouter } from 'expo-router';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../context/user.context";
import Home from ".";
import Login from "../Login.page";
import PrivateRoute from "../PrivateRoute.page";
import Signup from "../Signup.page";
 
const App = () => {
  const router = useRouter(); 
 return (
   <BrowserRouter>
     {/* We are wrapping our whole app with UserProvider so that */}
     {/* our user is accessible through out the app from any page*/}
     <UserProvider>
       <Routes>
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/signup" element={<Signup />} />
         {/* We are protecting our Home Page from unauthenticated */}
         {/* users by wrapping it with PrivateRoute here. */}
         <Route element={<PrivateRoute />}>
           <Route exact path="/" element={<Home />} />
         </Route>
       </Routes>
     </UserProvider>
   </BrowserRouter>
 );
}
 
export default App;