import React, {ChangeEvent, useState} from "react";
import {FilterValuesType, TodolistType} from "../App";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {Task} from "./Task";
import {ButtonsForFilter} from "./ButtonsForFilter/ButtonsForFilter";
import {AddItemForm} from "../components/AddItemForm/AddItemForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";


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
    changeTaskTitle: (todolistId: string, taskId: string, title: string) => void
    changeTodolistTitle: (todolistId: string, title: string) => void
    filter: FilterValuesType
    removeTodolist: (todolist: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }

    const addTaskWrapper = (title: string) => {
        props.addTask(props.todolistId, title)
    }

    const changeTodolistTitleHandler = (newTitle: string) => {
        props.changeTodolistTitle(props.todolistId, newTitle)
    }


    return (
        <div className="App">
            <div>
                <h3>
                    <EditableSpan title={props.title} changeTitle={changeTodolistTitleHandler}/>
                    <button onClick={removeTodolistHandler}>x</button>
                </h3>

                <AddItemForm addItem={addTaskWrapper}/>

                <ul>
                    {
                        props.tasks.map(task => {
                            return (
                                <Task
                                    changeTaskTitle={props.changeTaskTitle}
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










