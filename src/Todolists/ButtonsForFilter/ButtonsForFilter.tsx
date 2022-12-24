import React from 'react';
import {FilterValuesType} from "../../App";

type ButtonsForFilterPropsType = {
    filter: FilterValuesType
    todolistId: string
    changeFilter: (todolistId: string, value: FilterValuesType) => void
}

export const ButtonsForFilter = (props: ButtonsForFilterPropsType) => {
    const stylesAllButton = props.filter == 'all' ? 'active-filter' : ''
    const stylesActiveButton = props.filter == 'active' ? 'active-filter' : ''
    const stylesCompletedButton = props.filter == 'completed' ? 'active-filter' : ''

    const changeFilterButton = (value: FilterValuesType) => {
        props.changeFilter(props.todolistId, value)
    }

    return (
        <div>
            <button className={stylesAllButton} onClick={() => changeFilterButton('all')}>All</button>
            <button className={stylesActiveButton} onClick={() => changeFilterButton('active')}>Active</button>
            <button className={stylesCompletedButton} onClick={() => changeFilterButton('completed')}>Completed</button>
        </div>
    );
};