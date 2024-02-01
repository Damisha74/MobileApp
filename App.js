//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Header } from 'react-native';
//import { , Text } from 'react-native-elements';
import {
  createStackNavigator
} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from "./src/screens/WelcomeScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="Welcome" component={WelcomeScreen} />
  //     </Stack.Navigator>
  // </NavigationContainer>

  <View style={styles.container}>
  {/* Static section at the top */}
  <StatusBar barStyle="light-content" backgroundColor="#007BFF" >
    
  </StatusBar>
  <View style={styles.staticSection}>
    <Text style={styles.headerText}>Clear Land</Text>
    </View>  
</View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  staticSection: {
    padding: 16,
    height: 100,
    backgroundColor: "#007BFF", // Set your desired background color
    borderBottomWidth: 1,
    borderBottomColor: "#007BFF", // Set your desired border color
    color: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
headerText:{
  color:'#fff',
  fontFamily:'Product Sans',
  fontSize: 20
 
}

});
