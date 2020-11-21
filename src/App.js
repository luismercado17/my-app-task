import React, {useState,useEffect} from 'react';
import './App.css';
import  todos from './todos.json';

const App = (props) => {
    const [title,setTitle] = useState("Aplicacion de tareas");
    //const [ntareas,setTarea] = useState(10);
    const ntareas = todos.data.length;
    const task = todos.data.map(t =>
    <div className="card col-md-4 row_task">
      <div className="card-header">
      <h4 className="title_tarea">{t.title}</h4>
      </div>
      <div className="card-body">
      <p className="descrip_task">{t.description}</p>
      <span>{t.priority}</span>
      <h5 className="responsibl">{t.resposible}</h5>
      </div>
    </div>
    );
  useEffect(()=>{
    console.log(todos)
    return{
    }
  },[])
  return (
    <div className="App">
        <nav className="navbar navbat-dark bg-dark">
          <a href="" className="text-white">{title} - {ntareas}</a>
        </nav>
        <div className="container">
          <div className="row">
            {task}
            </div>
        </div>
    </div>
  );
}


export default App;
