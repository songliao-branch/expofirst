import React from 'react';
import  {SafeAreaView, TextInput, ScrollView, Animated, Image, Dimensions, StyleSheet, Text, View, ImageBackground} from 'react-native';
import images from "../../img/images";

const {width} = Dimensions.get('screen');

const minAge = 10;
const segmentsLength = 91;//max age=segmentsLength+ minAge
const segmentWidth = 2; 
const segmentSpacing = 12;

const snapSegment = segmentWidth + segmentSpacing 
const spacerWidth =  (width - segmentWidth)/2;

const rulerWidth = spacerWidth*2 + (segmentsLength-1) * snapSegment
const data = [...Array(segmentsLength).keys()].map(i => i + minAge);

const indicatorWrapperWidth = 140;
const indicatorWrapperHeight = 250;
const fixedIndicatorHeight = 60;

const Ruler = () => {
    return (
        <View style={styles.ruler}>
        <View style={styles.spacer }/>

        {data.map( i=> {
            const tenth = i % 10 === 0;
            return (
            <View
                key={i}
                style={[styles.segment, {
                    backgroundColor: 'gray',
                    height: tenth ? 20 : 10,
                    marginRight: i === (data.length-1) ? 0 : segmentSpacing
                }]}
            >
            </View>);
        })}
        <View style={styles.spacer }/>
     </View>
    );
}

const HorizontalSpacer = () => {
    return (
        <View style={styles.ruler}>
        <View style={styles.spacer }/>
            <View style={{backgroundColor:'gray', height:1, width: rulerWidth}}/>
        <View style={styles.spacer }/>
     </View>
    );
}

const Markers = () => {
    return (
       
        <View style={[styles.markers]}>
        <View style={styles.spacer }/>

        {data.map( (age, index)=> {
            const tenth = index % 10 === 0;
            if (!tenth) return null;
            return (
            <Text
                key={index}
                style={{
                    width: 20,
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'gray',
                    height: tenth ? 20 : 10,
                    marginRight: age === (data.length-1) ? 0 : 
                    (index == 0 ? (snapSegment * (10 - minAge%10) - 29) : segmentSpacing*10)
                }}
            >{age}
            </Text>);
        })}
        <View style={styles.spacer}/>
     </View>
    );
}

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
            <View style={styles.indicatorContainer}> 
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
       <View>
       <Ruler/>
       <HorizontalSpacer/> 
       <Markers/>
       </View>
       
        </Animated.ScrollView>
        </SafeAreaView>
        )
      }
}

export default MySlider;

const styles = StyleSheet.create({
    ruler: {
        flexDirection:'row',
        width : rulerWidth,
        alignItems: 'flex-start',
        justifyContent:'flex-start',  
    },
    markers: {
        flexDirection:'row',
        width : rulerWidth,
        paddingTop: 7
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
    indicatorContainer: {
        left: (width - indicatorWrapperWidth) / 2 ,
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
        width: spacerWidth
    }
});
  