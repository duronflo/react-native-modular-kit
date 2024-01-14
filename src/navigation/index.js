import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SetMainCurrencyScreen from './screens/user/SetMainCurrency'
import WelcomeScreen from './screens/Welcome'
import { Text, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons';


const Stack = createStackNavigator()



const DottedButton = () => {
    const navigation = useNavigation();
    return (
        <Entypo.Button 
        name="dots-three-vertical" 
        borderRadius={5}
        size={20} 
        color="black" 
        backgroundColor="transparent" 
        onPress={() => navigation.setParams({ openModal: true })} />
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Welcome'}
                screenOptions={{ animation: "default" }}
            >
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                    options={() => ({
                        title: 'react-native-modular-kit',
                        headerRight: DottedButton,
                    })}
                />
                <Stack.Screen
                    name='settingsMainCurrency'
                    component={SetMainCurrencyScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation