## React component lifecycle

### Mounting 
- **constructor()**
- **static getDerivedStateFromProps()**
- dep: componentWillMount() - only run 1 time 
- **rennder()** - is the only **required** method in a class component.
- **componentDidMount()** - run only 1 time, makinng AJAX request

### Updating
- **static getDerivedStateFromProps()**
- dep: ComponentWillReceiveProps(nextProps)
- **shouldComponentUpdate(nextProps, nextState)**
- dep: componentWillUpdate(nextProps, nextState)
- **render()**
- **getSnapshotBeforeUpdate()**
- **componentDidUpdate(prevProps, prevState)**

### Unmounting 
- **ComponentWillUnmount()** - clearInterval()

## tools
HTTPie
- httpie - is a command line HTTP client that will make you smile.
- brew install httpie
cURL
- cURL -  программа позволяющая взаимодействовать с множеством различных серверов по множеству различных протоколов с синтаксисом URL.
- culr request from terminal: `curl localhost:8082`

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

```jsx 
	class MyClass extends React.Component {
		constructor(props){
			super(props);
			this.state = { ... }
		}
		...
	}
```

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

//beter
	this.setState( (prevState) =>{
		let newState = prevState.arrays.map((item){
			//change state 
		})
		return newState;
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

### Here is a very simple way to shuffle array with JS:

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
```
### Correct way to use emojis in React 
```jsx 
<span role='img' aria-label='heart'>
	❤️
</span>
```

# Problems with port
There is a problem: server running on port 8081, react app on port 3000.
To fix: need to specify server port inside package.json file, adding: 
```
"proxy" : "http://localhost:8081",
```

### HTML5 history object
using Ract our server return always index.html page with only div id="root"

```javascript
history.back()
history.forward();
history.pushState({}, 'title', '/newpage');
```
### React Router 
React Router v4(March 2017) a library to manage routing in your single page application

BrouserRouter - requires server site support 
- '/'
- '/user'
- '/user/57493/massages'

HashRouter - does not required server support 
- '/#'
- '/#user
```bash 
npm install --save react-router-dom
```

### Redux – a popular state management library 
Action - this is a playn js object, must have a key called type and a string value
```jsx 
{
	type: "LOGOUT_USER"
}
```
Reducer - a function that accept the state and an action and returns a new state(entire state object )
We cannot make a store without a reducer! Reducer is a function that determines what our state looks like and how we change the state;
```jsx 
function rootReducer (state={}, action){
	swithch(action.type){
		case "LOGOUT_USER":
			return {...state, login: false }
		case "LOGIN_USER":
			return {...state, login: true }
		default:
			return state;
	}
}
```
Store - one big js object represent state in our application
To create Store use createStore function wich accepts the root reducer as a parameter 

```jsx
const store = Redux.createStore(rootReducer);

//or
const store = Redux.createStore(rootReducer);
store.dispatch({
	type: "LOGIN_USER"
});

// to get state
const newState = store.getState();
``` 

You  can add a listenr to see when the state has changed 
```jsx 
const changeCallback = () => {
	console.log("State has changed", store.getState());
}
// to cancel subscribe 
const unsubscribe = store.listen(changeCallback);
```
### Redux Derictorty Structure
- src 
- - actions
- - components 
- - containers 
- - reducers 
- index.js

### Data flow in React Redux 
ininialization
- createStore -> rootReducer  
- mapStateToProps -> inside React Component, gives new Redux State
- render -> inside React Component 
change Redux store, using function dispatch
- rootReduxer -> when dispatch action 
- mapStateToProps -> insinde React Component, gives us new Redux State
- render -> component

### Every time when you using **connect** function you can use dispatch method
to use dispatch you can set another function iside the connect function
```jsx

fucntion mapDispathToProps(dispatch){
	retunr{
		addTodo: function(task){
			dispatch({
				type: "ADD_TODO", task
			})
		}
	}
}
connect(mapStateToProps, mapDispatchToProps)
//or
connect(mapStateToProps, {addTodo, removeTodo}) //мы прокидаем функции actionCreators вместе с даными reduxStore
```
