import React from 'react';
import MyText from '../components/MyText';
import Card from '../components/Card';
import UserBar from '../components/UserBar';
import images from '../../img/images';
import {TouchableOpacity, ScrollView,StyleSheet,View, Button} from 'react-native';
import ChallengeScreen from "./ChallengeScreen";

const styles = StyleSheet.create({
     container: {
      flex: 1,
      paddingTop:22,
      paddingLeft:15,
      paddingRight:15,
      color:'rgb(242,242,242)'
    },
    apptext: {
      color: '#515a60'
    }
  });


const HomeScreen = ({navigation}) => {

    return (
      <View style={styles.container} >
      <ScrollView>
      <UserBar username='Jason' imageSource={images['jason']}/>
  
      <TouchableOpacity onPress={()=> 
        navigation.push('QuestionScreen')
      }>
        <Card imageSource={images['home_doctor']}
        title='Diabetes or Not? Check This Out' 
        subtitle='Subscribe specialized program to make you healthier'>
        </Card>
      </TouchableOpacity>
  
      <MyText style={{fontSize:22, fontWeight:'bold', paddingTop:40}}>Challenges</MyText>
      
      <TouchableOpacity onPress={()=> 
        navigation.push('ChallengeScreen')
      }>
  
      <Card imageSource={images['home_exercise']}
        title='Better Life from Healthy Food' 
        subtitle='Join this timed challenge for a chance to win an iPhone 12!'>
        <Button color='red' style={{'justifyContent':'center'}} title='Get Started'/>
        </Card>
      </TouchableOpacity>
      
      </ScrollView>
      </View>
  
      );
  };


export default HomeScreen;