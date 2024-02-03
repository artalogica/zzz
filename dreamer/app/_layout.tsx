import { Slot } from 'expo-router';
import { UserProvider } from './context/user.context';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <UserProvider>
      <Slot />
    </UserProvider>
  );
}