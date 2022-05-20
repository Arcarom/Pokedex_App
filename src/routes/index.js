import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import PokeHome from '../screens/PokeHome';
import PokeList from '../screens/PokedexList';

const tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <tab.Navigator initialRouteName="PokeHome" shifting={false}>
      <tab.Screen
        name="Pesquisar"
        component={PokeHome}
        options={{
          headerShown: false,
          tabBarStyle: Stylebar.tabBarStyle,
          tabBarIcon: () => (
            <Image source={require('../assets/pokeballOpen.png')} />
          ),
        }}
      />
      <tab.Screen
        name=" "
        component={PokeList}
        options={{
          headerShown: false,
          tabBarStyle: Stylebar.tabBarStyle,
          tabBarIcon: () => (
            <Image source={require('../assets/pokedexIcon.png')} />
          ),
        }}
      />
    </tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="HomeScreen">
        <stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <stack.Screen
          options={{headerShown: false}}
          name="PokeHome"
          component={HomeTab}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const Stylebar = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'rgb(55,25,90)',
    borderRadius: 13,
    position: 'absolute',
    elevation: 0,
    height: 60,
    marginHorizontal: 20,
  },
});
