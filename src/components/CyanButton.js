import React from 'react';
import {TouchableOpacity,Text, View, Button, StyleSheet } from 'react-native';
import MyText from './MyText';


const styles = StyleSheet.create({
 MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
 
  SubmitButtonStyle: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:40,
    borderWidth: 0,
    width:'70%',
    borderColor: '#fff'
  },
 
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'600',
      fontSize:16
  }
});

export default class CyanButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.SubmitButtonStyle} onPress={this.props.onPress}>
     	<Text style={styles.TextStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}