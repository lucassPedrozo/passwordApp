import {View, Text, StyleSheet, TouchableOpacity, Pressable, ToastAndroid} from 'react-native'
import * as Clipboard from  'expo-clipboard'
import useStorage from '../../hooks/useStorage'

export function ModalPassword({password, handleClose}){
    const { saveItem } = useStorage()
    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        
        ToastAndroid.show("Senha salva com sucesso!",0.4,2)

        await saveItem("@pass",password)

        handleClose()
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.password}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const  styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: "#000",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#0E0E0E",
        width: "90%",
        padding: 14,
        borderRadius: 8
    },
    password:{
        color: "#FFF",
        textAlign: 'center'
    },
    buttonArea:{
        flexDirection: "row",
        width: "90%",
        alignItems: 'center',
        marginTop: 8,
        justifyContent: "space-between"
    },
    button:{
        flex: 1,
        alignItems: 'center',
        margin: 14,
        padding: 8
    },
    buttonSave:{
        backgroundColor: "#233d4d",
        borderRadius: 8
    },
    buttonSaveText:{
        color: "#FFF",
        fontWeight: 'bold'
    }
})
