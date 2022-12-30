import React , {useState, useEffect}  from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
 } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


 export default function Landing ({navigation}){

    const [name,setName] = useState('');

    return (
        <ImageBackground
        style = {{flex : 1}}
        source={require('../assets/gggrain.png')}
        >
        <View>
            <Text>
                Welcome {name}
            </Text>

            <TouchableOpacity
            style={styles.Button1}
            onPress={() => navigation.navigate('Create')}>
            <Text style={styles.ButtonColor}>Create Employee Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => navigation.navigate('Details')}>
            <Text style={styles.ButtonColor}>Employee List</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
    )
 }
 const styles = StyleSheet.create({
    Button1: {
        backgroundColor: '#166dd9',
        alignItems: 'center',
        padding: 20,
        margin: 10,
        borderRadius: 10,
      },
      ButtonColor: {
        color: 'white',
      },
 })