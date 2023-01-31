import React, {Component} from 'react';
import Ideas from '../Ideas/Ideas';
import '../App/App.css';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas:[
        { id:1, title:'Quote 1', description:'Everything you can imagine is real'},
        { id:2, title:'Quote 2', description:'The real difficulty is to overcome how you think about yourself'},
        { id:3, title:'Quote 3', description:'Never let your emotions overpower your intelligence'},
      ]
    }
  }
  addIdea =(newIdea) => {
    this.setState({ideas:[...this.state.ideas,newIdea]})
  }
  render() {
    return (
      <main className='App'>
        <h1> IdeaBox: Quote Style </h1>
        {!this.state.ideas.length && <h2> Please add ideas!</h2>}
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} />
        
     
      </main>
    )
  }
}
export default App;
