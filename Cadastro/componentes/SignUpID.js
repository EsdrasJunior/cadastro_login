import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Image,
	Text,
	TextInput,
	StyleSheet,
} from 'react-native';


const selec = 0.81;
const desel = 0.31;

export default class SignUpID extends Component {

	constructor() {
		
		super();

		this.state = {opacity1: desel, opacity2: desel, opacity3: desel};
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

					<Text style = {styles.title_text}>Digite seu CPF e senha para criarmos uma conta segura</Text>
					
					<TextInput style = {styles.input_text}
						onFocus = {() => {this.setState({opacity1: selec, opacity2: desel, opacity3: desel})}}
						placeholder = {"CPF"}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"transparent"} />
					<View style = {[styles.input_line, {opacity: this.state.opacity1}]}/>
					
					<TextInput style = {styles.input_text}
						onFocus = {() => {this.setState({opacity1: desel, opacity2: selec, opacity3: desel})}}
						placeholder = {"Senha"}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"transparent"} />
					<View style = {[styles.input_line, {opacity: this.state.opacity2}]}/>

					<Text style = {styles.title_text}>Digite seu email</Text>
					
					<TextInput style = {styles.input_text}
						onFocus = {() => {this.setState({opacity1: desel, opacity2: desel, opacity3: selec})}}
						placeholder = {"Email"}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"transparent"} />
					<View style = {[styles.input_line, {opacity: this.state.opacity3}]}/>

				</View>

				<TouchableOpacity style = {styles.next_button}
					onPress = {() => {}} >
					<Image style = {styles.go_arrow}
						source = {require("../icons/go.png")} />
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
		// backgroundColor: "blue",
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
		// marginTop: 10,
		marginHorizontal: 25,
	},

	title_text: {
		marginTop: 30,
		color: "#F3749A",
		fontSize: 24,
		fontWeight: "bold",
	},

	input_text: {
		marginTop: 15,
	},

	input_line: {
		marginTop: -9,
		marginLeft: 3,
		width: 160,
		borderWidth: 1,
		borderColor: '#F3749A',
		// opacity: 0.51,
	},

	
	next_button: {
		// backgroundColor: "blue",
		marginTop: 160,
		marginRight: 25,
		width: 60,
		height: 60,
		alignSelf: "flex-end",
		alignItems: "flex-end",
	},

	go_arrow: {
		width: 58,
		height: 58,
	},
});
