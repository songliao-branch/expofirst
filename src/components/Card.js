import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MyText from './MyText';
const styles = StyleSheet.create({
  defaultStyle: {
  	backgroundColor: 'white',
  	borderRadius:15,
  	borderBottomWidth:0,
  	shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation:5,
    marginLeft:5,
    marginRight:5,
    marginTop:5
  },
});

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.defaultStyle, this.props.style]}>
        
 		<Image style={{width:'100%'}} source={this.props.imageSource}
        />
        <MyText style={{fontSize:16, fontWeight:'bold'}}>{this.props.title}</MyText>
        <MyText style={{fontSize:15, paddingBottom:30}}>{this.props.subtitle}</MyText>
   
   		{this.props.children}
       
      </View>
    );
  }
}
