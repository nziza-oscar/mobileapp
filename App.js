import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

// import HomePage from './pages/HomePage';

export default function App() {
  const handlePress = ()=>{
    alert("you pressed me")
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.text} onPress={handlePress}>Hello Docile</Text>
      <StatusBar style="auto" /> */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bed4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    fontFamily:"helvetica",
    color:'black'
  }
});
