import React from 'react';
import  {SafeAreaView, TextInput, ScrollView, Animated, Image, Dimensions, StyleSheet, Text, View, ImageBackground} from 'react-native';
import images from "../../img/images";
import Slider from '@react-native-community/slider';

const {width} = Dimensions.get('screen');

const [minWeight, maxWeight] = [50.0, 150.0];
const [minHeight, maxHeight] = [150.0, 200.0];
const sliderWidth = 280;
const floatingContainerWidth = 50;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    labelContainer: {
       padding:10,
       justifyContent:'flex-end'
    },
    label:{
        fontSize: 18,
        fontWeight:"600"
    },
  
    floatingContainer: {
        backgroundColor: 'rgba(89,126,247,1)',
        borderRadius: 15,
        height: 30,
        width: floatingContainerWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    floatingLabel: {
        color:'white',
        fontSize: 12,
        fontWeight:'bold'
    },
    
});


function updatedX(props) {
    const isWeight = props.metrics == 'Weight';

    const percentage = (props.positionX - (isWeight ? minWeight : minHeight))/(isWeight? (maxWeight - minWeight): (maxHeight-minHeight))
    const newX = percentage * sliderWidth - floatingContainerWidth/2
    
    return newX
}

const FloatingTracker = (props) => {
    return (
        <View style={[styles.floatingContainer, {
            left: updatedX(props)
        }]}>
            <Text style={styles.floatingLabel}>
                {props.positionX}{props.metrics=="Weight"? " kg":" cm"}
            </Text>
        </View>
    );
}

const SliderWithLabel = (props) => {

    const [positionX, setPositionX] = React.useState(
        props.metrics == "Height" ? 170.0 : 60.0
    );

    return (
        <View>
             <FloatingTracker positionX={positionX} metrics={props.metrics}/>
             <Slider
                    style={{ width: sliderWidth}}
                    step={1}
                    
                    minimumValue={props.metrics=="Weight"? minWeight: minHeight}
                    maximumValue={props.metrics=="Weight"? maxWeight: maxHeight}
                    value={positionX}
                    onValueChange={val => setPositionX(val) }
                    thumbImage={()=> <Image source={images['back']}></Image>}
                    thumbTintColor='rgba(89,126,247,1)'
                    maximumTrackTintColor='#d3d3d3' 
                    minimumTrackTintColor='rgba(89,126,247,1)'
                />
        </View>
    );
}

const BodyMetricsSlider = (props)=> {

        return (
            <View style={styles.container}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{props.metrics}</Text>
                </View>
                <SliderWithLabel metrics={props.metrics}/>
            </View>
        );
    }


export default BodyMetricsSlider;