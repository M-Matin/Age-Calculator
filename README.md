# Age Calculator

### Set up

Use the [Create React apps](https://github.com/facebookincubator/create-react-app) bootstrap with no build configuration.

`create-react-app Age-Calculator`

 Then go to the project directory and install [react-bootstrap](https://react-bootstrap.github.io)

 `npm install react-bootstrap --save`

Delete the **src folder** from the project since I want to build it from scratch.

Run the project from **public/index.html** or directly from terminal with:

`npm start`

Create the new **src** folder

Add **index.js** file in the **src** folder as the root of application, it will tell **REACT WHAT CODE TO LOAD AND WHERE TO LOAD IT.**

Add the `import React from 'react';` at the top of your index.js file, so that you have access to the entire React library with through the 'react' variable.

Add the `javascript import ReactDOM from 'react-dom';`

To test your app call the **render** function from index.js and add something to the **id="root"** which is already located in index.html file:

```javascript
ReactDOM.render(
    <h1>Age Calculator</h1>,
    document.getElementById('root')
);
```

### Create the component

Build a **component folder** in the src folder, so that you can separate your app component from index.js which could be the rendering file.

Import react and component class from react module. The component is exported from react module but **not by default** so that we wrap it up in curly braces.

```javascript
import React, {component} from 'react';
```

Build a component called App:
```javascript
class App extends Component {}
```

You can add the render method to the component, but in order the render method be **valid**, it is very important to add **return statement**
```javascript
class App extends Component {
    render() {
        return (
            <h1>Age Calculator</h1>
        )
    }
}
```

To have access to this component we need to export it at the end of component ant outside of it:
```javascript
export default App;
```

Since the index.js was suppose to render component, we must import it to the index.js and then pass it in render function.
```javascript
import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

### Calling a Form Component

Since we have **react-bootstrap** we can call the Form, FormControl, and Button from [react-bootstrap](https://react-bootstrap.github.io) !
