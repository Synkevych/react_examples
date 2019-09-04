import React from 'react';
import Box from './Box';
import PropTypes from 'prop-types';

import './App.css';

const NUM_COLORS = 8;
const NUM_BOXES = 16;
class App extends React.Component {
	constructor(props) {
		super(props);
		const BOXES_end = Array(NUM_BOXES)
			.fill()
			.map(this.getRandomColor, this);

		const BOXES_start = Array(NUM_BOXES).fill('#9fc2c9');

		this.state = { BOXES_start, BOXES_end, defaultColor: '#9fc2c9', openBoxId: null };
		this.handleClick = this.handleClick.bind(this);
	}
	getRandomColor() {
		let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
		return this.props.allColors[colorIndex];
	}
	handleClick(id) {
		this.setState((prevState, props) => {
			const colors = [...this.state.BOXES_start];
			let isOpenColor = this.state.openBoxId;
			let newColors =  colors.map((color, index) => {
				if (index === id) {
					if(color === colors[isOpenColor]){
						console.log("color", color, isOpenColor, colors[isOpenColor]);
						isOpenColor = null;
						return this.state.BOXES_end[index];
					} else {
						isOpenColor = index;
						return this.state.BOXES_end[index];
					}
				}
				return color;
			});
			return { BOXES_start: newColors,
				defaultColor: '#9fc2c9',
				id: [],
				openBoxId: isOpenColor
			};
		});
	}
	render() {
		let { BOXES_start } = this.state;
		console.log('BOXES_end', BOXES_start);
		const boxes = BOXES_start.map((color, index) => (
			<Box
				key={index}
				id={index}
				color={color}
				handleClick={this.handleClick}
			/>
		));
		return <div className='App'>{boxes}</div>;
	}
}

App.defaultProps = {
	allColors: [
		'AliceBlue',
		'AntiqueWhite',
		'Aqua',
		'Aquamarine',
		'Azure',
		'Beige',
		'Bisque',
		'Black',
		'BlanchedAlmond',
		'Blue',
		'BlueViolet',
		'Brown',
		'BurlyWood',
		'CadetBlue',
		'Chartreuse',
		'Chocolate',
		'Coral',
		'CornflowerBlue',
		'Cornsilk',
		'Crimson',
		'Cyan',
		'DarkBlue',
		'DarkCyan',
		'DarkGoldenRod',
		'DarkGray',
		'DarkGrey',
		'DarkGreen',
		'DarkKhaki',
		'DarkMagenta',
		'DarkOliveGreen',
		'Darkorange',
		'DarkOrchid',
		'DarkRed',
		'DarkSalmon',
		'DarkSeaGreen',
		'DarkSlateBlue',
		'DarkSlateGray',
		'DarkSlateGrey',
		'DarkTurquoise',
		'DarkViolet',
		'DeepPink',
		'DeepSkyBlue',
		'DimGray',
		'DimGrey',
		'DodgerBlue',
		'FireBrick',
		'FloralWhite',
		'ForestGreen',
		'Fuchsia',
		'Gainsboro',
		'GhostWhite',
		'Gold',
		'GoldenRod',
		'Gray',
		'Grey',
		'Green',
		'GreenYellow',
		'HoneyDew',
		'HotPink',
		'IndianRed',
		'Indigo',
		'Ivory',
		'Khaki',
		'Lavender',
		'LavenderBlush',
		'LawnGreen',
		'LemonChiffon',
		'LightBlue',
		'LightCoral',
		'LightCyan',
		'LightGoldenRodYellow',
		'LightGray',
		'LightGrey',
		'LightGreen',
		'LightPink',
		'LightSalmon',
		'LightSeaGreen',
		'LightSkyBlue',
		'LightSlateGray',
		'LightSlateGrey',
		'LightSteelBlue',
		'LightYellow',
		'Lime',
		'LimeGreen',
		'Linen',
		'Magenta',
		'Maroon',
		'MediumAquaMarine',
		'MediumBlue',
		'MediumOrchid',
		'MediumPurple',
		'MediumSeaGreen',
		'MediumSlateBlue',
		'MediumSpringGreen',
		'MediumTurquoise',
		'MediumVioletRed',
		'MidnightBlue',
		'MintCream',
		'MistyRose',
		'Moccasin',
		'NavajoWhite',
		'Navy',
		'OldLace',
		'Olive',
		'OliveDrab',
		'Orange',
		'OrangeRed',
		'Orchid',
		'PaleGoldenRod',
		'PaleGreen',
		'PaleTurquoise',
		'PaleVioletRed',
		'PapayaWhip',
		'PeachPuff',
		'Peru',
		'Pink',
		'Plum',
		'PowderBlue',
		'Purple',
		'Red',
		'RosyBrown',
		'RoyalBlue',
		'SaddleBrown',
		'Salmon',
		'SandyBrown',
		'SeaGreen',
		'SeaShell',
		'Sienna',
		'Silver',
		'SkyBlue',
		'SlateBlue',
		'SlateGray',
		'SlateGrey',
		'Snow',
		'SpringGreen',
		'SteelBlue',
		'Tan',
		'Teal',
		'Thistle',
		'Tomato',
		'Turquoise',
		'Violet',
		'Wheat',
		'White',
		'WhiteSmoke',
		'Yellow',
		'YellowGreen'
	]
};

export default App;
