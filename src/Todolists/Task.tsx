import React, {ChangeEvent, FormEvent} from "react";
import {TaskType} from "./Todolist";

type TaskPropsType = {
    task: TaskType
    removeTask: (todolistId: string, taskId: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    todolistId: string
}

export const Task = (props: TaskPropsType) => {

    const removeTaskOnHandler = (id: string) => {
        props.removeTask(props.todolistId, id)
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.todolistId, props.task.id, e.currentTarget.checked)
    }

    return (
        <li className={props.task.isDone ? 'is-done' : ''} key={props.task.id}>
            <input onChange={changeStatusHandler} type={"checkbox"} checked={props.task.isDone}/>
            <span>{props.task.title}</span>
            <button onClick={() => removeTaskOnHandler(props.task.id)}>x</button>
        </li>
    )
}