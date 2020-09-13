import React, {useState} from 'react';
import {FlatList, Image, View, Text, Button, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import questions from '../data/questions';
import MyText from '../components/MyText';
import images from '../../img/images';
import SelectButton from '../components/SelectButton';

const styles = StyleSheet.create({
 container: {
 	backgroundColor: 'white',
 	alignItems:'center',
 	height:'100%'
 },
  primaryTheme: {
    color: '#5cced8' //cyan
  },
  secondaryTheme: {
    color : '#f0f0f0' //gray'
  }
});

function LogoTitle() {
  return (
    <Progress.Bar progress={0.1} width={200}
    height ={6} color={styles.primaryTheme.color} unfilledColor={styles.secondaryTheme.color} borderWidth={0} /> 
    );
}

// class QuestionScreen extends React.Component {
// 	static navigationOptions = {
//    	 title: 'Home',
//  	 };

// 	render() {
// 		const {navigation} = this.props;
// 		const pageIndex = navigation.getParam('pageIndex', 0)

// 		return (
// 			<View>
// 				<Text>questions[pageIndex].question</Text>
// 			</View>
// 			);
// 	}
// }

function QuestionScreen({route}) {
	const { pageIndex } = route.params;

	const [selectedIndex, setSelectedIndex] = useState(-1)

	const data = questions[pageIndex]

	return (
		<View style={styles.container}>
			<LogoTitle/>
			<Image source ={images[data.image]}/>
			<MyText style={{fontWeight:'bold', fontSize:28}}>
				{data.question} selected:{selectedIndex}
			</MyText>

			<View style={{width:'100%'}}>
				{data.options.map( (option,index) => (
                <SelectButton
                  key={option.id}
                  title={option.text}
                  selected={selectedIndex == index}
                  onPress={()=>
                   setSelectedIndex(selectedIndex == index ? -1 :index)}
                />
              ))}
				
			</View>
			
			<Button title='continue'/>
		</View>
	);
}

export default QuestionScreen;