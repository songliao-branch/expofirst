import React from 'react';
import {Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
  	color: 'rgba(71,83,89,1)',
  	paddingHorizontal:20,
  	paddingTop:10,
  	paddingBottom:5
  },
});

export default class MyText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.defaultStyle, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}
