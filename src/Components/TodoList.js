import React, {Component} from 'react';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  deletList = (input) => (e) =>  {
    let listArr = this.state.list;
    listArr = listArr.filter(o => o !==  input).map((index) => <TodoItem key ={index}/>)

    this.setState({list: listArr})
  }
  render() {
    return (
      <div>
        <header>
          <h1>Todo List</h1>
        </header>
        <TodoForm list ={this.state.list} inputValue = {this.state.inputValue} />
        <TodoItem list ={this.state.list} deletList = {this.deletList()}/> 
      </div>
    )
  }
}

export default TodoList