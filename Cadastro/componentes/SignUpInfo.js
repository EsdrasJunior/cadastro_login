import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Image,
	Text,
	TextInput,
	StyleSheet,
} from 'react-native';


export default class SignUpInfo extends Component {

	constructor() {

		super();
	}

	render() {

		return (
			<View style = {styles.container}>
				<TouchableOpacity style = {styles.previous_button}
					onPress = {() => {}} >
					<Image style = {styles.back_arrow}
						source = {require("../icons/back.png")}
						resizeMode = "stretch" />
				</TouchableOpacity>

				<View style = {styles.text_container}>

					<Text style = {styles.title_text}>Qual é o seu nome?</Text>

					<TextInput style = {styles.input_text}
						placeholder = {"Nome"}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"#BFBFBF"} />

					<TextInput style = {styles.input_text}
						placeholder = {"Sobrenome"}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"#BFBFBF"} />

					<Text style = {styles.title_text}>Qual é a sua data de nascimento?</Text>

					<TextInput style = {styles.input_text}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"#BFBFBF"} />

					<Text style = {styles.title_text}>Por fim... Sua profissão :)</Text>

					<TextInput style = {styles.input_text}
						placeholder = {"Profissão"}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"#BFBFBF"} />

				</View>

				<TouchableOpacity style = {styles.finish_button}
					onPress = {() => {}} >
					<Image style = {styles.ok_img}
						source = {require("../icons/ok.png")} />
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({

	container: {
		height: "100%",
		backgroundColor: "white",
	},


	previous_button: {
		marginTop: 25,
		marginLeft: 13,
		width: 25,
		height: 25,
		alignItems: "center",
		justifyContent: "center",
	},

	back_arrow: {
		width: 22,
		height: 22,
	},


	text_container: {
		marginHorizontal: 25,
	},

	title_text: {
		marginTop: 20,
		color: "#F3749A",
		fontSize: 24,
		fontWeight: "bold",
	},

	input_text: {
		marginTop: 5,
		width: 160,
	},


	finish_button: {
		marginTop: 35,
		marginRight: 25,
		width: 60,
		height: 60,
		alignSelf: "flex-end",
		alignItems: "flex-end",
	},

	ok_img: {
		width: 58,
		height: 58,
	},
});