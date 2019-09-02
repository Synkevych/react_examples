import React from 'react';
import Box from './Box';
import PropTypes from 'prop-types';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { colors: [] };

	}
	componentDidMount(){
		this.getColor()
	}

	getColor = () => {
		setTimeout(() => {
			const randInt = Math.floor(Math.random() * this.props.allColors.length);
			const colors = this.state.colors.map((inst, i) => {
				if (i === randInt) {
					console.log('colors', randInt);
					return this.props.allColors[
						Math.floor(Math.random() * this.props.allColors.length)
					];
				}
				return inst;
			});
			this.setState({ colors });
			this.getColor();
		}, 300);
	}

	componentWillMount() {
		let colors = [];
		for (let i = 0; i < 38; i++) {
			colors[i] = this.props.allColors[
				Math.floor(Math.random() * this.props.allColors.length)
			];
		}
		this.setState({ colors });
	}
	render() {

		let { colors } = this.state;

		return (
			<div className='App'>
				{
					colors.map((color, index) => {
					return <Box key={index} color={color} />;
				})
				}
			</div>
		);
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
