import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();


const Tab = createMaterialTopTabNavigator();

import Splash from './components/Splash';
import Login from './components/Login';
import Home from './components/Home';
import BurgerMenu from './components/Burger_menu';
import Librarians from './components/Librarians';
import Links from './components/Links';
import News from './components/News';
import ProfileAcc from './components/Profile_page';
import Notes from './components/Profile_notes';
import CurrentBooks from './components/Profile_currentbooks';
import Favorites from './components/Profile_favorites';
import MoreNews1 from './components/Read_more_news_1';
import MoreNews2 from './components/Read_more_news_2';
import MoreNews3 from './components/Read_more_news_3';
import Book1 from './components/Book-selected2';
import Book2 from './components/Book-selected3';
import Book3 from './components/Book-selected4';
import Note1 from './components/Profile_note_sample1';
import Note from './components/Profile_note_sample';

export default class App extends Component {
  render () {
    return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>         
          <Stack.Screen component ={Splash} name="Splash"/>
          <Stack.Screen component ={Login} name="Login"/>
          <Stack.Screen component ={Home} name="Home"/>
          <Stack.Screen component ={BurgerMenu} name="Burger_menu"/>
          <Stack.Screen component ={Librarians} name="Librarians"/>
          <Stack.Screen component ={Links} name="Links"/>
          <Stack.Screen component ={News} name="News"/>
          <Stack.Screen component ={ProfileAcc} name="Profile_page"/>
          <Stack.Screen component={Notes} name="Profile_notes"/>
          <Stack.Screen component={CurrentBooks} name="Profile_currentbooks"/>
          <Stack.Screen component={Favorites} name="Profile_favorites"/>
          <Stack.Screen component={MoreNews1} name="Read_more_news_1"/>
          <Stack.Screen component={MoreNews2} name="Read_more_news_2"/>
          <Stack.Screen component={MoreNews3} name="Read_more_news_3"/>
          <Stack.Screen component={Book1} name="Book-selected2"/>
          <Stack.Screen component={Book2} name="Book-selected3"/>
          <Stack.Screen component={Book3} name="Book-selected4"/>
          <Stack.Screen component={Note} name="Profile_note_sample"/>
          <Stack.Screen component={Note1} name="Profile_note_sample1"/>

        </Stack.Navigator>

        
      </NavigationContainer>

    );
  }
}


 