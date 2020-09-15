import React from 'react';
import  {SafeAreaView, TextInput, ScrollView, Animated, Image, Dimensions, StyleSheet, Text, View, ImageBackground} from 'react-native';
import images from "../../img/images";

const {width} = Dimensions.get('screen');

const minAge = 5;
const segmentsLength = 91;//max age=segmentsLength+ minAge
const segmentWidth = 1; 
const segmentSpacing = 12;

const snapSegment = segmentWidth + segmentSpacing 
const spacerWidth =  (width - segmentWidth)/2;

const rulerWidth = spacerWidth*2 + (segmentsLength-1) * snapSegment
const data = [...Array(segmentsLength).keys()].map(i => i + minAge);

const indicatorWrapperWidth = 140;
const indicatorWrapperHeight = 250;
const fixedIndicatorHeight = 60;

class MySlider extends React.Component {

    scrollViewRef = React.createRef();
    textInputRef = React.createRef();

    constructor(props){
        super(props);
        this.state = {
            scrollX: new Animated.Value(0),
            initialAge: 25
        };
        this.state.scrollX.addListener(({value})=> {
            
            if (this.textInputRef && this.textInputRef.current) {
                this.textInputRef.current.setNativeProps({
                    text: `${Math.round(value / snapSegment) + minAge}`
                })
            }
        })
    }

   
    render() {
    return (
        <SafeAreaView>
        <Animated.ScrollView 
            ref={this.scrollViewRef}
            horizontal
            contentContainerStyle={styles.scrollview}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={160}
            snapToInterval={snapSegment}
            onScroll={Animated.event(
                [
                    {
                    nativeEvent : {
                        contentOffset: {x: this.state.scrollX}
                    }
                }
                ], {useNativeDriver: true}
            )}
        >
        <View style={styles.ruler}>
            <View style={styles.spacer }/>
            {data.map( i=> {
                const tenth = i % 10 === 0;
                return (<View
                    key={i}
                    style={[styles.segment, {
                        backgroundColor: tenth ? 'red' : 'green',
                        height: tenth ? 40 : 20,
                        marginRight: i === (data.length-1) ? 0 : segmentSpacing
                    }]}
                >
                    
                </View>);
            })}
        </View>
        </Animated.ScrollView>
        <View style={styles.indicatorWrapper}> 
            <View style={styles.indicatorTextWrapper}>
                <Image style={{position:'relative'}} source={images['age_indicator']}/>
                <TextInput 
                    ref={this.textInputRef} 
                    style={styles.indicatorTextStyle}
                    defaultValue={minAge.toString()}
                />
            </View>
           
            <View style={styles.fixedIndicator}/>
        </View>
        </SafeAreaView>
        )
      }
}

export default MySlider;

const styles = StyleSheet.create({
    ruler: {
        flexDirection:'row',
        width : rulerWidth,
        alignItems: 'flex-end',
        justifyContent:'flex-start',  
    },
    segment: {
        width: segmentWidth
    },
    scrollview: {
        justifyContent:'flex-end'
    },
    indicatorTextWrapper: {
        position:'relative',
        width: indicatorWrapperWidth,
        height: indicatorWrapperWidth,
        alignItems:'center',
    },
    indicatorTextStyle: {
        position:'absolute',
        top: 24,
        fontSize:55,
        fontWeight:'500',
        color:'rgba(81,89,97,1)'
    },
    indicatorWrapper: {
        position: 'absolute',
        left: (width - indicatorWrapperWidth) / 2 ,
        bottom:  -40,
        alignItems: 'center',
        justifyContent:'center',
        width: indicatorWrapperWidth,
        height: indicatorWrapperHeight
    },
    fixedIndicator: {
        height: fixedIndicatorHeight,
        width: 5,
        borderRadius:2,
        backgroundColor: '#00BCD4'
    }, 
    spacer: {
        width: spacerWidth,
        backgroundColor: 'red'
    }
});
  