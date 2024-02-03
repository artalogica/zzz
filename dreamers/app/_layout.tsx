import { Slot } from 'expo-router';
import Login from './Login.page'; 
import Signup from './Signup.page'; 
import { UserProvider } from './context/user.context';
//import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Root() {
  // Set up the auth context and render our layout inside of it.
   // <Slot />
  return (
    <UserProvider>
      <Slot /> 
    </UserProvider>
  );
}