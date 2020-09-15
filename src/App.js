import 'react-native-gesture-handler';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton }from '@react-navigation/stack';
import * as Progress from 'react-native-progress';
import MyText from './components/MyText';
import Card from './components/Card';
import UserBar from './components/UserBar';

import {TouchableWithoutFeedback, TouchableOpacity, ScrollView, FlatList,StyleSheet, SafeAreaView, Text,TextInput,View, Button, Image} from 'react-native';
import QuestionScreen from './screens/QuestionScreen';
import images from '../img/images';
import questions from './data/questions';

const Stack = createStackNavigator();

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      > 
      <Stack.Screen 
      name='Home'
      component={HomeScreen}
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
    <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={({route}) => ({title: route.params.name})}
          />
    <Stack.Screen
          name='Details'
          component={DetailsScreen}
          />
      </Stack.Navigator>
    {/* Rest of your app code */}
    </NavigationContainer>    
  );
};

function goBack(questionIndex, setQuestionIndex, navigation) {
    setQuestionIndex(questionIndex - 1)
    navigation.goBack()
}

function BackButton({questionIndex, setQuestionIndex, navigation}) {
  return (<HeaderBackButton onPress={
    ()=> goBack(questionIndex, setQuestionIndex, navigation) }
  />)
}

// function GoBack({questionIndex, setQuestionIndex}) {
//   return (
//     <TouchableOpacity onPress={()=> setQuestionIndex(questionIndex-1)}>
//       <Image width={20} height={20} source={images['back']}/>
//     </TouchableOpacity>
//     );
// }

function ProgressBar(props) {
  return (
    <Progress.Bar progress={props.pageIndex/questions.length} width={200}
    height ={6} color={styles.primaryTheme.color} unfilledColor={styles.secondaryTheme.color} borderWidth={0} /> 
    );
}

function HeaderRight(props) {
  return (
      <Text>{props.pageIndex}/{questions.length-1}</Text>
    );
}
const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container} >
    <ScrollView>
    <UserBar username='Jason' imageSource={require('../img/jason.png')}/>

    <TouchableOpacity onPress={()=> 
      // navigation.navigate('Details', {
      //   itemId: 0,
      //   other: 'whatever'
      // })
      navigation.push('QuestionScreen')
    }>
      <Card imageSource={require('../img/home_doctor.png')}
      title='Diabetes or Not? Check This Out' 
      subtitle='Subscribe specialized program to make you healthier'>
      </Card>
    </TouchableOpacity>

    <MyText style={{fontSize:22, fontWeight:'bold', paddingTop:40}}>Challenges</MyText>
    
    <TouchableOpacity onPress={()=> 
      navigation.navigate('Details', {
        itemId: 0,
        other: 'whatever'
      })
    }>

    <Card imageSource={require('../img/home_exercise.png')}
      title='Better Life from Healthy Food' 
      subtitle='Join this timed challenge for a chance to win an iPhone 12!'>
      <Button color='red' style={{'justifyContent':'center'}} title='Get Started'/>
      </Card>
    </TouchableOpacity>
    
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