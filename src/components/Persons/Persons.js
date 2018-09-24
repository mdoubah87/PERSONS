import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props){
    super(props);
    console.log('[Persons.js] inside the constructor');
  }
  componentWillMount(){
    console.log('[Persons.js] inside componentWillMount');
  }
  componentDidMount(){
    console.log('[Persons.js] inside componentDidMount');
  }
  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] inside the componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside the shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed
    || nextProps.clicked !== this.props.clicked;
    //return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside the componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE Persons.js] inside the componentDidUpdate');
  }
  render(){
    console.log('[Persons.js] inside the render'); 
    return this.props.persons.map((perso, index) => {
      return <Person
        click={() =>this.props.clicked(index)}
        name={perso.name}
        age={perso.age}
        key={perso.id}
        changed={(event) => this.props.changed(event, perso.id)}
      />
    });
  }
} 

export default Persons;