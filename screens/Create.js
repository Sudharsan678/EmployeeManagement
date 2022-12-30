import React, {useState, useEffect} from "react";
import { 
    View,
    TextInput,
    Text,
    Button,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,

 } from "react-native";
 import RadioForm from "react-native-simple-radio-button";
//  import { Icon } from "react-native-vector-icons/AntDesign";
 import AsyncStorage from "@react-native-async-storage/async-storage";
 import DateTimePicker from '@react-native-community/datetimepicker';
 import { getData } from "./Storage";



 export default function Create () {
    const[name,setName] = useState ('');
    const[gender,setGender] = useState ('');
    const[mail,setMail] = useState ('');
    const[phone,setPhone] = useState('');
    const[designation,setDesignation] = useState('');
    const [empid, setEmpid] = useState ('');
    const [count, setCount] = useState();
    const [DOB, setDOB] = useState('');
    const [DOJ, setDOJ] = useState('');

    useEffect(() => {
      setLength();
    }, []);

    const setLength = async () => {
      let data = await getData('userInfo');
      if (data.length == []) {
        setCount(0);
      } else {
        const lastIdex = data.length;
        // console.log('last',lastIdex)
        setCount(lastIdex + 1);
        console.log('last', lastIdex);
      }
    };

    const [userNameError, setUserNameError] = useState(false);
    const [userMailError, setUserMailError] = useState(false);
    const [userPhoneError, setUserPhoneError] = useState(false);
    const [userDesignationError, setUserDesignationError] = useState(false);
    const [userDOBError, setUserDOBError] = useState(false);
    const [userDOJError, setUserDOJError] = useState(false);
    const [userEmpidError, setUserEmpidError] = useState(false);
    const [userGenderError, setUserGenderError] = useState(false);

    const onChangeTextValue = (text, TextInputName) => {
        switch (TextInputName) {
          case 'name':
            setName(text);
            setUserNameError(false);
    
            // console.log(person)
            break;
            case 'phone' :
                setPhone(text);
                setUserPhoneError(false);
            break ;
            case 'mail' :
              setMail(text);
              setUserMailError(false);
          case 'designation':
            setDesignation(text);
            setUserDesignationError(false);
            break;
          case 'DOB':
            SetDOB(text);
            // console.log(person)
            setUserDOBError(false);
            break;
          case 'DOJ':
            setDOJ(text);
            setUserDOJError(false);
            break;
          case 'empid':
            setEmpid(text);
            setUserEmpidError(false);
            // console.log(person)
            break;
        }
      };

    const [datePicker, setDatePicker] = useState(false);
    const [datePicker2, setDatePicker2] = useState(false);

    const [date, setDate] = useState(new Date());

    const person = {
        ID: count,
        gender: gender,
        phone : phone,
        mail : mail,
        name: name,
        designation: designation,
        DOB: DOB,
        DOJ: DOJ,
        empid: empid,
      };
    


    const onClickSubmit = async () => {
        if (name && gender && phone && phone && mail && designation && DOB && DOJ && empid) {
          let data = await getData('userInfo');
          setCount(Count + 1);
          data.push(person);
          storeData('userInfo', data);
          navigation.navigate('Landing');
        } else {
          if (!name) setUserNameError(true);
          if (!gender) setUserGenderError(true);
          if (!designation) setUserDesignationError(true);
          if (!phone) setUserPhoneError(true);
          if (!mail) setUserMailError(true);
          if (!empid) setUserEmpidError(true);
          if (!DOB) setUserDOBError(true);
          if (!DOJ) setUserDOJError(true);

        }
      };


    function onDateSelected(event, value) {
        setDatePicker(false);
        // setUserDOBError(false);
        const date2 = new Date(value);
        setDOB(
          date2.getDate()+ '/' + (date2.getMonth()+1 )+'/' + date2.getFullYear(),
        );
      }
      function onDateDOJSelected(event, value) {
        setDatePicker2(false);
        // setUserDOJError(false);
        const date2 = new Date(value);
        setDOJ(
          date2.getDate() + '/' + (date2.getMonth()+1) + '/' + date2.getFullYear(),
        );
      }

    var radio_props = [
        {label: 'Male  ', value: 0},
        {label: 'Female', value: 1},
      ];
    return(
    <ScrollView style = {style.parentview}>
        <Text style = {style.title}>
            Create New Record
        </Text>
        <TextInput 
        placeholder="Name"
        style = {style.input}
        placeholderTextColor={"grey"}
        onChangeText = {text => onChangeTextValue(text,'name')}
        error = {setUserNameError}

        />
        <Text style = {style.gender}>
            GENDER : 
        </Text>
        <RadioForm 
        style = {style.radio} 
        onChangeText = {text => onChangeTextValue(text,'gender')}
        error = {setUserGenderError}
        radio_props={radio_props}
        initial={null}
        formHorizontal = {true}
        onPress={value => {
            if (value === 0) {
              setGender('Male');
            //   setUserGenderError(false);
            } else {
              setGender('Female');
            //   setUserGenderError(false);
            }
          }}
          buttonSize={15}
        />
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}

        <TextInput 
        placeholder="Email"
        style = {style.rest}
        onChangeText = {text => onChangeTextValue(text,'mail')}
        keyboardType="email-address"
        />
        <View style = {{flexDirection : 'row' }}>
        <TextInput 
        style = {style.dateInput}
        value = {DOB}
        onChangeText = {text => onChangeTextValue(text,'DOB')}
        error = {setUserDOBError}
        placeholder="Date of Birth">
        
        </TextInput>
        <TouchableOpacity >
            <Image  source = {require ('../assets/55281.png')}
                style = {style.date}
            />
        </TouchableOpacity>
        
        </View>
        <TextInput 
        placeholder="Phone Number"
        keyboardType="number-pad"
        maxLength={10}
        onChangeText = {text => onChangeTextValue(text,'phone')}
        error = {setUserPhoneError}
        style = {style.rest}
        />
        <View style ={{flexDirection : 'row'}}>
        <TextInput 
        placeholder="Date of Joining"
        value = {DOJ}
        onChangeText = {text => onChangeTextValue(text,'DOJ')}
        error = {setUserDOJError}
        style = {style.dateInput} >
            </TextInput>
            <TouchableOpacity >
            <Image  source = {require ('../assets/55281.png')}
                style = {style.date}
            />
            </TouchableOpacity>
        
        </View>
        {datePicker2 && (
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDateDOJSelected}
          />
        )}
        
        <TextInput 
        placeholder="Designation"
        style = {style.rest}
        onChangeText = {text => onChangeTextValue(text,'designation')}
        error = {setUserDesignationError}
        /> 
        <TextInput 
        placeholder="Employee ID"
        style = {style.rest}
        onChangeText = {text => onChangeTextValue(text,'empid')}

        />
        <View style = {style.btn}>
            <Button 
            title="SUBMIT"
            onPress={onClickSubmit}
            />
            <Button 
            title="CANCEL"
            />
        </View>

        
    </ScrollView>
 )}
 const style = StyleSheet.create({
    parentview:{
        // justifyContent: "space-evenly",
        alignContent :'space-around',
        alignSelf : "auto",
        margin : 14
        
    },
    input :{
        borderWidth : 2,
        marginTop : 12,
        borderRadius: 16,
    },
    title :{
        fontSize : 32,
        alignContent :'center',
        alignSelf : 'center',
        color : 'black',
        // fontVariant : 'bold'
    },
    rest : {
        borderRadius : 16,
        borderWidth : 2,
        alignContent: 'flex-start',
        marginTop : 16
    },
    gender : {
        marginVertical : 16,
        fontWeight: 'bold',
        fontSize: 28,
        color : 'black',
    },
    radio : {
        flex : 1,
        flexDirection : 'row',
        alignContent : 'flex-start',
        // color : 'black',

    },
    btn : {
        flex : 1,
        flexDirection : 'row',
        // alignContent : 'space-between',
        justifyContent :'space-around',
        // alignSelf : 'center'
        marginVertical : 26,


    },
    date :{
        height : 50,
        width : 50,
        marginTop : 16,
        justifyContent : 'flex-end',
        // marginLeft : 14,
        marginHorizontal : 14,
    },
    dateInput : {
        borderRadius : 16,
        borderWidth : 2,
        alignContent: 'flex-start',
        marginTop : 16,
        paddingRight : 100,

    }
 })