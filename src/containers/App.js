import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] inside the constructor', props );
    this.state = {
      persons : [
        {id:'aa1',name:'Max', age: 28},
        {id:'aa2',name: 'Bah', age: 32},
        {id:'aa3',name: 'Barry', age: 21},
        
      ],
      otherState: 'somme state',
      showPerson: false

    };
  }
  componentWillMount(){
    console.log('[App.js] inside componentWillMount', this.props);
  }
  componentDidMount(){
    console.log('[App.js] inside componentDidMount', this.props);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside the shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside the componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] inside the componentDidUpdate');
  }App
  
  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximus'
    this.setState({
      persons: [
      {name: newName , age: 21},
      {name: 'Bah', age: 30},
      {name: 'Barry', age: 25}
      
    ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
       return p.id === id;
    });

    const parse = {
      ...this.state.persons[personIndex]
    }
    //const person = Object.assign({}, this.state.persons[personIndex])
    //c'est une alternative avec ...this.state.persons

    parse.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]=parse;
    
    this.setState({persons: persons});
  }
  deletePerson = (personIndex) => {
    //const pers = this.state.persons.slice();
    const pers = [...this.state.persons];
    pers.splice(personIndex, 1);
    this.setState({persons: pers});
  }

  hidePerson = () => {
    const siVoir= this.state.showPerson;
    this.setState({showPerson: !siVoir});
  }

  render() {
    console.log('[App.js] inside render()', this.props);
    let persons = null;
    if(this.state.showPerson){
      persons = <Persons 
                persons = {this.state.persons}
                clicked = {this.deletePerson}
                changed = {this.nameChangedHandler}
              />;
    }
    return (
      <div className={classes.App}>
           <button  onClick={() => {this.setState({showPerson:true})}}>Show Persons</button>
           <button onClick={() => {this.setState({showPerson: false})}}>Hide Persons</button>
          <Cockpit 
            appTitle ={this.props.title}
            showPerson = {this.state.showPerson}
            persons = {this.state.persons}
            clicked = {this.hidePerson}
          />
          {persons}  
      </div>
    );
       //return React.createElement('div',{className: 'App '}, React.createElement('h1',null,'Hi, I\'m a React App'
  }
}

export default App;