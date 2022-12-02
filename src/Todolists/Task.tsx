import React, {FormEvent} from "react";
import {TaskType} from "./Todolist";

type TaskPropsType = {
    task: TaskType
    removeTask: Function
}

export const Task = (props: TaskPropsType) => {

    const removeTaskOnHandler = (id: string) => {
        props.removeTask(id)
    }

    return (
        <li key={props.task.id}>
            <input  type={"checkbox"} checked={props.task.isDone}/>
            <span>{props.task.title}</span>
            <button onClick={() => removeTaskOnHandler(props.task.id)}>x</button>
        </li>
    )
}