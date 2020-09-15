import 'react-native-gesture-handler';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton }from '@react-navigation/stack';
import * as Progress from 'react-native-progress';

import {TouchableOpacity, ScrollView, FlatList,StyleSheet, SafeAreaView, Text,TextInput,View, Button, Image} from 'react-native';
import QuestionScreen from './screens/QuestionScreen';
import HomeScreen from './screens/HomeScreen';
import questions from './data/questions';
import images from '../img/images';
import ChallengeScreen from './screens/ChallengeScreen';
import BodyMetricsSlider from "./components/BodyMetricsSlider";

const Stack = createStackNavigator();

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions= {{
          gestureEnabled:false
       }
       }> 
    
      <Stack.Screen 
      name='HomeScreen'
      component={HomeScreen}
      options={{title:''}}
      />
      <Stack.Screen 
      name='ChallengeScreen'
      component={ChallengeScreen}
      options={{title:''}}
      />
      <Stack.Screen
      name='QuestionScreen' 
      options={({ navigation }) => ({

        headerBackTitleVisible: false,
          headerLeft: ()=> (<BackButton
            navigation={navigation}
            questionIndex={questionIndex}
            setQuestionIndex={setQuestionIndex}
          />
          ),
          headerLeftContainerStyle: {
                        alignItems: "flex-start",
                        paddingLeft: 25
            },
          headerTitle: ()=>(<ProgressBar pageIndex={questionIndex}/>),
          headerRight: ()=>(<HeaderRight pageIndex={questionIndex}/>),
           headerRightContainerStyle: {
                        alignItems: "flex-end",
                        paddingRight: 25
            },
      })}
    >
      {props => <QuestionScreen {...props}
       questionIndex={questionIndex}
       setQuestionIndex ={setQuestionIndex}/>}   
    </Stack.Screen>
   
   
      </Stack.Navigator>
    {/* Rest of your app code */}
    </NavigationContainer>    
  );
};

function goBack(questionIndex, setQuestionIndex, navigation) {
    if(questionIndex > 0) {
      setQuestionIndex(questionIndex - 1)
    }
    navigation.goBack()
}

function BackButton({questionIndex, setQuestionIndex, navigation}) {
  return (<HeaderBackButton 
    backImage={()=> <Image source={images['back']}/>}
    labelVisible={false}
    onPress={
    ()=> goBack(questionIndex, setQuestionIndex, navigation) }
  />)
}

const ProgressBar = ({pageIndex}) => {
  if(pageIndex == 0) return null;
  return (
    <Progress.Bar progress={pageIndex/(questions.length-1)} width={200}
    height ={6} color={styles.primaryTheme.color} unfilledColor={styles.secondaryTheme.color} borderWidth={0} /> 
    );
}

const HeaderRight = ({pageIndex}) => {
  if(pageIndex == 0) return null;
  return (
      <Text>{pageIndex}/{questions.length-1}</Text>
    );
}

const styles = StyleSheet.create({
  primaryTheme: {
    color: '#5cced8' //cyan
  },
  secondaryTheme: {
    color : '#f0f0f0' //gray'
  }
});

const test = () => {
  return (<SafeAreaView>
      <BodyMetricsSlider metrics="Weight"/>
      <BodyMetricsSlider metrics="Height"/>
    </SafeAreaView>
   );
}

export default App;