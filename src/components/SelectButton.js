
import React from 'react';
import {Image, TouchableOpacity, View, Button, StyleSheet } from 'react-native';
import MyText from './MyText';
import images from '../../img/images';

const styles = StyleSheet.create({
  unselected: {
  	backgroundColor: 'white',
  	borderRadius:15,
  	borderBottomWidth:0,
  	shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation:5,
    marginLeft:15,
    marginRight:15,
    marginTop:5,
    height:100,
    width:'90%'
  },
  selected: {
  	backgroundColor: 'white',
  	borderRadius:15,
  	borderWidth:2,
  	borderColor:'#5cced8',
  	shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation:5,
    marginLeft:15,
    marginRight:15,
    marginTop:5,
    height:100,
    width:'90%'
  },
  container: {
  	flex:1,
  	flexDirection: 'row',
  	justifyContent:'space-between',
  	alignItems:'center',
  	paddingLeft:10,
  	paddingRight:20,
  }
});


export default class SelectButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[this.props.selected? styles.selected : styles.unselected, this.props.style]}>
      	<View style={styles.container}>
      		<MyText style={{fontWeight:'500', fontSize:20}}>{this.props.title} {this.props.selected}</MyText>
      		<Image source={this.props.selected ? images['selected'] : images['unselected']}/>
      	</View>
      </TouchableOpacity>
    );
  }
}
