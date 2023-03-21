import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';


import coverProfile from '../assets/headerBG.jpg'
import arrow from '../assets/backarrow.png'
import profile from '../assets/profile_images/profile_pic.jpg'

export default class Notes extends Component{
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
            <Text style={style.txtBtn1}>Notes</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={style.btn}
          onPress={() => this.props.navigation.navigate ('Profile_page')}>
            <Text style={style.txtBtn}>Account</Text>
          </TouchableOpacity>
         </View>

          <ScrollView style={style.scrl}>

            <View style={style.section1}>
              
              <View style={style.contSection1}>

              <View style={style.main1}>
       <Text style={style.note}> Notes </Text>
        <View style={style.main2}>
         <View style={style.main3}>
          <TouchableOpacity style={style.view_line} onPress={() => this.props.navigation.push('Profile_note_sample')}>
            <Text style={style.text_note}> My first note </Text>
            <Text style={style.text_note_next}> Hellooooo,  </Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.view_line_plain} onPress={() => this.props.navigation.push('Profile_note_sample1')}>
            <Text style={style.text_note_plain}> Note Title </Text>
            <Text style={style.text_note_next_plain}> Some notes here </Text>
          </TouchableOpacity>

          <View style={style.view_line_plain}>
            <Text style={style.text_note_plain}> Note Title </Text>
            <Text style={style.text_note_next_plain}> Some notes here </Text>
          </View>

          <View style={style.view_line_plain}>
            <Text style={style.text_note_plain}> Note Title </Text>
            <Text style={style.text_note_next_plain}> Some notes here </Text>
          </View>

          <View style={style.view_line_plain}>
            <Text style={style.text_note_plain}> Note Title </Text>
            <Text style={style.text_note_next_plain}> Some notes here </Text>
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

  main1: { 
    backgroundColor: '#FFF9D4',
    flex: 1,
    fontFamily: 'Poppins'
  },
  main2: {
    backgroundColor: '#564626',
    height: 450,
    width: 390,
    borderRadius: 30,

  },
  note: {
    fontFamily: 'Poppins',
    fontSize: 20,
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 10,     
  }, 
  main3: {
    backgroundColor: 'white', 
    height: 410, 
    width: 350, 
    borderRadius: 5,
    margin: 20,
  }, 
  view_line: {
    backgroundColor: '#D9D9D9', 
    height: 70, 
    width: 350, 
    borderBottomWidth: 1.5,
  }, 
  text_note: {
    marginTop: 13,
    marginLeft: 15, 
    color: '#564626', 
    fontWeight: 'bold'
  }, 
  text_note_next: {
     marginTop: 5,
     marginLeft: 40, 
  }, 
   view_line_plain: {
    backgroundColor: '#FFFFF', 
    height: 70, 
    width: 350, 
    borderBottomWidth: 1.5,
  }, 
  text_note_plain: {
    marginTop: 13,
    marginLeft: 15, 
    color: '#564626', 
    fontWeight: 'bold'
  }, 
  text_note_next_plain: {
     marginTop: 5,
     marginLeft: 40, 

  }

});


