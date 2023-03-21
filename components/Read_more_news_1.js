import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import arrow from "../assets/backarrow.png"

export default class Read_more_news_1 extends Component {
  render() {
    return(
      <View style={styles.main}>
        <TouchableOpacity style={styles.nav} onPress={() => this.props.navigation.goBack('News')}>
          <Text style={styles.navHead}>Library Tutorials</Text>
          <Image source={arrow} style={{height: 30, width: 40}}/>
        </TouchableOpacity>
        <View style={styles.content}>
          <View>
            <Text style={styles.contentTxt1}>1. How to search & browse collections?</Text>
            <Text style={styles.contentTxt}>Watch our tutorial video on how to use the search feature of the LVCC ILS Website:</Text>
            <Text style={styles.contentTxt2}>https://drive.google.com/file/d/1gSsO8cO1hENzJu0faIvnw2YBideGCeQ0/view?usp=sharing</Text>
            <Text style={styles.contentTxt1}> 2. How to borrow online? </Text>
            <Text style={styles.contentTxt}>Watch our tutorial video on how to borrow the LVCC ILS Website collection:</Text>
            <Text style={styles.contentTxt2}>https://drive.google.com/file/d/1TyO8J4Ut1u6_59DlEWzQ8buetvQQ1NZN/view?usp=sharing</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: "#FFF9D4"
  },
  nav: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1
  },
  navHead: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  contentTxt: {
    marginBottom: 10
  },
  contentTxt1: {
    marginBottom: 10,
    fontWeight: "bold"
  },
  contentTxt2: {
    marginBottom: 10,
    color: "blue"
  },
})