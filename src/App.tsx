import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolists/Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'completed' | 'active'


export const App = () => {
    let [filter, setFilter] = useState<FilterValuesType>('all')

    let [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
    ])


    const removeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const addTask = (title: string) => {
        setTasks([{id: v1(), title, isDone: false}, ...tasks])
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    const changeStatus = (taskId: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone} : t))
    }

    let tasksForTodolists = tasks


    if (filter === 'completed') {
        tasksForTodolists = tasks.filter(task => task.isDone)
    }
    if (filter === 'active') {
        tasksForTodolists = tasks.filter(task => !task.isDone)
    }

    return (
        <div className="App">
            <Todolist
                filter={filter}
                addTask={addTask}
                title={"What to learn"}
                tasks={tasksForTodolists}
                removeTask={removeTask}
                changeFilter={changeFilter}
                changeTaskStatus={changeStatus}
            />
        </div>
    );
};