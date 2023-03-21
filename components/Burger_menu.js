import 'react-native-gesture-handler';
import {Component} from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';

import close from "../assets/close.png";
import profile from "../assets/profile_images/profile_pic.jpg";

export default class Burger_menu extends Component {
  render() {
    return(
      <View style={styles.main}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.cover} onPress={() => this.props.navigation.goBack('Home')}>
          <Image source={close} style={{ height: 20, width: 20, margin: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inside} onPress={() => this.props.navigation.push('Profile_page')} >
            <Image source={profile} style={{height: 80, width: 80, marginTop: -35, marginLeft: 20, borderRadius: 50,}} />
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 20}}>Angelica Santos</Text>
          </TouchableOpacity>
          <View style={{marginTop: 30}}>
          <TouchableOpacity style={styles.choice} onPress={() => this.props.navigation.push('Librarians')}>
            <Text style={styles.choiceTxt}>Librarians</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice} onPress={() => this.props.navigation.push('Links')}>
            <Text style={styles.choiceTxt}>Links</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice} onPress={() => this.props.navigation.push('News')}>
            <Text 
            style={styles.choiceTxt}>News</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.lgt}>
            <Text 
            style={{fontWeight: 'bold', margin: 10, marginTop: 70, fontSize: 20}}
            onPress={() => this.props.navigation.push('Splash')}
            >Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
  },
  content: {
    display: 'flex',
    marginTop: 35,
    backgroundColor: "#FFF9D4",
    height: 450,
    width: 300,
  },
  cover: {
    alignItems: 'flex-end',
    backgroundColor: '#C4A484',
    width: 300,
    height: 100
  },
  inside: {
    display: 'flex',
    flexDirection: 'row',
  },
  choice: {
    marginTop: 20,
    marginLeft: 20,
    borderBottomWidth: 0.5,
  },
  choiceTxt: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20
  },
  lgt: {
    display: 'flex',
    alignItems: 'flex-end'
  }
})