import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontsLoaded: false
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    return(
      <View style={style.container}>
        
       
          <View style={style.logoContainer}>
            <Image 
              style={style.logo}
              source={require('../assets/LVCC_library_Logo.png')}
            />
          </View>
          
          <View style={style.caption}>
            <Text style={style.captionText}> LVCC Digital Library </Text>
          </View>
        

        <TouchableOpacity style={style.button} onPress={() => this.props.navigation.push('Login')}>
          <Text style={style.startButton} >
                    <Text>Get Started</Text>
                  </Text>
        </TouchableOpacity>
     
      </View>
    );
  }
}


const style = StyleSheet.create ({

  container: {
    backgroundColor: '#FFF9D4',
    flex: 1
  },

  logoContainer: {
    flex: '1',
    marginTop: 100,
    alignSelf: 'center',
   
  },

  logo: {
    height: 300,
    width: 300,
  
  },

  caption: {
    flex: 1,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 100,
  },

  captionText: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
  },

  button: {
    alignSelf: 'center',
    marginBottom: 100,
    fontSize: 30,
    alignItems: 'center',
    padding: 25,
    paddingHorizontal: 100,
    backgroundColor: '#D3A13B',
    borderRadius: 10,
  },

  startButton: {
    color: '#FFF9D4',
    fontWeight: 'bold',
    fontSize: 20
  }


});