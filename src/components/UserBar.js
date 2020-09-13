import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
	color: 'rgba(71,83,89,1)',
  },
});

const UserBar = (props)=> {
  return (
    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', paddingBottom:50}}> 
      <View>
        <Text style={{color:'rgb(71,83,89', fontSize:15, fontWeight:'600'}}>Wecome Back</Text>
        <Text style={{color:'rgb(71,83,89', fontSize:30, fontWeight:'600'}}>{props.username}</Text>
      </View>
      <Image style={{width:62, height:62}}source={props.imageSource}
        />
    </View>
    );
}

export default UserBar;