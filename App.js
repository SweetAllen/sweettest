import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO app!</Text>
      <View  style={styles.container2}>
      <TextInput style={styles.input}/>
      <Button title='"ADD' />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:5,
  },
  container2: {
    flexDirection:'row',

   
  },
  title:{
    paddingVertical:0,
    paddingTop:20,
    fontSize:20,
    textAlign:"center",
  },
  input: {
    flex:1,
    borderColor:"#c4c4c4c4",
    borderWidth:1,
    fontSize:16,
    padding:10,
    borderRadius:10,
  },
 
});
