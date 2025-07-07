import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Feed from "./Screens/Feed";

import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function BottomTabs(){
  const BottomTab = createBottomTabNavigator();

  return(
    <BottomTab.Navigator>
      <BottomTab.Screen name = "HomeTab" component={Home}
      options={{tabBarIcon: () => <AntDesign name="home" size={24} color="black" />}}
      />
      <BottomTab.Screen name = "FeedTab" component={Feed}
      options={{tabBarIcon: () => <FontAwesome name="feed" size={24} color="black" />}}
      />
    </BottomTab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "TelaLogin" component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen options = {{headerShown: false}} name ="HomeTab" component= {BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}