import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
         
const DATA = [
           {
             title: "Main dishes",
             data: ["Pizza", "Burger", "Risotto"]
           },
           {
             title: "Sides",
             data: ["French Fries", "Onion Rings", "Fried Shrimps"]
           },
           {
             title: "Drinks",
             data: ["Water", "Coke", "Beer"]
           },
           {
             title: "Desserts",
             data: ["Cheese Cake", "Ice Cream"]
           }
         ];
         
const Item = ({ title }) => (
   <View style={styles.item}>
       <Text style={styles.title}>{title}</Text>
   </View>
);
         
const App = () => (
           <SafeAreaView style={styles.container}>
           <View style={styles.app}>
           <View style={styles.space}><Text>     </Text></View>
             <SectionList
               sections={DATA}
               keyExtractor={(item, index) => item + index}
               renderItem={({ item }) => <Item title={item} />}
               renderSectionHeader={({ section: { title } }) => (
                 <Text style={styles.header}>{title}</Text>
               )}
             />
             </View>
           </SafeAreaView>
         );
         
const styles = StyleSheet.create({
container: {
 flex: 1,
 paddingTop: StatusBar.currentHeight,
 marginHorizontal: "-35%",
},
app: {
 backgroundColor: "#090426",
 alignItems: "center",
 justifyContent: "center",
 marginBottom: "-20%",
 marginTop: "-20%",
},
space: {
 marginBottom: "20%",
},
item: {
 backgroundColor: "#0A1CC3",
 padding: 20,
 marginVertical: "5%",
 borderRadius: 6,
 marginHorizontal: "25%",
 

},
header: {
 fontSize: 32,
 backgroundColor: "#090426",
 marginHorizontal: "25%",
 color: "#ffffff",
},
title: {
 fontSize: 24,
 color: "#ffffff",
}
});
         
export default App;
