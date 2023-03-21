import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView , TouchableOpacity} from 'react-native';

import arrow from '../assets/backarrow.png';

export default class Read_more_news_3 extends Component {
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity style={styles.nav} onPress={() => this.props.navigation.goBack('News')}>
          <Text style={styles.navHead}>Welcome Laverdarians!!!</Text>
          <Image source={arrow} style={{ height: 30, width: 40 }} />
        </TouchableOpacity>
        <ScrollView style={styles.content}>
          <View>
            <Text style={styles.contentTxt1}>CONGRATULATIONS!</Text>
            <Text style={styles.contentTxt1}>
              ACCESS GRANTED TO USE LVCC DIGITAL LIBRARY!
            </Text>
            <Text style={styles.contentTxt}>
              Your library registration at La Verdad Christian College has been
              approved. Using the email address you provided in the registration
              form, you can now ACCESS/LOG IN to our digital collection website.
              Please be aware that the LVCS/LVCC Library follows the guidelines
              set forth in Republic Act No. 8293, also known as the Philippine
              Intellectual Property Code. You must remember and observe the
              following as a La Verdad faculty member/student:
            </Text>
            <Text>
              1. Faculty and students of La Verdad Christian
              School/College/School are the only ones who have access to the
              LVCS/LVCC Digital Library Resources.
            </Text>
            <Text>
              2. Depending on the subject handles, the number of digital
              textbooks/Manuals may vary.
            </Text>
            <Text>
              3. After the Academic school year, access to digital
              textbooks/manuals will expire.
            </Text>
            <Text>
              4. No material from our DigiLibrary should be downloaded, printed,
              or shared. Violators who download, reproduce, print, or post our
              Digital textbooks/manuals on social media without permission will
              face penalties.
            </Text>
            <Text>
              5. Access to digital textbooks/manuals is non-transferabl
            </Text>
            <Text>
              6. Do not commit infringement or use works protected by copyright
              law without permission where such permission is required.
            </Text>
            <Text style={styles.contentTxt}>
              7. Plagiarism, or presenting another author's language, thoughts,
              ideas, or expressions as one's own original work, should be
              avoided. It is considered academic dishonesty as well as a
              violation of journalistic ethics.
            </Text>
            <Text style={styles.contentTxt}>
              Thank you for your patience and cooperation.
            </Text>
            <Text style={styles.contentTxt}>
              You can now login your account using your laverdad email and your
              given password through this link:
            </Text>
            <Text style={{ marginBottom: 10, color: 'gray' }}>
              LVCC Library
            </Text>
            <Text>For problem encountersplease contact:</Text>
            <Text style={{ marginTop: 10, marginBottom: 10, color: 'blue' }}>
              jessiesoliman@student.laverdad.edu.ph
            </Text>
            <Text style={styles.contentTxt}>Thanks be To God!</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFF9D4',
  },
  nav: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
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
    marginBottom: 10,
  },
  contentTxt1: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
 
});