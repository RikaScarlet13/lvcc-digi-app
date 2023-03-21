import 'react-native-gesture-handler';
import React, { Component } from 'react';
import FontAwesome from 'react-native-fontawesome'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList} from 'react-native';
import * as Font from 'expo-font';



  
export default class Home extends Component {
  
  
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
      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

    

  render() {
    return(
      
      <View style={style.container}>

        <ImageBackground source={require('../assets/headerBG.jpg')} style={style.header} >

          <View style={style.headerContainer}> 

              <View style={style.logoTitleContainer}>
                
                <View style={style.logoAndTitle}>
                  
                  <Image 
                  style={style.logo}
                  source={require('../assets/LVCC_library_Logo.png')}
                />

                  <Text style={style.logoTitle}> LVCC Digital Library </Text>

                <TouchableOpacity style={style.burgerMenu} onPress={() => this.props.navigation.push('Burger_menu')}>
                  <Image 
                  style={style.burgerMenuIcon}
                  source={require('../assets/icons8-menu-50.png')}
                />
                </TouchableOpacity>


                </View>

                
                
              
              </View>
            
              <View style={style.search}>
                <TextInput 
                    style={style.searchInput}
                    placeholderTextColor="#CDCDCF"
                    placeholder="Enter Keyword to Search Collection..."> 
                </TextInput>
                
                <View style={style.searchIconContainer}>
                  <Image 
                  style={style.searchIcon}
                  source={require('../assets/icons8-magnifying-glass-64.png')} />
                </View>


              </View>

          </View>



        </ImageBackground>
      <ScrollView>
        <View style={style.body}>
          


            <Text style={style.topicTitle}>Topics</Text>
            <View style={style.topics}>
              
              <View style={style.topicIcons}> 
                <Row>
                
                <TouchableOpacity style={style.topicTab}>
                  <Image 
                  style={style.topicLogo}
                  source={require('../assets/topic_icons/literature.png')}
                />
                  <Text style={style.topicText}>Literature</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.topicTab}>
                  <Image 
                  style={style.topicLogo}
                  source={require('../assets/topic_icons/social_science.png')}
                />
                  <Text style={style.topicText}>Social Sciences</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.topicTab}>
                  <Image 
                  style={style.topicLogo}
                  source={require('../assets/topic_icons/applied_sciences.png')}
                />
                  <Text style={style.topicText}>Applied Sciences</Text>
                </TouchableOpacity>

                </Row>

                <Row> 

                <TouchableOpacity style={style.topicTab}>
                  <Image 
                  style={style.topicLogo}
                  source={require('../assets/topic_icons/art_recreation.png')}
                />
                  <Text style={style.topicText}>Art and Recreation</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.topicTab}>
                  <Image 
                  style={style.topicLogo}
                  source={require('../assets/topic_icons/religion.png')}
                />
                  <Text style={style.topicText}>Religion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.topicTab}>
                  <Image 
                  style={style.topicLogo}
                  source={require('../assets/topic_icons/see_more.png')}
                />
                  <Text style={style.topicText}>See more...</Text>
                </TouchableOpacity>

                </Row>

              </View>

            </View>


            <Text style={style.topicTitle}>Suggestions</Text>

            <View style={style.suggestions}>



              <View> 

              <Row>
                <TouchableOpacity style={style.bookTab}>
                  <Image 
                  style={style.bookLogo}
                  source={require('../assets/books/communication_in_our_lives.jpg')}
                />
                  <Text style={style.topicText}>Communication in our Lives</Text>
                </TouchableOpacity>


                <TouchableOpacity style={style.bookTab} onPress={() => this.props.navigation.push('Book-selected3')}>
                  <Image 
                  style={style.bookLogo}
                  source={require('../assets/books/financial_accounting_volume_3.png')}
                />
                  <Text style={style.topicText}>Financial Accounting Volume 3</Text>
                </TouchableOpacity>

              </Row>
              <Row>
                <TouchableOpacity style={style.bookTab} onPress={() => this.props.navigation.push('Book-selected2')}>
                  <Image 
                  style={style.bookLogo}
                  source={require('../assets/books/financial_management_principle_and_applications_volume_1.png')}
                />
                  <Text style={style.topicText}>Financial Management, Principles and Application Volume 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.bookTab} onPress={() => this.props.navigation.push('Book-selected4')}>
                  <Image 
                  style={style.bookLogo}
                  source={require('../assets/books/how_things_work_encyclopedia.jpg')}
                />
                  <Text style={style.topicText}>How Things Work Encyclopedia</Text>
                </TouchableOpacity>

              </Row>

              </View>

            </View>

          

        </View>
        </ScrollView>

      </View>
    );
  }
}

const Row = ({ children }) => (
  <View style={style.row}>{children}</View>
)

const style = StyleSheet.create ({
    
  container: {
    backgroundColor: '#FFF9D4',
    flex: 1
  },

  headerContainer:{

  },

  header: {
    width: '100%',
    height: 270,
    marginBottom: 40
  },

  logoTitleContainer: {
    marginTop: 50,
    marginLeft: 20,
    
  },

  logoAndTitle: {
    flexDirection: 'row',
  },

  burgerMenu: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    alignContent: 'space-between'
    
  },

  burgerMenuIcon: {
    height: 30,
    width: 30,
    marginLeft: 130,
    marginBottom: 25
  },

  logo: {
    height: 75,
    width: 75,
    marginRight: 10
  },

  logoTitle: {
    
    alignSelf: 'center',
    fontFamily: "Poppins-Bold"
  },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 130,
    width: 350,
    shadowOffset: 1
    

  },

  searchInput:{
    marginHorizontal: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 20,
    
  },

  searchIconContainer: {
    alignSelf: 'center',
    
  },

  searchIcon: {
    height: 50,
    width: 50,
    position: 'fixed'
  }, 

  body: {
    margin: 25,
    marginBottom: 25,
    marginTop: 5
  },

  topics: {
    flex: 3,
    flexDirection: 'row',
    
  },

  topicIcons: {
    flex: 3,
    
  },  

  row: {
    flexDirection: 'row'
  },


  topicTitle: {
    alignSelf: 'center',
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    marginVertical: 10
  },

  topicTab: {
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    
    alignSelf: 'center',
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 130, 
    width: 150
  },

  topicText:{
    fontFamily: 'Poppins-Light',
    alignSelf: 'center',
    textAlign: 'center'
  },

  topicLogo: {
    height: 70,
    width: 70,
    alignSelf: 'center'
  },

  bookTab: {
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'center',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 210, 
    width: 120,
    shadowOpacity: 1,
    
  },

  bookLogo: {
    alignSelf: 'center',
    height: 150,
    width: 130
  },

});