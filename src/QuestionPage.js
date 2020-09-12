import React, {useState} from 'react';
import {FlatList, View, Text, Button} from 'react-native';
// import { RadioButtons } from 'react-native-radio-buttons'

const Header = (props)=> {
	return (
		<View style={{ flexDirection: 'row', justifyContent:'space-between', padding:15}}> 
      		 <Text>Back Button</Text>
    		 <Text>{props.pageNumber}/8</Text>
   		 </View>
		);
}

function QuestionPage({route}) {
	const {pageNumber} = route.params;

	const options = ['yes', 'no'];

	const [option, setOption] = useState('')

	return (
		<View>
		<Header pageNumber = {pageNumber}/>
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