import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import Rooms from "./pages/Rooms";
import Messages from "./pages/Messages";
import colors from "./styles/colors";

const Stack = createNativeStackNavigator();

function App () {

  const [userSession, setUserSession] = useState(false)

  useEffect (() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user)
    })
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login}/>
        <Stack.Screen name="SignPage" component={Sign}/>
      </Stack.Navigator>
    )
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown: false}} />
        ) : (
          <>
              <Stack.Screen 
                name="RoomsPage" 
                component={Rooms} 
                options={{
                  title: 'Odalar',
                  headerTintColor: colors.shineorange,
                  headerTitleAlign: 'center',
                  headerRight: () => 
                    <Icon
                      name= 'logout'
                      size= {25}
                      color= {colors.shineorange}
                      onPress= {() => auth().signOut()}
                    />
                }}
              />
              <Stack.Screen 
                name="MessagesPage" 
                component={Messages} 
                options={({route}) => ({
                  title: route.params.item.text,
                  headerTintColor: colors.shineorange,
                  headerTitleAlign: 'center',
                  headerRight: () => 
                    <Icon
                      name= 'logout'
                      size= {25}
                      color= {colors.shineorange}
                      onPress= {() => auth().signOut()}
                    />
                })}
              />
            </>
          )}
      </Stack.Navigator>
      <FlashMessage position='top' />
    </NavigationContainer>
  )
}

export default App