import React, {ChangeEvent, KeyboardEvent} from "react";



type InputType = {
    title: string
    setTitle: (title: string) => void
    addTaskHandler: () => void
    setError: (error: string | null) => void
    error: string | null
}

export const Input = (props: InputType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        props.setError(null)
        if (event.key === 'Enter') {
            props.addTaskHandler()
        }
    }


    return <input className={props.error ? 'error' : ''} onKeyPress={onKeyPressHandler} value={props.title}
                  onChange={onChangeHandler}/>

}