import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SetMainCurrencyScreen from './screens/user/SetMainCurrency'
import WelcomeScreen from './screens/Welcome'


const Stack = createStackNavigator()

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