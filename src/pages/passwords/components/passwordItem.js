import { View, Text, StyleSheet, Pressable, ToastAndroid } from 'react-native'
import * as Clipboard from  'expo-clipboard'
import React from 'react'

export function PasswordItem({ data, removePassword}) {
  
  async function handleCopyPassword(){
    await Clipboard.setStringAsync(data)
    ToastAndroid.show("Senha copiada com sucesso!",0.4,2)
  }

  return (
    <Pressable onLongPress={removePassword} style={styles.container} onPress={handleCopyPassword}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0E0E0E",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center-between'
    },
    text:{
        color: "#FFF"
    }
})