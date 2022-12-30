import React , {useEffect, useState}from "react";
import { 
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground,
    Image,
    Alert,


 } from "react-native";

 import AsyncStorage from "@react-native-async-storage/async-storage";

 export default function Login ({navigation})  {
    const [name, setName] = useState ('');
    const [pwd, setPwd] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('Landing');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length === 0 || pwd.length === 0  ) {
            Alert.alert('Warning!', 'Please enter your name and Password.')
        }
        
       
         else {
            try {
                var user = {
                    Name: name,
                    Password : pwd
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                if (
                    (name.trim() == 'Sudharsan' || name.trim() == 'Vijay' ) 
                        && 
                    (pwd.trim() == '12345' || pwd.trim() == '0000')
                    ){
                navigation.navigate('Landing');}
                else {
                    Alert.alert('Warning!!', 'Please enter valid Username or Password.')
                }
            } catch (error) {
                console.log(error);
            }
        }}
    return (
        <ImageBackground
            style = {{flex: 1}}
            source={require('../assets/ffflurry.png')} 
        >
        <View>
            <Image 
            style = {style.login}
            source = {require('../assets/login.png')} />
            <View>
            <TextInput 
            placeholder= "Name"
            placeholderTextColor={"grey"}
            style = {style.name}
            onChangeText = {setName}
            />
            </View>
            <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={"grey"}
            style = {style.name}
            onChangeText = {setPwd} 
            />
            <View style = {style.btn}>
            <Button
            title="Login"
            onPress={setData}
            
            />
            </View>

            

            

            
        </View>
        </ImageBackground>
    )

 }

 const style = StyleSheet.create({
    name : {
        width: 300,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: 'black',
        alignSelf : 'center',
        marginTop : 12,

    },
    
    login :{
        height : 100,
        width : 100,
        alignSelf : 'center',
        marginTop: 100,
    },
    btn : {
        width : 100,
        alignSelf : 'center',
        marginVertical : 19

    }
 })