import React, {ChangeEvent, KeyboardEvent} from "react";

type InputType = {
    title: string
    setTitle: (title: string) => void
    addTaskHandler: () => void
}

export const Input = (props: InputType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    const onKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' ) {
            props.addTaskHandler()
        }
    }


    return <input onKeyPress={onKeyHandler} value={props.title} onChange={onChangeHandler}/>

}