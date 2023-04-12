
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { TodoList } from './Components/TodoList';
import { addTodo } from './redux/slices/todoSlice';
import { useEffect, useState } from 'react';

function App() {

  const dispatch = useDispatch()
  const [inputState, setInputState] = useState('')

  // Todos array state
  const todos = useSelector(state => state.todo.todoList)
  
  const addTodoFunc = () =>{
    dispatch(addTodo(inputState))
    setInputState('')
  }

  useEffect(()=>{
    const todosStorageData = JSON.parse(localStorage.getItem('todos'))
    if(todosStorageData){
      todosStorageData.map(item => dispatch(addTodo(item.name)))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="bg-backG text-center min-h-screen pt-8">
      <h1 className="text-4xl font-bold text-white">KRAMMER TODOS</h1>

      <div className="pt-4 flex justify-center">
        <input value={inputState} onChange={(e)=>{
        setInputState(e.target.value)
        }
        }
        onKeyDown={(e)=>{
          if(e.code == 'Enter'){
            if(inputState!== '' && inputState!== ' ' && inputState!== '  '){
              addTodoFunc()
            }
           
          }
         }} 
         className="py-2 rounded-tl-2xl rounded-bl-2xl pl-3 sm:text-lg xs:text-sm font-medium" placeholder="Введите дело"/>
        <button className="py-2 px-5 bg-gold rounded-tr-2xl rounded-br-2xl sm:text-lg xs:text-sm font-semibold "
        onClick={()=>{
          if(inputState!== '' && inputState!== ' ' && inputState!== '  '){
            addTodoFunc()
          }
         
        }}
        
        >Добавить</button>
      </div>
         {todos.length == 0 ? <p className="text-4xl font-semibold text-white md:pt-24 xs:pt-6">Пока нет дел! Вы свободны!</p> : <TodoList/>}
      

    </div>
  );
}

export default App;
