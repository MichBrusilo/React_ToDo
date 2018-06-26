import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const dataNumber = this.props.dataNumber
        return (
            <div className={style.TodoTitle}>
                <h2>Lista ToDo </h2>
                <p>Ilość zadań do wykonania:  {dataNumber.length}</p>
            </div>
        )
    }
}
export default Title;