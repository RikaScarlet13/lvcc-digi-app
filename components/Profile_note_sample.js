import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';

import img_arrow from '../assets/backarrow.png'

export default class final extends Component {
  render() {
    return (

      <View style={styles.main}>
      <TouchableOpacity style={styles.column} onPress={() => this.props.navigation.goBack('Profile_notes')}>
           <Image style={styles.img_arrow} source={img_arrow}resizeMode="contain"/>
      </TouchableOpacity> 

      <View style={styles.column2}>
           <TextInput
                keyboardType="default"
                placeholder=" My first note "
                style={styles.text_title}
            />

           <TextInput 
           keyboardType="default"
           placeholder=" Hellooooo "
           style={styles.text} />  

      </View> 
    </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFF9D4',
    flex: 1,
  }, 
  column:{
    backgroundColor: '#FFF9D4',
    marginBottom: 10,
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 30
  },
  img_arrow:{
    height: 25,
    width: 20,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 15,
  },
  column2:{
    backgroundColor: '#FFFFFF',
    height: 500,
    marginLeft: 20,
    marginRight: 15,
  },
  text_title: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 15,
    textAlign: 'justify',
    fontSize: 18,
    fontWeight: 'bold'

  },
  text: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 15,
    textAlign: 'justify',
    fontSize: 12,

  }
 
  
});
