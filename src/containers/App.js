import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'kupić piwo'
                }, {
                id: 2,
                    text: 'otworzyć piwo'
                }, {
                id: 3,
                    text: 'wypić piwo'
                }]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    }
    render() {
    return (
        <div className={style.TodoApp}>
            <Title dataNumber={this.state.data}/>
            <TodoList data={this.state.data} remove={this.removeTodo.bind(this)}/>
            <TodoForm addTask={this.addTodo.bind(this)}/>
        </div>
    );
};
};

export default hot(module)(App);