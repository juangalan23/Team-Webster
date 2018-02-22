import React from 'react';
import axios from 'axios';
import Drinks from './Drinks.jsx'
import { Dropdown } from 'semantic-ui-react';

	const options =	[
				{text: 'Party', value: "party"},
				{text: "Relax", value: "chill"},
				{text: "Classical", value: "classical"},
				{text: "Trashed", value: "rock"},
				{text: "Romance", value: "romance"}
			]
class Drop extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
				<Dropdown placeholder="Choose Mood" options= {options}  value={this.props.category} onChange={(e, {value}) => (this.props.selectHandler(value))}/>
		)
	}
}

export default Drop
