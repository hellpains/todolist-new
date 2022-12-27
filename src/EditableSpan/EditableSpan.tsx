import React, {ChangeEvent, useState} from 'react';
import s from './EditableSpan.module.css'

type EditableSpanPropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = ({
                                                                  title, changeTitle
                                                              }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>('')

    const activateEditMode = () => {
        setEditMode(true)
        setNewTitle(title)
    }

    const deactivateEditMode = () => {
        if (newTitle.trim() !== '') {
            setEditMode(false)
            changeTitle(newTitle)
        }

    }
    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        editMode ?
            <input autoFocus onChange={changeTitleHandler} value={newTitle} onBlur={deactivateEditMode}/> :
            <span onDoubleClick={activateEditMode}>{title}</span>
    )

};

