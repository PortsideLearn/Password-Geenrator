import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PasswordGenerator from './PasswordGenerator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='PasswordGenerator' component={PasswordGenerator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}