### props 
- Imutable!
- In a React component, props are variables passed to it by its parent component.
- Props should never be changed in a child component, so if there’s something going on that alters some variable, that variable should belong to the component state.

- Props are also used to allow child components to access methods defined in the parent component. This is a good way to centralize managing the state in the parent component, and avoid children to have the need to have their own state.

The parent can pass a prop by using this syntax:
```jsx 
	<ChildComponent color=green />
```

### state

- State on the other hand is still variables, but directly initialized and managed by the component.
- The state can be initialized by props.
- State is always passed from a parent down to a child component as a prop.
- State should not be passed to a sibling or a parent.
- State should be owned by 1 component. 
- Don't duplicate props to state.

### props.children
A collection of the children inside of a component ... 

```jsx
class Row extends React.Component {
	render() {
		<div style ={{
			display: 'flex',
			flexDirection: 'row',
			justyfyContent: 'space-around',
		}}>
		{this.props.children} // has element p, div, h1 
		</div> 
	}
}

class App extends React.Component {
	render(){
		return(
			<Row>
				<p>First Element </p>
				<div>Second Element </div>
				<h1>React</h1>
			</Row>
		)
	}
}
```
### setState is Asynchronous 
The correct way to change state in your application.
All changes to this.state should be pure.
```jsx
	this.state = {color: 'red'};

	this.setState({ color: 'blue'});

// or Update Function 

	this.setState((prevState, props) => {
		return {
			color: prevState.color + 'blue'
		};
	})
```

### Pure Function 
- A function with no side effects.
- It does not modify its inputs
- It's repearable (same inputs, same outputs )

```javascript
function doubleVals(arr){
	return arr.map(v => v * 2 ); //not change arr
}

let person = {id: 1, name: "Roman"};
function addJob(presonObj, job){
	return Object.assign( {}, personObj, {job});
//  return {...personObj, job};
}
addJob(person, "Student");
```

### Stateless Functional Components 
- Components implemented using a function not a class
- The funciton implements the render method only: no constructor, no state;

```jsx 
import React from 'react';
import PropTypes from 'prop-types';

const Greeting = props => ( <h1> Hello, {props.name} </h1>);
export default Greeting;

Greeting.propTypes = {
	name: PropTypes.string
}
```

### React 16 can return an array of JSX elements or a string, not need extra wrapper 
```jsx
render(){
	return [
		<div key='a'> One </div> 
		<div key='b'> Two </div> 
	];
}
```

### Error Boundary, error handing in react 16
Запроваджена нова система обробки помилок. Тепер, якщо в компоненті виникає помилка, можна застосувати метод життєвого циклу componentDidCatch.
```jsx 
class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState(() => { hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>На жаль, сталась прикра помилка.</h1>
    }
    return <MapContent />;
  }
}
```

### Fiber
Fiber — це нова архітектура, що покладена в основу React 16.
Алгоритм полягає у розбитті процесу оновлення на дві фази:
Фаза узгодження (reconciliation) — коли виконуються переобрахунки компонентів і відбувається оновлення DOM у пам’яті.
Фаза внеску (commit) — коли виконується безпосереднє оновлення DOM.

### onClick
```jsx 
onClick = { () => this.setState( {name: Roman} ) }

//or 
this.handleClick = this.handleClick.bind(this)

handleClick(e){
	this.setState(( prevState, props ) => ({
		name: prevState.name.ToUpperCase();
	})
}
onClick = { this.handleClick }
```

### Forms 
```jsx 
<form onSubmit = { (e) => {
	e.preventDefault();
	const data = [...this.state.data, this.state.inputText];
	this.setState( {data, inputText: ''});>
}}

	<input 
		value={this.state.inputText} 
		onChange = { (e) => { this.setState({inputText : e.target.value }) }} />
	<button onSubmit= { } > Save </button> 

</form> 
```
### ref 
Use an uncontroled input component.
A direct reference to a DOM element
Managing focus, text selection, or media playback 
Integrating with third-party DOM libraries 
```jsx
<form onsubmit = { (e) => { e.preventDefault() 
	console.log(this.inputText.value);
}} >
	<input
		ref= { (input) => this.inputText = input } />
</form>
```
