import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native'

import arrow from '../assets/backarrow.png'

export default class App extends Component{
  render(){
    return(
      <View style={style.main}>
        <TouchableOpacity style={style.top} onPress={() => this.props.navigation.goBack('Burger_menu')}>
         <Text style={style.title}>Links</Text>
         <Image source={arrow} style={style.arrw}/>
        </TouchableOpacity>

        <ScrollView style={style.bottom}>
         <View style={style.cont}>
          <Text style={style.contTitle}
          onPress={() => Linking.openURL('https://www.mcgi.org/')}>Members Church of God International (MCGI) 
is a Christian religious 
</Text>
          <Text style={style.text}>is a organization, with its main headquarters in the Philippines and various remote points and coordinating centers located around the globe. Majority of the Church members are Filipino nationals but through its continuous effort to propagate the Gospel of the Lord Jesus Christ across all nations, the Church has grown into a group of diverse racial descents including Latin Americans, Africans, Asians, and Europeans among others.</Text>
          </View>

          <View style={style.cont}>
          <Text style={style.contTitle}
          onPress={() => Linking.openURL('https://laverdad.edu.ph/')}>La Verdad Christian College or LVCC</Text>
          <Text style={style.text}>is a private non-stock, a non-sectarian educational institution established in Apalit, Pampanga, Philippines. It is the first private school in the Philippines that grants scholarship programs to deserving students by providing tuition-free education and no miscellaneous fees. It is one of the best schools in Pampanga, up to regional and national levels.</Text>
          </View>

          <View style={style.cont}>
          <Text style={style.contTitle}
          onPress={() => Linking.openURL('https://www.facebook.com/laverdad.apalit/')}>La Verdad Christian School/College Facebook Page LVCC 
</Text>
          <Text style={style.text}>is a non-sectarian, non-stock, non-profit institution that offers free education to poor but deserving students.
</Text>
          </View>

          <View style={style.cont}>
          <Text style={style.contTitle}
          onPress={() => Linking.openURL('https://www.facebook.com/LVCCLibrary')}>LV Library Facebook Page This Facebook Page </Text>
          <Text style={style.text}>is intended for Library transactions and inquiries of La Verdad Christian College students and personneL</Text>
          </View>

          <View style={style.cont}>
          <Text style={style.contTitle}>LV Data Privacy Department</Text>
          </View>

          <View style={style.cont}>
           <Text style={style.contTitle}>LV Guidance Department</Text>
          </View>

          <View style={style.lower}>
           <Text style={style.lowerTitle}>USEFUL LINKS</Text>
           <View style={style.cont}>
          <Text style={style.contTitle}
          onPress={() => Linking.openURL('https://sea.lib.niu.edu/')}>Southeast Asia Digital Library
</Text>
          <Text style={style.text}>The Southeast Asia Digital Library (SEADL) exists to provide educators, students, scholars, and members of the general public with a wide variety of materials published or otherwise produced in Southeast Asia. Drawn largely from the collections of universities and scholars in this region, SEADL contains digital facsimiles of books and manuscripts, as well as multimedia materials and searchable indexes of additional Southeast Asian resources. Nations represented in the collection include Brunei, Cambodia, East Timor, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, and Vietnam.
</Text>
          </View>

          <View style={style.cont}>
          <Text style={style.contTitle}
          onPress={() => Linking.openURL('https://cpu.libguides.com/')}>Filipiniana Free & Open Access sources 
</Text>
          <Text style={style.text}>This guide features links to open access Filipiniana sources such as online repositories, websites, and libraries with open Philippine-related books.Filipiniana refers to Philippine-related books (and non-book materials). The materials may be produced inside or outside the Philippines by Filipino or non-Filipino authors. The product could be literature written in any of the languages and dialects in the Philippines or a foreign language (Goodreads).
</Text>
          </View>
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
  top: {
    marginTop: 50,
    margin: 15,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
    arrw: {
    flex: 1,
    left: 330,
    position: 'absolute',
    width: 25,
    height: 20,
  },
  bottom: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,

  },
  cont: {
    marginBottom: 10,
    textAlign: 'justify'
  },

  contTitle: {
    color: '#0066FF',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },

  text: {
    marginTop: 5

  },

  lower: {
    marginTop: 10
  },

  lowerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    
  }

});