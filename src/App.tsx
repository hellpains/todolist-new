import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolists/Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'completed' | 'active'

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}


type TasksType = {
    [key: string]: TaskType[]
}

export const App = () => {

    const removeTask = (todolistId: string, id: string) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(task => task.id !== id)})
    }

    const addTask = (todolistId: string, title: string) => {
        setTasks({...tasks, [todolistId]: [{id: v1(), title, isDone: false}, ...tasks[todolistId]]})
    }

    const changeFilter = (todolistId: string, value: FilterValuesType) => {
        setTodolists(todolists.map(tl => tl.id == todolistId ? {...tl, filter: value} : tl))
    }

    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, isDone} : t)})
    }

    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(tl => tl.id !== todolistId))
        delete tasks[todolistId]
        setTasks({...tasks})
    }

    let todolistId1 = v1()
    let todolistId2 = v1()

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolistId1, title: "What to learn", filter: 'active'},
        {id: todolistId2, title: "What to buy", filter: 'completed'},
    ])

    const [tasks, setTasks] = useState<TasksType>({
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: 'Book', isDone: true},
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Sugar', isDone: false},
        ],
    })


    return (
        <div className="App">
            {
                todolists.map(tl => {
                    let tasksForTodolists = tasks[tl.id]

                    if (tl.filter === 'completed') {
                        tasksForTodolists = tasksForTodolists.filter(task => task.isDone)
                    }
                    if (tl.filter === 'active') {
                        tasksForTodolists = tasksForTodolists.filter(task => !task.isDone)
                    }

                    return (
                        <Todolist
                            removeTodolist={removeTodolist}
                            key={tl.id}
                            todolistId={tl.id}
                            filter={tl.filter}
                            addTask={addTask}
                            title={tl.title}
                            tasks={tasksForTodolists}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            changeStatus={changeStatus}
                        />
                    )
                })
            }


        </div>
    );
};