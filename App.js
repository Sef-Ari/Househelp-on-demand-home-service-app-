import  {StatusBar}  from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider,SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider 
    //  tokenCache={tokenCache}
     publishableKey='pk_test_ZWxlY3RyaWMtZ2F0b3ItNTEuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>

      {/* Sign in component  */}
      <SignedIn>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
        </SignedIn>
        {/* Sign out */}
        <SignedOut>
        <Login/>
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop:20
  },
});
