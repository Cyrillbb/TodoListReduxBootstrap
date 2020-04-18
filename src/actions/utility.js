export const setLocal = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}