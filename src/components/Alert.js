
import React from "react";
import { View, Text,StyleSheet, Dimensions, Image } from "react-native";
import CyanButton from './CyanButton';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.3)',
    justifyContent: "center"
  },
  rounded: {
    backgroundColor: "white",
    width: screen.width *0.8,
    height: screen.height * 0.3,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:20,
  },
  alertText: {
    color: 'rgba(71,83,89,1)',
    fontSize:18,
    fontWeight:'500',
    paddingTop:50
  }
});

const Alert = (props) => {
    if(!props.visible) return null;

    return (
      <View style={styles.container}>
        <View style={styles.rounded}>
          <Text style={styles.alertText}>{props.title}</Text>
          <CyanButton title='OK' onPress={props.onPress}/>
        </View>
      </View>
    );
  };

  export default Alert;
