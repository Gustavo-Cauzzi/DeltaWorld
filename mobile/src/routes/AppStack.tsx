import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import AmusementList from '../pages/AmusementList';
import ManagementTab from './ManagementTab';
import Login from '../pages/Login';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Landing" component={Landing} />
        <Screen name="AmusementList" component={AmusementList} />
        <Screen name="Login" component={Login} />
        <Screen name="ManagementTabs" component={ManagementTab} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
