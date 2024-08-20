import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({focused, size, color}) =>{
                    if (focused){
                        return <Ionicons size={size} color={"#233d4d"} name={"home"}/>
                    }
                    return <Ionicons size={size} color={color} name={"home-outline"}/>
                }
                
                }}/>
            <Tab.Screen name="passwords" component={Passwords} options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({focused, size, color}) =>{
                    if (focused){
                        return <Ionicons size={size} color={"#233d4d"} name={"lock-closed"}/>
                    }
                    return <Ionicons size={size} color={color} name={"lock-closed-outline"}/>
                }
                }}/>
        </Tab.Navigator>
    )
}