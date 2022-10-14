import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Div, ScrollView, Logo,
  ImageBackground,
  TouchableOpacity, Pressable } from 'react-native';
import { pattern, buttons } from './Stylesheets/styles'   


/**
 * 
 *     
 * 



          <StatusBar style="auto" />

 * */
export default function App() {
  return (

    <ScrollView horizontal="true" style={{marginTop:"25%",}}>

    <TouchableOpacity>
      <Text style={styles.Header}>
      Vacation Ex
      </Text>
    </TouchableOpacity>

      <Image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/James_Franco_4%2C_2013.jpg' }}
      style={{ width: "55%", height: "65%", borderRadius: "400/2", marginBottom:"15%",marginLeft:"15%"}}
    />
       <Image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/James_Franco_4%2C_2013.jpg' }}
      style={{ width: "55%", height: "65%", borderRadius: "400/2", marginBottom:"15%",marginLeft:"15%"}}
    />
      <Image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/James_Franco_4%2C_2013.jpg' }}
      style={{ width: "55%", height: "65%", borderRadius: "400/2", marginLeft:"15%"}}
    />

    </ScrollView>



  );
}

const styles = StyleSheet.create({
 /* container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  */
  Header: {
    color: '#000000',
    fontWeigth:"bold",
    fontSize: "40",
    marginRight:"20%",
    marginLeft:"11%",
    marginBottom: "10%",


  },

});
