import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import img_arrow from '../assets/backarrow.png';
import img_time from '../assets/time.png';

export default class final extends Component {
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity style={styles.column} onPress={() => this.props.navigation.goBack('Burger_menu')}>
          <Text style={styles.read_title}> Library News </Text>
          <Image
            style={styles.img_arrow}
            source={img_arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.line}> 
        </View>
      
      <ScrollView style={styles.main2}>
      <TouchableOpacity style={styles.column1}>
          <View style={styles.vieww}>
            <Text>
              {' '}
             We have news for you!
            </Text>
            
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.column2}>
          <View style={styles.vieww}>
          <View style={styles.columnn}>
          <Image
            style={styles.img_time}
            source={img_time}
            resizeMode="contain"
          />
           <Text style={styles.date}> 2021-08-02 10:19:02 </Text> 
          </View>
            <Text style={styles.title}>Library Tutorials </Text>
            <Text>
             1. How to search & browse collections? Watch our tutorial video on how to use the search feature of the LVCC ILS Website:  
             https://drive.google.com/file
             d/1gSsO8cO1hENzJu0faIvnw2YBideGCeQ0/view?usp=sharing 
             2. How to borrow online? Watch our tutorial video ...
            </Text>
              <TouchableOpacity style={styles.btncont} onPress={() => this.props.navigation.push('Read_more_news_1')}>
           <Text style={styles.btn}>Read more</Text>
          </TouchableOpacity>      
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.column3}>
          <View style={styles.vieww}>
          <View style={styles.columnn}>
          <Image
            style={styles.img_time}
            source={img_time}
            resizeMode="contain"
          />
           <Text style={styles.date}> 2021-08-10 08:03:02 </Text> 
          </View>
            <Text style={styles.title}>Help on Usage </Text>
            <Text>
             SEARCH FEATURES SIMPLE SEARCH, which is the simplest method of searching catalogs just enter any keyword, whether it  
             contains titles, author(s) names, or subjects. ADVANCED SEARCH, lets you define keywords in more specific fields. If you 
             know the exact title of the book you're looking for ...
            </Text>
            <TouchableOpacity style={styles.btncont} onPress={() => this.props.navigation.push('Read_more_news_2')}>
           <Text style={styles.btn}>Read more</Text>
          </TouchableOpacity> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.column4}>
          <View style={styles.vieww}>
          <View style={styles.columnn}>
          <Image
            style={styles.img_time}
            source={img_time}
            resizeMode="contain"
          />
           <Text style={styles.date}> 2021-10-10 11:03:02 </Text> 
          </View>
            <Text style={styles.title}>Welcome Laverdarians!!! </Text>
            <Text>
             CONGRATULATIONS! ACCESS GRANTED TO USE LVCC DIGITAL LIBRARY Your library registration at La Verdad Christian College has 
             been approved. Using the email address you provided in the registration form, you can now ACCESS/LOG IN to our digital 
             collection website. Please be aware that the LVCS/LVCC ...
            </Text>
            <TouchableOpacity style={styles.btncont} onPress={() => this.props.navigation.push('Read_more_news_3')}>
           <Text style={styles.btn}>Read more</Text>
          </TouchableOpacity> 
          </View>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFF9D4',
    flex: 1,
  },
  btncont: {
    backgroundColor: '#D3A13B',
    padding: 5,
    width: 100,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 230,
  },

  btn: {
     color: '#ffff',
     textAlign: 'center',
  },
  column: {
    backgroundColor: '#FFF9D4',
    marginBottom: 10,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnn: {
    flexDirection: 'row',
  },
  date: {
    color: 'gray',
  },
  read_title: {
    fontStyle: 'Poppins',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  img_arrow: {
    height: 25,
    width: 20,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 15,
  },
   img_time: {
    height: 20,
    width: 20,
  },
  line: {
    borderBottomWidth: 1.5,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  column1: {
    backgroundColor: '#F8D898', 
    borderRadius: 5,
    height: 50,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
  },
  column2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 225,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  column3: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 240,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  column4: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 240,
    marginTop: 15,
    marginBottom: 100,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,

  },
  vieww: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
});
