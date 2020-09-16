import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state ={
    persons:[
      {name:"Satyam", age:25},
      {name:"Shubham", age:23},
      {name:"Nitin", age:26}
    ],
    showPersons:false
  }
  switchNameHandler=()=>{
    //console.log('was click');
    // Don't this.state.persons[0].name="Satyam Yadav";
    this.setState({
      persons:[
        {name:"Satyam Yadav", age:25},
        {name:"Shubham", age:23},
        {name:"Nitin", age:27}
      ]
    })
  }
  switchChangedHandler=(event)=>{
    this.setState({
      persons:[
        {name:"Satyam", age:25},
        {name:event.target.value, age:23},
        {name:"Nitin", age:27}
      ]
    })
  }
  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({
      showPersons:!doesShow
    })
  }

  render () {
 const style={
   backgroundColor: 'green',
   color:'white',
   font: 'inherit',
   border: '1px solid blue',
   padding: '8px',
   cursor: 'pointer'
 }
 let persons=null;
 if(this.state.showPersons){
   persons=(
      <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}> Test</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.switchChangedHandler}> Test</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Test</Person>
      </div>
   );
   style.backgroundColor ='red';
 }
    return(
      <div className="App">
      <p>Hello Satyam</p>
      <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
      {persons}
   </div>
    )
  }
}

export default App;
