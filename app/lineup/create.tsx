import CreateLineupScreen from '@/app/create-lineup';
import { Stack } from 'expo-router';

export default function CreateLineup() {
  return (
    <>
     <Stack.Screen
  name="create-lineup"
  options={{
    presentation: 'modal', // or 'fullScreenModal'
    animation: 'slide_from_bottom',
    headerShown: false, // This should match your screen's header
  }}
/>
      <CreateLineupScreen />
    </>
  );
}