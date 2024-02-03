import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { COLORS, FONT, icons, images, SIZES } from '../constants';

const img_1 = require("../assets/images/IMG_9924.png");
const img_2 = require("../assets/images/IMG_9925.png");
const img_3 = require("../assets/images/IMG_9926.png");
const img_4 = require("../assets/images/IMG_9927.png");
const img_5 = require("../assets/images/IMG_9928.png");


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Don't Sleep on your Feed</Text>
      <Text style = {styles.subtitle}> Your friends are catching Zzz's!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView showsVerticalScrollIndicator = {false}>
          <Text style={styles.user}> Me                                              18 hours ago</Text>
          <Image
            style = {styles.box}
            source = {img_1}
          />
          {/* <View style={{
                    backgroundColor: COLORS.primary,
                    padding:10,
                    marginLeft: '45%',
                    borderRadius: 8,
                    marginTop: 5,
                    marginRight: "5%",
                    maxWidth: '100%',
                    alignSelf: 'flex-end',
                  }}>
  
                    
                    <Text style={{ fontSize: 16, color: "#fff", }}> Finally going to bed! </Text>
  
                      <View style={styles.rightArrow}>
  
                      </View>
                      <View style={styles.rightArrowOverlap}></View>
                    
          </View> */}

          <Text style={styles.user}> Irene                                               20 hours ago</Text>
          <Image
            style = {styles.box}
            source = {img_2}
          />

          <Text style={styles.user}> Brenda                                              21 hours ago</Text>
          <Image
            style = {styles.box}
            source = {img_3}
          />

          <Text style={styles.user}> Su                                                     21 hours ago</Text>
          <Image
            style = {styles.box}
            source = {img_5}
          />

          <Text style= {styles.more}> See More...</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.primary,
    fontFamily: FONT.regular,
    fontWeight: 'bold',
    paddingBottom: 9,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'normal',
    fontFamily: FONT.regular,
    paddingBottom: 10,
  },
  user: {
    textAlign: 'left',
    fontFamily: FONT.regular,
    paddingBottom:10,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  comment: {
    paddingTop: 10,
    fontFamily: FONT.regular,
    textAlign: 'right',
  },
  box: {
    width: 300,
    height: 300,
    borderTopRightRadius: 20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderColor: COLORS.lightWhite,
    borderWidth: 3,
    paddingBottom:30,
  },
  textBubble: {
    backgroundColor: "#0078fe",
                    padding:10,
                    marginLeft: '45%',
                    borderRadius: 5,
                    //marginBottom: 15,
                    marginTop: 5,
                    marginRight: "5%",
                    maxWidth: '50%',
                    alignSelf: 'flex-end',
                    //maxWidth: 500,
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: COLORS.primary,
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#000000",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20
  
  },
  /*Arrow head for recevied messages*/
leftArrow: {
  position: "absolute",
  backgroundColor: COLORS.primary,
  //backgroundColor:"red",
  width: 20,
  height: 25,
  bottom: 0,
  borderBottomRightRadius: 25,
  left: -10
},

leftArrowOverlap: {
  position: "absolute",
  backgroundColor: "#000000",
  //backgroundColor:"green",
  width: 20,
  height: 35,
  bottom: -6,
  borderBottomRightRadius: 18,
  left: -20

},

  more: {
    paddingTop:40,
    textAlign: 'center',
  }
});
