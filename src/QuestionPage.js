import React, {useState} from 'react';
import {FlatList, View, Text, Button} from 'react-native';
// import { RadioButtons } from 'react-native-radio-buttons'

function QuestionPage() {
	
	const [option, setOption] = useState('')
	const options = ['yes', 'no']

	return (
		<View>

		<Text>Have you been diagnosed with diabetes</Text>

		<FlatList 
			data={options}
			renderItem = { ({item, index}) => 
				<Button title={item}
				color={option == options[index] ? 'blue':'gray' }
				onPress = {()=> 
					setOption(option == item ? '' : item)
				}
				/>
			 }
		/>
		
		<Button title='continue'/>

		</View>
		);
}

export default QuestionPage;