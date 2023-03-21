import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontsLoaded: false
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      'Poppins': require('../assets/fonts/Poppins-Black.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  
  render() {
    return (
      <View style={style.container}>
        <View style={style.logoContainer}>
          
          <View style={style.logo}>
            <Image 
              style={style.logo}
              source={require('../assets/LVCC_library_Logo.png')}
            />
          </View>
          
          <View style={style.logoCaption}> 
            <Text style={{fontWeight: 'bold', fontFamily: 'Poppins-Bold'}}> LVCC Digital Library </Text>
          </View>
        
        </View>

        <View style={style.login}>
        
          <View style={style.title}>
            <Text style={style.titleCap}> Library Member Log In </Text>
            <Text style={style.titleSub}> Please enter your La Verdad Email and Password </Text>
          </View>

          <View style={style.loginInput}>
            <TextInput 
                style={style.emailTextInput}
                placeholderTextColor="#CDCDCF"
                placeholder="Enter your email" />
            <TextInput 
                style={style.passwordTextInput}
                secureTextEntry={ true }
                placeholderTextColor="#CDCDCF"
                placeholder="Enter your password" />
          </View>

          <TouchableOpacity style={style.button} onPress={() => this.props.navigation.push('Home')}>
              <Text style={style.startButton}>
                    <Text>Login</Text>
              </Text>
          </TouchableOpacity>
          
          <View style={style.forgotPassword}>
            <Text style={style.forgotText}>Forgot Password?</Text>
          </View>


        </View>

      </View>
    );
  }
}

const style = StyleSheet.create ({
  
  container: {
    backgroundColor: '#FFF9D4',
    flex: 1
  },

  logoCaption: {
    alignSelf: 'center',
    marginBottom: 30,
    
  },

  logoContainer: {
    
    marginTop: 100,
    alignSelf: 'center',
  },

  logo: {
    height: 170,
    width: 170,
  },

  title: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },

  titleCap: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    
  },

  titleSub: {
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },

  button: {
    alignSelf: 'center',
    fontSize: 30,
    alignItems: 'center',
    padding: 25,
    paddingHorizontal: 150,
    backgroundColor: '#D3A13B',
    borderRadius: 25,
    marginVertical: 30
  },

  startButton: {
    color: '#FFF9D4',
    fontWeight: 'bold',
    fontSize: 20
  },

  loginInput: {
    marginHorizontal: 35,
    paddingTop: 10
  },

  emailTextInput: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10
    
  },

  passwordTextInput: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },

  forgotPassword:{
    alignSelf: 'center',
    
  }



});