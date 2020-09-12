import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator }from '@react-navigation/stack';

// import React, { Component,useState } from 'react';
import {FlatList,StyleSheet, SafeAreaView, Text,TextInput,View, Button, Image} from 'react-native';

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

const HomeScreen = ({ navigation }) => {
  return (
    <View>

    <Image source={require('./img/home_exercise.png')} />
    <Button
    title="Go to Details"
    onPress={() =>
      //navigation.navigate('Profile', { name: 'Ksdf' })
      navigation.navigate('Details', {
        itemId: 0,
        other: 'whatever'
      })
    }
    />
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
    paddingTop:22
  },
  item: {
    padding: 10,
    fontSize:18,
    height:44,
  }
});

export default App;