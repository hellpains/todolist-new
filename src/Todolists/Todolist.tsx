import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "../App";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {Task} from "./Task";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
    const [title, setTitle] = useState<string>('')

    const changeFilterButton = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const addTaskHandler = () => {
        if(title.length ==0){
            return
        }
        props.addTask(title)
        setTitle('')
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <Input title={title} setTitle={setTitle} addTaskHandler={addTaskHandler}/>
                    <Button name={'+'} callback={addTaskHandler}/>
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








