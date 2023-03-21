import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import coverProfile from '../assets/headerBG.jpg'
import arrow from '../assets/backarrow.png'
import profile from '../assets/profile_images/profile_pic.jpg'



export default class ProfileAcc extends Component{
  render(){
    return(
      <View style={style.main}>
        <TouchableOpacity style={style.top} onPress={() => this.props.navigation.goBack('Burger_menu')}>
          <Image source={coverProfile} style={style.cvr}/>
          <Image source={arrow} style={style.arrw}/>
        </TouchableOpacity>

        <View style={style.center}>
          <Image source={profile} style={style.profile}/>
          <View style={style.textCenter}>
            <Text style={style.txtprof}>Angelica Santos</Text>
            <Text style={style.status}>Partial Scholar</Text>
          </View>
        </View>

        <View style={style.bottom}>
         <View style={style.contBtn}>
          <TouchableOpacity 
          style={style.btn}
          onPress={() => this.props.navigation.navigate ('Profile_favorites')}>
            <Text style={style.txtBtn}>Favourites</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={style.btn}
          onPress={() => this.props.navigation.navigate ('Profile_currentbooks')}>
            <Text style={style.txtBtn}>Current books</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={style.btn}
          onPress={() => this.props.navigation.navigate ('Profile_notes')}>
            <Text style={style.txtBtn}>Notes</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={style.btn}
          onPress={() => this.props.navigation.navigate ('Profile_page')}>
            <Text style={style.txtBtn1}>Account</Text>
          </TouchableOpacity>
         </View>

          <ScrollView style={style.scrl}>

            <View style={style.section1}>
              <Text style={style.titleSection1}>Account Details</Text>
              <View style={style.contSection1}>
                <View style={style.txtTitle}>
                  <Text style={style.txt}>Name</Text>
                  <Text style={style.txt}>Email</Text>
                  <Text style={style.txt}>Course & Yr</Text>
                  <Text style={style.txt}>Scool ID</Text>
                  <Text style={style.txt}>Expiry Date</Text>
                 </View>

                <View style={style.data}> 
                  <Text style={style.txtData}>Angelica Santos</Text>
                  <Text style={style.txtData}>angelicasantos@gmail.com</Text>
                  <Text style={style.txtData}>BSIS 3</Text>
                  <Text style={style.txtData}>200156AS</Text>
                  <Text style={style.txtData}>xx/xx/xx</Text>
                </View> 
              </View>          
            </View>

          
            <View style={style.section1}> 
              <Text style={style.titleSection1}>Change Password</Text>
              <View style={style.contSection1}>
                <View style={style.txtTitle}>
                  <Text style={style.txt}>Current Password</Text>
                  <Text style={style.txt}>New Password</Text>
                  <Text style={style.txt}>Confirm Password</Text>
                </View>

                <View style={style.data}> 
                  <TextInput style={style.input} placeholder='Current Password'/>
                  <TextInput style={style.input} placeholder='New Password'/>
                  <TextInput style={style.input} placeholder='Confirm Password'/>
                </View>            
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  
  }
}






const style = StyleSheet.create({
  main: {
    backgroundColor: '#FFF9D4',
    flex: 1,
    width: 'auto',
    height: 1000
  },
  top: {
    marginTop: 35,

  },
  cvr: {
    width: '100%',
    height: 150,
    
  },
  arrw: {
    flex: 1,
    // justifyContent: 'flex-end',
    left: 370,
    position: 'absolute',
    width: 25,
    height: 20,
    margin: 5,
    marginTop: 10
  },

  //center
  center: {
    flex: .15,
    marginTop: 10,
    backgroundColor: '#564626',
    padding: 5,
    flexDirection: 'row',
  },

  profile: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: -45,
  },

  textCenter: {
    marginLeft: 15
  },

  txtprof: {
    color: '#FFF9D4',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 5
  },

  status: {
    color: '#FFF9D4',
    fontSize: 12,
    padding: 5
  },

  bottom: {
    flex: 1,
    backgroundColor: '#E0D7AF',
  },

  contBtn: {
    backgroundColor: '#FFF9D4',
    flexDirection: 'row',
    marginTop: 10,
    padding: 8,
  },

  btn: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  txtBtn: {
    color: '#564626',
    fontSize: 12,
  },

  txtBtn1: {
    fontWeight: 'bold',
    color: '#564626',
    fontSize: 12,
    backgroundColor: '#C1A87D',
    padding: 10,
    borderRadius: 5
  },

  scrl: {
     flex: 1,
     marginTop: 10

  },

 section1: {
   backgroundColor: '#FFF9D4',
   padding: 10,
   borderRadius: 10,
   marginBottom: 10
 },

 contSection1: {
   flexDirection: 'row',
   justifyContent: 'center'
 },

  titleSection1: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#564626',
    padding: 10,
    
  },

  txtTitle: {
    borderRightWidth: 1,
    borderRightColor: '#564626',
    
  },

  txt: {
    flex: 1,
    margin: 5,
    color: '#564626',
    fontWeight: 'bold',
    alignContent: ''

  },

  txtData: {
    margin: 5,
    color: '#564626',

  },

  input: {
    backgroundColor: '#fff',
    color: 'gray',
    margin: 5,
    padding: 8,
    fontSize: 12
  }

});




