import React, { Component } from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import SignUpID from './componentes/SignUpID';
import LogIn from './componentes/LogIn';


export default class Cadastro extends Component {

	render() {

		return (
			<View>

				<LogIn/>
				{/*<SignUpID/>*/}

			</View>
		);
	}
}

const styles = StyleSheet.create({

	container: {

	},
});