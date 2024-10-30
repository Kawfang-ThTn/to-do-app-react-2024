import React , {useState} from 'react';

function App() {
  
  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState("");

  const addTodo = () => {
    if( input.trim() ){

      setTodos( [...todos , {id : Date.now() , text : input , completed : false} ] )
      
      setInput("")
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-400 to-purple-400">
        
        <div className="bg-white shadow-lg rounded-3xl p-16">

          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6" >REACT TO-DO LIST ✅</h1>

          <div className="mb-4 flex">

            <input type="text" placeholder="Type What To Do" className="flex-grow px-3 py-2 border rounded-l-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={input} onChange={(event) => setInput(event.target.value) }  />
            
            <button className="bg-blue-400 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600" onClick={addTodo} >Add</button>
          
          </div>

        

        <ul className="space-y-2">
          {
            todos.map((todo) => (
              <li key={todo.id} className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200" >
                
                <input 
                  type="checkbox" 
                  checked={todo.completed} 
                  onChange={() => setTodos(todos.map((t) => 
                  (t.id === todo.id ? {...t, completed: !t.completed} : t)
                  ))} 
                  className="mr-2 h-5 w-5 text-blue-400" 
                  />
                <span className={`flex-grow ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                {todo.text}
                </span>


                <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))} 
                  className="ml-2 border-none p-2 rounded-lg bg-red-400 text-white hover:bg-red-600" >Delete</button>

              </li>
            ))
          }
        </ul>

        </div>

      </div>
    </>
  )
}

export default App
