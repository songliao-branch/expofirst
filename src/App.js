import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator }from '@react-navigation/stack';

// import React, { Component,useState } from 'react';
import {TouchableWithoutFeedback, ScrollView, FlatList,StyleSheet, SafeAreaView, Text,TextInput,View, Button, Image} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
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
    options={{title:'Welcome Song'}}
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


const UserBar = ()=> {
  return (
    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between'}}> 

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
      navigation.navigate('Details', {
        itemId: 0,
        other: 'whatever'
      })
    }>
    <View>
    <Image source={require('../img/home_doctor.png')}
    />
    <Text style={styles.apptext}>Diabetes or Not? Check This Out</Text>
    <Text>Subscribe specialized program to make you healthier</Text>
    </View>
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
    paddingRight:15
  },
  item: {
    padding: 10,
    fontSize:18,
    height:44,
  },
  apptext: {
    color: '#515a60'
  }
});

export default App;