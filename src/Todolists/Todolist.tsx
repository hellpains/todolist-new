import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "../App";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {Task} from "./Task";
import {ButtonsForFilter} from "./ButtonsForFilter/ButtonsForFilter";


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
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export const Todolist = (props: TodolistPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const changeFilterButton = (value: FilterValuesType) => {
        props.changeFilter(value)
    }


    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const stylesAllButton = props.filter == 'all' ? 'active-filter' : ''
    const stylesActiveButton = props.filter == 'active' ? 'active-filter' : ''
    const stylesCompletedButton = props.filter == 'completed' ? 'active-filter' : ''

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <Input error={error} setError={setError} title={title} setTitle={setTitle}
                           addTaskHandler={addTaskHandler}/>
                    <Button name={'+'} callback={addTaskHandler}/>
                    {error && <div className='error-message'>{error}</div>}
                </div>
                <ul>
                    {
                        props.tasks.map(task => {
                            return (
                                <Task
                                    changeTaskStatus={props.changeTaskStatus}
                                    removeTask={props.removeTask}
                                    task={task}
                                />
                            )
                        })
                    }
                </ul>
                <ButtonsForFilter filter={props.filter} changeFilter={props.changeFilter}/>
            </div>
        </div>
    )
}








