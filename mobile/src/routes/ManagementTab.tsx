import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManagementAmusements from '../pages/ManagementAmusement'
import ManagementTypes from '../pages/ManagementTypes';

const {Navigator, Screen} = createBottomTabNavigator();

export default function ManagementTab(){
  return(
    <Navigator
      tabBarOptions={{
        style:{
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle:{
          flexDirection: 'row',
          alignItems:'center',
          justifyContent:'center'
        },
        iconStyle:{
          flex:0,
          width: 20,
          height: 20,
        },
        labelStyle:{
          fontFamily: 'Archivo_700Bold',
          fontSize:13,
          marginLeft: 16
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor:"#ebebf5",
        inactiveTintColor:"#c1bccc",
        activeTintColor: "#AC3333",
      }}
    >
      <Screen 
        name="ManagementAmusements"
        component={ManagementAmusements}
        options={{
          tabBarLabel:"Entretenimentos"
        }}
      />
      <Screen 
        name="ManagementTypes"
        component={ManagementTypes}
        options={{
          tabBarLabel:"Tipos"
        }}
      />
    </Navigator>
  );
}
