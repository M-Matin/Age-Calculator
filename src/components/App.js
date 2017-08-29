import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeState from './AgeState'


class App extends Component {
    constructor() {
        super();
//var
        this.state = {
            newDate: '',
            birthday: '00/00/0000'
        }
    }

    changeBirthday() {
        console.log(this.state);
        this.setState(
            {birthday: this.state.newDate});
    }
    render() {
        return (
            // Class is the reserved word in react so we use className for css instead of "class"
            <div className='App'> 
                <Form inline> 
                <h2>Input Your Birthday!</h2>
                    <FormControl
                     type="date"
                     onChange={ delasa => this.setState({newDate: delasa.target.value})}
                     >
                    </FormControl>
                    {' '}
                    <Button onClick= {() => this.changeBirthday()}>
                    Submit
                    </Button>
                    <AgeState date={this.state.birthday}/>
                </Form>
            </div>
        )
    }
}
export default App;