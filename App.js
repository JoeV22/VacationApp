
import React from 'react';
import { View, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#090426",
  },
  app: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#090426",
    marginBottom: "20%",
  },
  logo: {
    width: 250,
    height: 200,
  },
  space: {
    marginBottom: "5%"
  },
  Header: {
    color: "#FFFFFF",
    fontSize: 32,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.app} >
    <View>
      <Text style={styles.Header}>Wow</Text>
    </View>
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/James_Franco_4%2C_2013.jpg' }}
        style={styles.logo}
      />
      <View style={styles.space}></View>
      <Image
        style={styles.logo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/James_Franco_4%2C_2013.jpg' }}
      />
      <View style={styles.space}></View>
      <Image
        style={styles.logo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/James_Franco_4%2C_2013.jpg' }}
      />
    </ScrollView>
    </SafeAreaView>
  );
}

export default App;