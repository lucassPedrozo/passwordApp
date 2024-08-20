import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Checkbox from 'expo-checkbox'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { ModalPassword } from '../../components/modal'
import { BlurView } from 'expo-blur';

export function Home(){
  const [size, setSize] = useState(10)
  const [isChecked, setChecked] = useState(false)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let password = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    
    if (isChecked==true) charset += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)

  }
  
  return(
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      
      <Text style={styles.infCaracteres}> {size} Caracteres </Text>
      
      <View style={styles.slider}>
        <Slider style = {{height: 50}} 
        minimumValue={6} 
        maximumValue={20} 
        maximumTrackTintColor="#FF0000" 
        minimumTrackTintColor="#000"  
        thumbTintColor='#233d4d'
        value={size}
        onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
      </View>

      <View style={styles.checkbox}>
        <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? "#233d4d": undefined}/>
        <Text style={styles.infCaracteres} > Caracteres Especiais </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonGenerate}> Gerar Senha </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <BlurView style={styles.blur} intensity={10} tint='dark'>
          <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)}/>
        </BlurView>
      </Modal>

    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 40
  },
  infCaracteres: {
    fontWeight: "bold",
    fontSize: 25
  },
  slider: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFFF",
    borderRadius: 8,
    padding: 8
  },
  button:{
    backgroundColor: "#233d4d",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 20
  },
  buttonGenerate:{
    color: "#FFFF",
    fontWeight: "bold",
    fontSize: 20
  },
  infEspeciais:{
    fontWeight: "bold",
    fontSize: 25,
  },
  checkbox:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },blur: {
    flex:1
  }
}
)