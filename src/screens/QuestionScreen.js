import React, {useState} from 'react';
import {TouchableOpacity, Image, View, Text, Button, StyleSheet} from 'react-native';

import questions from '../data/questions';
import MyText from '../components/MyText';
import images from '../../img/images';
import SelectButton from '../components/SelectButton';
import CyanButton from '../components/CyanButton';
import Alert from '../components/Alert';
import alerts from '../data/alerts';
import Slider from '@react-native-community/slider';

const styles = StyleSheet.create({
 container: {
 	backgroundColor: 'white',
 	alignItems:'center',
 	height:'100%',
 	
 	justifyContent:'space-between'
 },
  primaryTheme: {
    color: '#5cced8' //cyan
  },
  secondaryTheme: {
    color : '#f0f0f0' //gray'
  }, 
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
});

function QuestionScreen({questionIndex, setQuestionIndex, route, navigation}) {

	const [selectedIndex, setSelectedIndex] = useState(-1)
	const [alertShow, setAlertShow] = useState(false);

	const [gender, setGender] = useState(-1);//-1:unselected, 0:female, 1:male

	const data = questions[questionIndex]

	function onSubmitted() {
		if (questionIndex == 0) {
			setAlertShow(true);
		} else {
			goToNextScreen();
		}
	}

	function onAlertClosed() {
		setAlertShow(false);
		goToNextScreen();
	}

	function goToNextScreen() {
		setQuestionIndex(questionIndex + 1)
		navigation.push('QuestionScreen')
	}

	const RenderLabel = () => 
		<MyText style={{justifyContent:'center',paddingTop:35, fontWeight:'bold', fontSize:28}}>
				{data.question}
		</MyText>;
	
	const RenderSelections= ({type}) => {
		switch (type) {
			case 'radio_text':
				return <RenderRadioText/>;
			case 'radio_pic':
				return <RenderGenderSelection/>;
			case "scale_age":
				return null;
			case "scale_body":
				return <RenderBodyMetrics/>;
			default:
				return null;
		}
	}

	const RenderBodyMetrics= ()=> {
		return (
			<View>
				<Image source={gender==0?images['woman']:images['man']}/>
				<Slider
					style={{width: 300, height: 40}}
					minimumValue={0}
					maximumValue={1}
					
					thumbImage={()=>
					<Image source={require('../../img/back.png')}/>}
					minimumTrackTintColor="blue"
					maximumTrackTintColor="rgba(0,0,0,0.2)"
  				/>
			</View>
		);
	}

	const RenderRadioText= () => {
		return (<View style={{width:'100%', paddingVertical:50}}>
				{data.options.map( (option,index) => (
                <SelectButton
                  key={option.id}
                  title={option.text}
                  selected={selectedIndex == index}
                  onPress={()=>
                   setSelectedIndex(selectedIndex == index ? -1 :index)}
                />
              ))}
			</View>);
	}

	const RenderGender =() => {
		if (gender == 0) {
			return (<Image source={images['female_selected']}/>);
		} else if (gender == 1) {
			return (<Image source={images['male_selected']}/>);
		}
		
		return (<Image source={images[props.isFemale ?'female_unselected':'male_unselected']}/>);
	}

	function RenderFemale() {
		if (gender == 0) {
			return (<Image source={images['female_selected']}/>);
		} 
		return (<Image source={images['female_unselected']}/>);
	}

	function RenderMale() {
		if (gender == 1) {
			return (<Image source={images['male_selected']}/>);
		} 
		return (<Image source={images['male_unselected']}/>);
	}

	function RenderGenderSelection() {
		return (
			<View style={{flex:1, flexDirection:'row', alignItems:'space-around'}}>
				<TouchableOpacity onPress={()=>setGender(0)}>
					<RenderFemale/>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>setGender(1)}>
					<RenderMale/>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			
			<Image source ={images[data.image]}/>
			<RenderLabel/>

			<RenderSelections type={data.type}/>
			
			<CyanButton onPress={()=>
				onSubmitted()
			} title='Continue'/>
			<Alert 
				title={alerts['start']}
				visible={alertShow} onPress={()=>
				onAlertClosed()
			}/>
		</View>
	);
}

export default QuestionScreen;