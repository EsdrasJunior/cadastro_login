import React, { Component } from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import LogIn from './componentes/LogIn';
import SignUpID from './componentes/SignUpID';
import SignUpInfo from './componentes/SignUpInfo';


export default class Cadastro extends Component {

	render() {

		return (
			<View>

				<SignUpInfo/>

			</View>
		);
	}
}

const styles = StyleSheet.create({

	container: {

	},
});