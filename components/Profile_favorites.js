import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';


import coverProfile from '../assets/headerBG.jpg'
import arrow from '../assets/backarrow.png'
import profile from '../assets/profile_images/profile_pic.jpg'
import book from '../assets/books/financial_accounting_volume_3.png'



export default class Favourites extends Component{
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
            <Text style={style.txtBtn1}>Favourites</Text>
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
            <Text style={style.txtBtn}>Account</Text>
          </TouchableOpacity>
         </View>

          <ScrollView style={style.scrl}>

            <View style={style.section1}>
              <Text style={style.titleSection1}>Favourite Books</Text>
              <View style={style.contSection1}>

              <View style={style.section1}>
            
            <View style={style.section2}>     
              <View style={style.contSection1}>
                <View style={style.txtTitle}>
              <Image source={book} style={style.imgbook}/>
                 </View>

                <View style={style.data}> 
                  <Text style={style.txtData}>Biblio id</Text>
                  <Text style={style.txtDataa}>12345</Text>
                  <Text style={style.txtData}>Item Code</Text>
                  <Text style={style.txtDataa}>asdf123</Text>
                  <Text style={style.txtData}>Title</Text>
                  <Text style={style.txtDataa}>Financial Accounting</Text>
                  <Text style={style.txtDataa}>Volume 3</Text>
                  <Text style={style.txtData}>Last Borrowed</Text>
                  <Text style={style.txtDataa}>xx-xx-xx</Text>
                </View> 
              </View>          
            </View>
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
    borderRadius: 5,
  },

  scrl: {
     flex: 1,
     marginTop: 10

  },

 section1: {
   backgroundColor: '#FFF9D4',
   padding: 10,
   borderRadius: 10,
   marginBottom: 30,
   marginTop: 10,
 },
 section2: {
   backgroundColor: '#EFE0C7',
   padding: 10,
   borderRadius: 10,
   marginBottom: 60,
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

imgbook: {
    width: 100,
    height: 150,
    marginTop: 30,
    marginRight: 30,
  },
  txtData: {
    fontWeight: 'bold',
    margin: 5,
    color: '#564626',
  },
  txtDataa: {
    margin: 5,
    color: '#564626',
    marginLeft: 35,
  },

});
