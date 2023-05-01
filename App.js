import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './components/screens/login';
import ForgotPassword from './components/screens/forgotpassword'
import Home from './components/screens/Home';
import Signup from './components/screens/Signup';

export default function App() {
  const Stack = createNativeStackNavigator();
return(
  <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name ='login' component={Login} options={{headerShown: false}}/>
      <Stack.Screen name ='ForgotPassword' component={ForgotPassword} options={{headerShown: false}}/>
      <Stack.Screen name ='Home' component={Home} options={{headerShown: false}}/>
      <Stack.Screen name ='Signup' component={Signup} options={{headerShown: false}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
);
}

