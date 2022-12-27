import React, {useState} from 'react';
import s from './AddItemForm.module.css'
import {Input} from "../Input";
import {Button} from "../Button";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm: React.FC<AddItemFormPropsType> = ({
                                                                addItem
                                                            }) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const addTaskHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    return (
        <div>
            <Input error={error} setError={setError} title={title} setTitle={setTitle}
                   addTaskHandler={addTaskHandler}/>
            <Button name={'+'} callback={addTaskHandler}/>
            {error && <div className='error-message'>{error}</div>}
        </div>
    );
};

