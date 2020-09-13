import React from 'react';
import {View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
  	backgroundColor: 'white',
  	borderRadius:15,
  	
  },
});

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.defaultStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}
