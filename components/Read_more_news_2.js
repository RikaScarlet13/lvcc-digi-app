import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import img_arrow from '../assets/backarrow.png';


export default class Read_more_news_2 extends Component {
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity style={styles.column} onPress={() => this.props.navigation.goBack('News')}>
          <Text style={styles.read_title}> Help On Usage </Text>
          <Image
            style={styles.img_arrow}
            source={img_arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.line}> 
        </View>

        <TouchableOpacity style={styles.column2}>
          <View style={styles.vieww}>
            <Text style={{ fontWeight: 'bold' }}> SEARCH FEATURES </Text>
            <Text>
              {' '}
              SIMPLE SEARCH, which is the simplest method of searching catalogs
              just enter any keyword, whether it contains titles, author(s)
              names, or subjects.
            </Text>
            <Text style={{ fontWeight: 'bold' }}> ADVANCED SEARCH, </Text>
            <Text>
              {' '}
              lets you define keywords in more specific fields. if you know the
              exact title of the book you are looking for just type the title in
              the title field and the system will limit its search to title
              fields only. the location field will let you narrow search results
              by specific location so only collection that exists in the
              selected location get fetched by the system.{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFF9D4',
    flex: 1,
  },
  column: {
    backgroundColor: '#FFF9D4',
    marginBottom: 10,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  line: {
    borderBottomWidth: 1.5,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  column2: {
    backgroundColor: '#FFFFFF',
    height: 500,
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
  vieww: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
});