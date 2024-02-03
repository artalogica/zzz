import {React, useState} from 'react'
import { View, Text } from 'react-native'

import styles from './stats.style'

const Stats = () => {
    let [fellAsleepTime, setFellAsleepTime] = useState('8:15 PM');
    let [wokeUpTime, setWokeUpTime] = useState('7:00 AM');
    let [streak] = useState(0);

    // Calculate total time slept
    let calculateTotalTimeSlept = () => {
        let pm  = fellAsleepTime.split(" ")[1] === 'PM';
        let sleepHr = parseInt(fellAsleepTime.split(":")[0]);
        let wakeHr = parseInt(wokeUpTime.split(":")[0]);
        let sleepMin = parseInt(fellAsleepTime.split(":")[1]);
        let wakeMin = parseInt(wokeUpTime.split(":")[1]);
        let totalTimeHours =  0;
        let totalTimeMinutes = 0;
        
        if (pm) {
            totalTimeHours += 12-sleepHr+wakeHr;
        } else {
            totalTimeHours  = wakeHr-sleepHr;
        }

        if(wakeMin>sleepMin)  totalTimeMinutes = -sleepMin;
        else if(sleepMin!=0) { 
            totalTimeHours -=1;
            totalTimeMinutes = 60-sleepMin;
        totalTimeMinutes += wakeMin;
        }
        return `${totalTimeHours} hours, ${totalTimeMinutes} minutes`;
    };
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>fell asleep at</Text> 
      <Text style = {styles.text2}>{fellAsleepTime+'\n'}</Text>

      <Text style = {styles.text}>woke up at</Text> 
      <Text style = {styles.text2}>{wokeUpTime+'\n'}</Text>

      <Text style = {styles.text}>slept</Text> 
      <Text style = {styles.text2}>{calculateTotalTimeSlept()+'\n'}</Text>

      <Text style = {styles.text}>8-hour streak</Text> 
      <Text style = {styles.text2}>{streak}</Text>
    </View>
  );
}

export default Stats