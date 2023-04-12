import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo, toggleCompleted } from '../redux/slices/todoSlice'
import editIcon from '../Img/edit.png'
import { motion } from 'framer-motion'

export const TodoItem = ({todo, }) => {

    const todos = useSelector(state => state.todo.todoList)
    const dispatch = useDispatch()

    // Editor state 
    const [isEditing, setIsEditing] = useState(false)

    // Edit function
    const edit = () =>{
        dispatch(editTodo({
            id:todo.id,
            name: editInputValue,
        }))
    }

    // Editing input value  
    const [editInputValue, setEditInputValue] = useState('')

    const editRef = useRef(null)

  return (
    <motion.div
    animate={{ y: 50 }}
  transition={{ ease: "easeOut", duration: 0.3 }}>
        <div className="bg-white flex33 py-5 rounded-2xl text-xl mt-5 mr-6 px-2">
            
            {isEditing ?  
              <div>
                  <input value={editInputValue} onChange={(e)=>{
                    setEditInputValue(e.target.value)
                  }} 
                  placeholder={`${todo.name}`}
                  className="text-2xl font-medium  border-b text-center border-b-black outline-none max-w-[200px]"
                  onKeyDown={(e)=>{
                    if(e.code == 'Enter'){
                        setIsEditing(prev=>!prev)
                    if(editInputValue!==''){
                        edit()
                        setEditInputValue('')
                    }
                    }
                  }}
                  ref={editRef}
                  />
              </div>
             : <p className={todo.completed ? `line-through text-2xl font-semibold animate-bounce break-all` : `text-2xl font-medium break-all`}>{todo.name}</p>}
    
          
    
            <button onClick={()=>{
                dispatch(toggleCompleted(todo.id))
            }} className="bg-gold mt-7 font-semibold py-2 px-3 rounded-3xl mr-3 transition-all duration-500 hover:bg-green hover:translate-y-1 hover:text-white ">
                {todo.completed ? "Не готово" : "Выполнено"}
            </button>
            <button className="bg-red mt-7 font-semibold py-2 px-3 rounded-3xl text-white hover:translate-y-1 transition-all duration-300"
            onClick={()=>{
                dispatch(removeTodo(todo.id))
            }}>Удалить</button>
    
            <div>{isEditing ? <button onClick={()=>{
                // OnClick for Завершить
                setIsEditing(prev=>!prev)
                if(editInputValue!==''){
                    edit()
                    setEditInputValue('')
                }
                
                
            }} className="pr-4 py-2 px-3 rounded-3xl bg-green text-white font-semibold mt-3 ">Завершить</button> 
            : <div className='flex items-center justify-center mt-5'><button onClick={()=>{
                // OnClick for Редактировать
                
                new Promise ((resolve, reject)=>{
                    setIsEditing(prev=>!prev)
                    resolve()
                }).then(()=>{
                    editRef.current.focus()
                })

               
                
                
            }} className="pr-4 py-2 px-3 rounded-3xl bg-backG text-white font-semibold hover:translate-y-1 transition-all duration-300"><div className='flex items-center'>Редактировать <img src={editIcon} className='max-w-[20px] max-h-[20px] ml-4'/></div></button> 
            
            </div>}
            
            </div>
    
    
    
          
        </div>
    </motion.div>
  )
}
