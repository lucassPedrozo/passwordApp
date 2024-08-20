import { View, Text, StyleSheet, FlatList, ToastAndroid } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect} from 'react'
import { useIsFocused } from '@react-navigation/native'
import { PasswordItem } from './components/passwordItem'
import useStorage from '../../hooks/useStorage'

export function Passwords(){
    
    const [listPasswords,setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItem, removeItem } = useStorage()

    useEffect( () => {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }
        loadPasswords()
    }, [focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item)
        ToastAndroid.show("Senha removida com sucesso!",0.4,2)
        setListPasswords(passwords)
    }

    return(
        <SafeAreaView style={{ flex:1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>

                <FlatList
                    style={{flex: 1, paddingTop: 14}}
                    data={listPasswords}
                    keyExtractor={ (item) => String(item)} 
                    renderItem={ ({ item }) => <PasswordItem data={item} removePassword={ () => handleDeletePassword (item)}/> }
                    />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#233d4d",
        paddingTop: 58,
        paddingBottom: 14,
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        color: "#FFF",
        fontWeight: 'bold',
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
})
