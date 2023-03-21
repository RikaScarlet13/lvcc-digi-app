import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';


import coverProfile from '../assets/headerBG.jpg';
import arrow from '../assets/backarrow.png';
import profile from '../assets/profile_images/profile_pic.jpg';
import book1 from '../assets/books/communication_in_our_lives.jpg';
import book2 from '../assets/books/financial_management_principle_and_applications_volume_1.png';
import star from '../assets/star.png';


export default class CurrentBooks extends Component{
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
            <Text style={style.txtBtn1}>Current books</Text>
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
            <View style={style.content}>
              <Image source={star} style={{width: 10, height: 10, marginRight: 10}}/>
              <View style={style.content1}>
                <Image source={book1} />
                <TouchableOpacity style={style.bookbtn}>
                <Text style={{color: 'white'}}>Return</Text>
                </TouchableOpacity>
              </View>
              <View style={style.content2}>
                <Text style={style.contentTxt1}>Biblio ID</Text>
                <Text>12345</Text>
                <Text style={style.contentTxt1}>Item Code</Text>
                <Text>asdf123</Text>
                <Text style={style.contentTxt1}>Title</Text>
                <Text>Communication in our Lives</Text>
                <View style={{marginTop: 15}}>
                <Text style={style.contentTxt1}>Borrowed On</Text>
                <Text>xx-xx-xx</Text>
                <Text style={style.contentTxt1}>Due Date</Text>
                <Text>n days</Text>
                </View>
              </View>
            </View>

            <View style={style.content}>
            <Image source={star} style={{width: 10, height: 10, marginRight: 10}}/>
              <View style={style.content1}>
                <Image source={book2} />
                <TouchableOpacity style={style.bookbtn}>
                <Text style={{color: 'white'}}>Return</Text>
                </TouchableOpacity>
              </View>
              <View style={style.content2}>
                <Text style={style.contentTxt1}>Biblio ID</Text>
                <Text>1423</Text>
                <Text style={style.contentTxt1}>Item Code</Text>
                <Text>asdf123</Text>
                <Text style={style.contentTxt1}>Title</Text>
                <Text>Financial Management: Principle </Text> 
                <Text>and Applications Volume 1</Text>
                <View style={{marginTop: 15}}>
                <Text style={style.contentTxt1}>Borrowed On</Text>
                <Text>xx-xx-xx</Text>
                <Text style={style.contentTxt1}>Due Date</Text>
                <Text>n days</Text>
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
    height: 1000,
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
    flex: 0.15,
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
    marginLeft: 15,
  },

  txtprof: {
    color: '#FFF9D4',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 5,
  },

  status: {
    color: '#FFF9D4',
    fontSize: 12,
    padding: 5,
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
    alignItems: 'center',
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
    marginTop: 10,
  },

  content: {
    backgroundColor: '#C1A87D',
    padding: 20,
    borderRadius: 20,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  content1: {
    marginRight: 10,
  },
  contentTxt1: {
    fontWeight: 'bold',
  },
  content2: {
    display: 'flex',
    flexDirection: 'column',
  },
  bookbtn: {
    backgroundColor: '#D60000',
    borderRadius: 50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

