import { Stack } from "expo-router";

export default function RootLayout() {
  return(
  <Stack
      screenOptions={{
        headerStyle: {
        backgroundColor: 'orange'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    <Stack.Screen name="index" options={{
      headerTitle:"Home"
    }}/>
    <Stack.Screen name="login" options={{
      headerTitle:"Login Form"
    }}/>
    <Stack.Screen name="signup" options={{
      headerTitle:"Signup Form"
    }}/>
  </Stack>
  );
}

