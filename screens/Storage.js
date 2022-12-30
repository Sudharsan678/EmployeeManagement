import AsyncStorage from '@react-native-async-storage/async-storage';

 

export const storeData = async (key, value) => {
  try {
    console.log('StoreData', key, 'dgtg', value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@'+key, jsonValue);
 
  } catch (e) {
    console.log(e);
  }
};

export const getData = async key => {
  try {
    console.log('value', key);
    const jsonValue = await AsyncStorage.getItem('@'+key);
    console.log(JSON.stringify(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue)  : [];
  } catch (e) {
    // error reading value
  }
};


export const logInSetData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@'+key, jsonValue);
    // alert(jsonValue)
  } catch (e) {
    console.log(e);
  }
};

export const loginGetData = async key => {
  try {
    console.log('value', key);
    const jsonValue = await AsyncStorage.getItem('@'+key);
    console.log(JSON.stringify(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue)  : [];
  } catch (e) {
    // error reading value
  }
};
 
export const removeData = async () => {
  try {
    console.log("LOGOUT");
    await AsyncStorage.clear()
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}
