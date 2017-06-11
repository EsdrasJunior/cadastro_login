import React, { Component } from 'react';
import {
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';


const selec = 0.81;
const desel = 0.31;

export default class LogIn extends Component {

	constructor() {
		
		super();

		this.state = {opacity1: desel, opacity2: desel};
	}

	render() {

		return (
			<View style = {styles.container}>
				<View style = {styles.img_container}>
					<Image style = {styles.img_logo}
						source = {require("../icons/logo.png")}
						resizeMode = "stretch" />
				</View>

				<View style = {styles.login_container}>
					<TextInput style = {styles.input_text}
						onFocus = {() => {this.setState({opacity1: selec, opacity2: desel})}}
						placeholder = {"Digite seu CPF"}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"transparent"} />
					<View style = {[styles.input_line, {opacity: this.state.opacity1}]}/>
					<TextInput style = {styles.input_text}
						onFocus = {() => {this.setState({opacity1: desel, opacity2: selec})}}
						placeholder = {"Digite sua senha"}
						placeholderTextColor = {"#BFBFBF"}
						underlineColorAndroid = {"transparent"} />
					<View style = {[styles.input_line, {opacity: this.state.opacity2}]}/>
				</View>

				<TouchableOpacity style = {styles.login_button}>
					<Text style = {styles.login_text}>LOGIN</Text>
				</TouchableOpacity>

				<TouchableOpacity style = {styles.recover_button}>
					<Text style = {styles.recover_text}>Esqueceu sua senha?</Text>
					<View style = {styles.recover_line} />
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


	img_container: {
		// backgroundColor: "blue",
		marginTop: 141,
		alignItems: "center",
	},

	img_logo: {
		width: 175,
		height: 76,
	},


	login_container: {
		marginTop: 30,
		marginHorizontal: 45,
	},

	input_text: {
		marginTop: 20,
	},

	input_line: {
		marginTop: -9,
		marginHorizontal: 3,
		borderWidth: 1,
		borderColor: '#F3749A',
		// opacity: 0.51,
	},


	login_button: {
		backgroundColor: "#FFC107",
		marginTop: 59,
		marginHorizontal: 129,
		height: 35,
		borderRadius: 62,
		alignItems: "center",
		justifyContent: "center",
	},

	login_text: {
		color: "white",
		fontSize: 14,
		fontWeight: "500",
	},


	recover_button: {
		marginTop: 37,
		alignItems: "center",
		height: 24,
	},

	recover_text: {
		color: "#F6BA07",
		fontSize: 14,
		// fontFamily: ".SF NS Text",
	},

	recover_line: {
		flex: 1,
		marginTop: 4,
		width: 135,
		borderWidth: 1,
		borderColor: '#F6BA07',
		opacity: 0.51,
	},

});
