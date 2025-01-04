import { ToDoCard } from "./ToDoCard"

export function ToDoList(props) {
    const { todos, selectedTab } = props


    const filterTodosList =
    selectedTab === 'All' ?
            todos : //sets filtered ToDo list as all items if 'All' selected
            selectedTab === 'Completed' ?
                todos.filter(val => val.complete) : //sets filtered ToDo list to only completed items if 'Completed' selected
                todos.filter(val => !val.complete) //sets filtered ToDo list to only open items if 'Open' selected

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <ToDoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props}
                        todo={todo}
                    />
                )

            })}
        </>
    )
}