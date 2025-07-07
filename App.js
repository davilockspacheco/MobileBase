import Login from "./Screens/Login";
import Home from "./Screens/Home";


import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function BottomTabs(){
  const BottomTab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="HomeTab"
          component={Home}
        />
      </BottomTab.Navigator>
    </NavigationContainer>

  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "TelaLogin" component={Login}
        />
        <Stack.Screen options = {{headerShown: false}} name ="HomeTab" component= {BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}