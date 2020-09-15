import React from 'react';
import MyText from '../components/MyText';
import Card from '../components/Card';
import UserBar from '../components/UserBar';
import images from '../../img/images';
import {Text, TouchableOpacity, ScrollView,StyleSheet,View, Button, Image} from 'react-native';
import CyanButon from "../components/CyanButton";

const styles = StyleSheet.create({
    container: { 
         backgroundColor: 'white',
         height:'100%',
         justifyContent:'space-between',
         paddingHorizontal:20,
         paddingVertical: 40
    },
    title: {
        fontSize: 22,
        fontWeight:'600',
        paddingVertical:60
    },
    subtitle:{ 
        fontSize:17
    },
    buttonContainer: {
        alignItems:'center',
        justifyContent:'center'
    }
});

const RenderOK = () => {
    return (
        <View>
            <Image source={images['result_ok']}/>
            <Text style={styles.title}>You're doing great!</Text>
            <Text style={styles.subtitle}>
                Please keep up.{"\n"}{"\n"}
                Stay healthy through the Diabetes Challenger Program, where you 
                can enter into a FREE diabetes prevention program exclusively offered
                by Pulse, along with other neat prizes by taking good care of yourself.
            </Text>
        </View>
    );
}

const RenderBad = () => {
        <View>
            <Image source={images['result_bad']}/>
            <Text style={styles.title}>You're likely to have prediabetes and at high risk for type 2 diabetes.</Text>
            <Text style={styles.subtitle}>
                IT'S NOT TOO LATE{"\n"}{"\n"}
                Take control of your health today through the Diabetes Challenger Program, where you 
                can enter into a FREE diabetes prevention program exclusively offered
                by Pulse, along with other neat prizes by taking good care of yourself.
            </Text>
        </View>
}


const ResultScreen = ({navigation}) => { 
    const resultIsOk = true;
    return (
    <View style={styles.container}>
        <RenderOK/>
      
        <View style={styles.buttonContainer}>
            <CyanButon title="Learn More" onPress={()=>navigation.popToTop()}/>
            <Button style={{
               marginTop:-100
            }}title="Not Today" color='gray'/>
        </View>
    </View>)
}

export default ResultScreen;