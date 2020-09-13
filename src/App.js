import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator }from '@react-navigation/stack';
import * as Progress from 'react-native-progress';
import MyText from './components/MyText';
import Card from './components/Card';

// import React, { Component,useState } from 'react';
import {TouchableWithoutFeedback, ScrollView, FlatList,StyleSheet, SafeAreaView, Text,TextInput,View, Button, Image} from 'react-native';
import QuestionPage from './QuestionPage';

const Stack = createStackNavigator();
const QuestionContext = React.createContext();

var questionPageIndex = 0;

const App = () => {
  const questions=[
  {
    pageNumber:0,
    progress: 0.5,
    type: 'options',
    question:'Have you been diagnosed with diabetes',
    options:['yes','no'],
    selected:-1
  },
  {
    pageNumber:1,
    progress: 0.2,
    type: 'options',
    question:'You are..',
    options:['Female','Male'],
    selected:-1
  }];

  return (
    <QuestionContext.Provider value={{questions}}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'> 

      <Stack.Screen
      name='Profile'
      component={ProfileScreen}
      options={({route}) => ({title: route.params.name})}
      />

      <Stack.Screen 
      name='Home'
      component={HomeScreen}
      options={{title:''}}
      />

      <Stack.Screen
      name='Details'
      component={DetailsScreen}
      />

      <Stack.Screen
      name='QuestionPage'
      component={QuestionPage}
      options={{ 
        headerTitle: (props) => <LogoTitle {...props} />,
        headerRight: () => <HeaderRight/>
      }}
      />
      </Stack.Navigator>
    {/* Rest of your app code */}
    </NavigationContainer>
  </QuestionContext.Provider>
    
  );
};

function HeaderRight() {
  return (
      <Text>number/8</Text>
    );
}

function LogoTitle() {
  const {questions} = React.useContext(QuestionContext);

  return (

    <Progress.Bar progress={questions[questionPageIndex].progress} width={200}
    height ={6} color={styles.primaryTheme.color} unfilledColor={styles.secondaryTheme.color} borderWidth={0} /> 
    );
}

const UserBar = ()=> {
  return (
    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', paddingBottom:50}}> 
      <View>
        <Text>Wecome Back</Text>
        <Text>Jason</Text>
      </View>
      <Text>Profile Image</Text>
    </View>
    );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >
    <ScrollView>
    <UserBar/>

    <TouchableWithoutFeedback onPress={()=> 
      // navigation.navigate('Details', {
      //   itemId: 0,
      //   other: 'whatever'
      // })
      navigation.navigate('QuestionPage', {
          pageNumber: 0
      })
    }>
      <Card>
        <Image style={{width:'100%'}} source={require('../img/home_doctor.png')}
        />
        <MyText style={{fontSize:16, fontWeight:'bold'}}>Diabetes or Not? Check This Out</MyText>
        <MyText style={{fontSize:15, paddingBottom:30}}>Subscribe specialized program to make you healthier</MyText>
      </Card>
    </TouchableWithoutFeedback>

    <Text>Challenges</Text>
    <TouchableWithoutFeedback onPress={()=> 
      navigation.navigate('Details', {
        itemId: 0,
        other: 'whatever'
      })
    }>
    <View>
    { <Image source={require('../img/home_exercise.png')}
    />}
    <Text>Better Life from Health Food</Text>
    <Text>Join this timed challenge for a chance to win an iPhone X!</Text>
    
    <Button style={{'justifyContent':'center'}}title='Get Started'/>
    </View>
    </TouchableWithoutFeedback>
    
    
    </ScrollView>

    </View>

    );
};



function ProfileScreen({route}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen for {route.params.name} </Text>
    </View>
    );
}

function DetailsScreen({route, navigation}) {
  const {itemId} = route.params;
  const {other} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen!</Text>
    <Text>itemId: {itemId}</Text>
    <Text>other: {JSON.stringify(other)}}</Text>
    <Button
    title="Go to Details... again"
    onPress={() => navigation.push('Details', {
      itemId: itemId + 1
    })}
    />
    <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:22,
    paddingLeft:15,
    paddingRight:15,
    color:'rgb(242,242,242)'
  },
  item: {
    padding: 10,
    fontSize:18,
    height:44,
  },
  apptext: {
    color: '#515a60'
  },
  primaryTheme: {
    color: '#5cced8' //cyan
  },
  secondaryTheme: {
    color : '#f0f0f0' //gray'
  }

});

export default App;