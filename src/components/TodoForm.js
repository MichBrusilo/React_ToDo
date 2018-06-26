import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        this.props.addTask(this.state.value);
        event.preventDefault();
    }  

    render() {
        return (<form className={style.todoForm} onSubmit={this.handleSubmit}>
                    <label>
                        Add new task
                        <input value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add" />
                </form>)  
    }
}

export default TodoForm;