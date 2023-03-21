import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import arrow from '../assets/backarrow.png'
import book from '../assets/books/how_things_work_encyclopedia.jpg'
import paper from '../assets/paper.png'
import bookmark from '../assets/bookmark.png'

export default class BookSelected extends Component{
  render(){
    return(
      <View style={style.main}>
      <ScrollView style={style.main2}>
        <Image source={arrow} style={style.arrw}/>
        <View style={style.top}>
          <Image source={book} style={style.imgbook}/>
          <View style={style.left}>
           <View style={style.contUp}>
            <Image source={bookmark} style={style.iconbkmrk}/>
            <Text>Text</Text>
           </View>
           
            <Text style={style.titlebook}>How Things Work</Text>
            <Text style={style.titlebook}>Encyclopedia</Text>
            <Text style={style.link}>-Love, Carry</Text> 
            <Text>-Personal Name; </Text>
            <Text style={style.link}>-Smith, Penny</Text>
            <Text>-Personal Name; </Text>
            <Text style={style.link}>-Grady, Rachael</Text>
            <Text>-Personal Name; </Text>
            <Text style={style.lowerLeft}>Description not Available</Text>
          
          </View>
        </View>

        <View style={style.center}>
          <Text style={style.txtcenter}>Availability</Text>
          <DataTable>
           <DataTable.Header>
            <DataTable.Title></DataTable.Title>
            <DataTable.Title></DataTable.Title>
            <DataTable.Title></DataTable.Title>
           </DataTable.Header>

           <DataTable.Row>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
           <DataTable.Cell></DataTable.Cell>
           <DataTable.Cell></DataTable.Cell>
           <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          </DataTable>
        </View>

        <View style={style.bottom}>
          <Text style={style.mainTitle}>Detail Information</Text>
          <View style={style.content}>
            <Text style={style.titleContent}>Series Title</Text>
            <Text style={style.txt}>-</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Call Number</Text>
            <Text style={style.txt}>CIR 600 L897h 2010</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Publisher</Text>
            <Text style={style.txt}>New York : DK Publishing, Inc.,., 2010</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Collation</Text>
            <Text style={style.txt}>-</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Language</Text>
            <Text style={style.txt}>English</Text>
          </View>

           <View style={style.content}>
            <Text style={style.titleContent}>ISBN/ISSN</Text>
            <Text style={style.txt}>978-0-7566-58335-9</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Classification</Text>
            <Text style={style.txt}>600</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Content Type</Text>
            <Text style={style.txt}>-</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Media Type</Text>
            <Text style={style.txt}>-</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Carrier Type</Text>
            <Text style={style.txt}>online resource</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Edition</Text>
            <Text style={style.txt}>-</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Subject(s)</Text>
            <Text style={style.txt}>Science Technology</Text>
          </View>

          <View style={style.content}>
            <Text style={style.titleContent}>Specific Detail Info</Text>
            <Text style={style.txt}>-</Text>
          </View>

          <View style={style.content}>
            <View style={style.titleContent}>
              <Text style={style.titleContent}>Statement of </Text>
              <Text style={style.titleContent}>Responsibility</Text>
            </View>
            <Text style={style.txt}>-</Text>
          </View>

          <View style={style.contentlower}>
            <Text style={style.txtlower}>Other version/related</Text>
            <Text style={style.txtStatus}>No other version available</Text>
          </View>

          <View style={style.contentlower}>
            <Text style={style.txtlower}>File Attachment</Text>
            <View style={style.file}>
             <Image source={paper} style={style.paper}/>
              <Text style={style.txtfile}>How Things Work Encyclopedia</Text>
            
            </View>
          </View>

          <TouchableOpacity style={style.btncont} onPress={() => this.props.navigation.push('Profile_page')}>
           <Text style={style.btn}>Borrow</Text>
          </TouchableOpacity>

        
        </View>
        </ScrollView>
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

   arrw: {
    flex: 1,
    left: 350,
    position: 'absolute',
    width: 25,
    height: 20,
    marginTop: 40
  },

  top: {
    margin: 15,
    flexDirection: 'row'
  },

  imgbook: {
    width: 150,
    height: 200
  },

  left: {
    margin: 10
  },

  contUp: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center'
  },

  iconbkmrk: {
    width: 15,
    height: 15
  },

  titlebook: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#564626'
    
  },

  link: {
    color: '#87CEEB',
    textDecorationLine: 'underline',
    marginBottom: 5
    
  },

  lowerLeft: {
    fleX: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#8C8FAC',
    borderBottomColor: '#8C8FAC',
    fontStyle: 'italic',
    color: 'gray',
    marginTop: 80,
    fontSize: 12,
    textAlign: 'center'
    
  },

  center: {
    margin: 20,
  },

  txtcenter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#564626'
  },

  bottom: {
    margin: 20
  },

  content: {
    flexDirection: 'row'
  },

  mainTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#564626'
  },

  titleContent: {
    fontWeight: 'bold',
    alignItems: 'right',
    flex: .4,
    color: '#564626'
  },

  txt: {
    flex: .6,
    fontSize: 12,
    marginLeft: 40,
    alignContent: 'center',
    color: '#564626'
  },

  contentlower: {
    
  }, 
  
  txtlower: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    color: '#564626'
  },

  btncont: {
    backgroundColor: '#4C9A2A',
    padding: 5,
    width: 100,
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 10
  },

  btn: {
     color: '#ffff',
     textAlign: 'center',
  },

  txtStatus: {
    color: 'gray'
  },

  paper: {
    width: 15,
    height: 15
  },

  file: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  txtfile: {
    fontStyle: 'italic',
    marginLeft: 5,
    fontSize: 12,
    color: '#87CEEB',
    textDecorationLine: 'underline',
  
  }


});