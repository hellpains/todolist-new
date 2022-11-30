import React from "react";
import {FilterValuesType} from "./App";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export const Todolist = (props: TodolistPropsType) => {

    const changeFilterButton = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map(task => <Task removeTask={props.removeTask} task={task}/>)}
                </ul>
                <div>
                    <button onClick={() => changeFilterButton('all')}>All</button>
                    <button onClick={() => changeFilterButton('active')}>Active</button>
                    <button onClick={() => changeFilterButton('completed')}>Completed</button>
                </div>
            </div>
        </div>
    )
}


type TaskPropsType = {
    task: TaskType
    removeTask: Function
}

const Task = (props: TaskPropsType) => {

    const removeTaskOnHandler = (id: number) => {
        props.removeTask(id)
    }

    return (
        <li key={props.task.id}>
            <input type={"checkbox"} checked={props.task.isDone}/>
            <span>{props.task.title}</span>
            <button onClick={() => removeTaskOnHandler(props.task.id)}>x</button>
        </li>
    )
}
