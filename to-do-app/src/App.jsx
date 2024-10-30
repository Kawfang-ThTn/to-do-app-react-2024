import React , {useState} from 'react';

function App() {
  
  const [todo , setTodo] = useState([]);
  const [input , setInput] = useState("");

  const addTodo = () => {
    if( input.trim() ){

      setTodo( [...prevTodo , {id : Date.now() , text : input , completed : false} ] )
      
      setInput("")
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-400 to-purple-400">
        
        <div className="bg-white shadow-lg rounded-3xl p-16">

          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6" >REACT TO-DO LIST ✅</h1>
          <div className="mb-4 flex">
            <input type="text" placeholder="Type To-Do List" className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400" value={input} onChange={(event) => setInput(event.target.value) }  />
            <button className="bg-blue-400 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600" onClick={addTodo} >Add</button>
          </div>

        </div>

        <ul className="space-y-2">
          {
            todo.map((element) => {
              <li key={element.id} className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200" >
                <input type="checkbox" checked={element.completed} onChange={ () => setTodo(todo.map((telement) => {telement.id === todo.id ? {...prevTelement , completed : !telement.completed} : telement}))} className="mr-2 h-5 w-5 text-blue-400" />
                
              </li>
            })
          }
        </ul>

      </div>
    </>
  )
}

export default App
