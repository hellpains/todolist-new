import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValuesType = 'all' | 'completed' | 'active'


export const App = () => {
    let [filter, setFilter] = useState<FilterValuesType>('all')
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ])


    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
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
                title={"What to learn"}
                tasks={tasksForTodolists}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
};