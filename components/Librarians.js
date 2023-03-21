import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import img_arrow from '../assets/backarrow.png';

import img_gef from '../assets/librarians/user_gef.png';
import img_jasyaon from '../assets/librarians/user_jasyaon.jpg';
import img_amflores from '../assets/librarians/user_amflores.png';
import img_lponseca from '../assets/librarians/user_lponseca.jpg';
import img_mjcleofe from '../assets/librarians/user_mjcleofe.jpg';
import img_rabolano from '../assets/librarians/user_rabolano.jpg';
import img_cscastro from '../assets/librarians/user_cscastro.jpg';
import img_rasenar from '../assets/librarians/user_rasenar.png';
import img_tin from '../assets/librarians/user_tin.png';

export default class Librarians extends Component {
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity style={styles.column} onPress={() => this.props.navigation.goBack('Burger_menu')}>
          <Text style={styles.lib_title}> Librarians and Library Staff </Text>
          <Image 
            style={styles.img_arrow}
            source={img_arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.line}> 
        </View>

        <ScrollView style={styles.main2}>
          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_gef}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Gilbert E. Fruel </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Librarian </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}>
                {' '}
                gilbertfruel@laverdad.edu.ph
              </Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}>
                {' '}
                www.facebook.com/gilbert.fruel
              </Text>
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_jasyaon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Jasmin C. Yaon </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Librarian </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}> jasminyaon@laverdad.edu.ph</Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}> </Text>
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_amflores}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Matthew Flores </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Librarian </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}>
                {' '}
                arnoldflores@laverdad.edu.ph
              </Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}>
                {' '}
                www.facebook.com/MattAKALevi{' '}
              </Text>
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_lponseca}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Crislen R. Ponseca </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Librarian </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}>
                {' '}
                crislenponseca@laverdad.edu.ph
              </Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}> </Text>
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_mjcleofe}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Mary Jane A. Cleofe </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Library Staff </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}>
                {' '}
                crislenponseca@laverdad.edu.ph
              </Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}> </Text>
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_rabolano}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Ruvy Anna L. Bolaño </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Library Staff </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}>
                ruvyannabolano@laverdad.edu.ph
              </Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}> </Text>
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_cscastro}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Carmina S. Castro </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Library Staff </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}>
                carminacastro@laverdad.edu.ph
              </Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}></Text>
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_rasenar}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Romel Angelo S. Senar </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Library Staff </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}>romelsenar@laverdad.edu.ph</Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}>
                {' '}
                www.facebook.com/Iantelgelo/{' '}
              </Text>
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.img}>
              <Image
                style={styles.img_style}
                source={img_tin}
                resizeMode="contain"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}> NAME </Text>
              <Text style={styles.name_full}> Christine Mae S. Velasco </Text>

              <Text style={styles.name}> POSITION </Text>
              <Text style={styles.name_full}> Library Staff </Text>

              <Text style={styles.name}> E-MAIL </Text>
              <Text style={styles.name_full}>
                christinemaevelasco@laverdad.edu.ph
              </Text>

              <Text style={styles.name}> SOCIAL </Text>
              <Text style={styles.name_full}>
                www.facebook.com/ChristineVelasco/
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFF9D4',
    flex: 1,
    fontStyle: 'Poppins',
  },
  column: {
    backgroundColor: '#FFF9D4',
    marginBottom: 10,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lib_title: {
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
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },

  column2: {
    flexDirection: 'row',
    height: 200,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  img: {
    backgroundColor: '#D9D9D9',
  },
  img_style: {
    height: 200,
    width: 100,
    marginLeft: 15,
    marginRight: 15,
  },
  info: {
    backgroundColor: '#D3A13B',
    width: 220,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  name_full: {
    fontSize: 12,
    marginLeft: 10,
  },
});
