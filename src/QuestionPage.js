import React, {useState} from 'react';
import {FlatList, View, Text, Button} from 'react-native';


function QuestionPage({route}) {
	const { pageNumber } = route.params;

	const options = ['yes', 'no'];

	const [option, setOption] = useState('')

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