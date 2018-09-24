import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] inside the constructor');
      }
      componentWillMount(){
        console.log('[Person.js] inside componentWillMount');
      }
      componentDidMount(){
        console.log('[Person.js] inside componentDidMount');
      }
    render(){
        console.log('[Person.js] inside the render()');
        return (
            <div className={classes.person}>
                <p onClick={this.props.click}> I'm {this.props.name} !, I have {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value ={this.props.name}/>
            </div>
        )
    }
}
//const person = (props) => {
    // const rnd = Math.random();
    // if (rnd > 0.7){
    //     throw new Error('Something went wrong');
    // }

export default Person;