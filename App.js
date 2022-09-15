import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Div, ScrollView, Logo,
  ImageBackground,
  TouchableOpacity, Pressable } from 'react-native';
import { pattern, buttons } from './Stylesheets/styles'   

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <TouchableOpacity>
    <View style={styles.HeaderContainer}>
      <Text style={styles.Header}>
      Vacation Ex
      </Text>
    </View>
    </TouchableOpacity>
      <Image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/James_Franco_4%2C_2013.jpg' }}
      style={{ width: "25%", height: "15%", radius: "50%", marginBottom:"100%",}}
    />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderContainer: {
    flex: 1,
    color: '#0000FF',
    marginTop: "65%",

  },
  Header: {
    flex: 1,
    color: '#0000FF',
    marginTop: "25%",
    fontWeigth:"bold",
    fontSize: "30",
    marginRight:"40%",
    textAlignVertical: "top"

  },
  
});
