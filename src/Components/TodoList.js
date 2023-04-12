import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearList, removeTodo } from '../redux/slices/todoSlice'
import { TodoItem } from './TodoItem'

export const TodoList = () => {

    const todos = useSelector(state => state.todo.todoList)
    const dispatch = useDispatch()

  return (
    <div>
      
      <div className='flex max-w-5xl ml-auto mr-auto flex-wrap pl-8 justify-center'>
        
          {todos.map(item =>{
          return (
              < TodoItem key={item.id} todo = {item}/>
          )
      })}
      </div>
      <button className=" bg-red px-6 py-2 rounded-3xl text-white font-semibold mt-20 mb-7 hover:translate-y-1 transition-all duration-300"
      onClick={()=>{
        dispatch(clearList())
      }}
      >Очистить список дел</button>
    </div>
  )
}
