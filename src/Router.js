import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {createStore} from 'redux'

import {reducer, initialState} from './contex';
const store = createStore(reducer, initialState)

import {Provider} from 'react-redux';




import {CustomSidebarMenu} from './components';
import {Login,Timeline, Sign} from './pages'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';





const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const NavigationDrawerStructure = (props)=> {

  //Structure for the navigatin Drawer 
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  
  return (

    <View style={{ flexDirection: 'row', backgroundColor:'#e3f2fd' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            margin: 10,
            
          }}
        />
      </TouchableOpacity> 
    </View>
  ); 
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        
         options={{headerShown: false}}
        name="Login"
        component={Login}
       
        
      />
      
     

    </Stack.Navigator>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator  >
        <Stack.Screen
          options={{headerShown: false}}

          name="Timeline"
          component={Timeline}
          
        />
      </Stack.Navigator>
  );
}



function thirdScreenStack({navigation}) {
  return (
    <Stack.Navigator >
      <Stack.Screen
        options={{headerShown: false}}

        name="Sign"
        component={Sign}
        
      />

    </Stack.Navigator>
  );
}

  

function App(props) {
  return (
    <Provider store={store}>

    <NavigationContainer  >
      <Drawer.Navigator initialRouteName='Login'
        drawerContentOptions={{
          activeTintColor: 'blue',
          activeBackgroundColor:'#e3f2fd',
          
          
          itemStyle: { marginVertical: 5, },
        }}
          drawerContent={(props) => <CustomSidebarMenu userShow={props.user} {...props} />}>
            

        <Drawer.Screen 
          name="Timeline"
          
          options={{ drawerLabel: 'Timeline', headerStyle: {
            backgroundColor: '#64b5f6'
          },
          drawerIcon: config => <Icon  name="home" size={25} style={{marginRight:-10}} color="#5c6bc0" />
        }}
          component={firstScreenStack} Logout
         
          
          />

        <Drawer.Screen 
          name="Login"
          
          options={{ headerStyle: {
            backgroundColor: '#64b5f6'
          },
          drawerIcon: config => <Icon  name="login" size={25} style={{marginRight:-10}} color="#5c6bc0" />
        
        }}
          component={secondScreenStack} />
       
        <Drawer.Screen
          name="Sign"
          options={{ drawerLabel: 'Sign',headerStyle: {
            backgroundColor: '#64b5f6'
          },
          drawerIcon: config => <Icon  name="account" size={25} style={{marginRight:-10}} color="#5c6bc0" />
        }}
          component={thirdScreenStack} />


        <Drawer.Screen
          name="Logout"
          options={{ drawerLabel: 'Logout', 
          drawerIcon: config => <Icon  name="account-off" size={25} style={{marginRight:-10}} color="#5c6bc0" />
        }}
          component={thirdScreenStack} />
       
      </Drawer.Navigator>
    </NavigationContainer>
        </Provider>


  );
}

export default App;

