import { useState } from "react"

export function ToDoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState()

    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => { //this onChange function will update the inputValue state everytime the user types a new character
                setInputValue(e.target.value)
            }} placeholder="Add task..." />
            <button onClick={() => {
                if (!inputValue) {
                    return //this ensures that the user cannot add an empty item to the todo list
                }
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    )
}