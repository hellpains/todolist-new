import React, {ChangeEvent, useState} from "react";
import {FilterValuesType, TodolistType} from "../App";
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
    todolistId: string
    title: string
    tasks: TaskType[]
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeTodolist: (todolist: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }


    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(props.todolistId, title.trim())
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
                <h3>{props.title}
                    <button onClick={removeTodolistHandler}>x</button>
                </h3>
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
                                    todolistId={props.todolistId}
                                    changeTaskStatus={props.changeStatus}
                                    removeTask={props.removeTask}
                                    task={task}
                                />
                            )
                        })
                    }
                </ul>
                <ButtonsForFilter filter={props.filter} changeFilter={props.changeFilter}
                                  todolistId={props.todolistId}/>
            </div>
        </div>
    )
}








