import React, {useState,useEffect} from 'react';

const Form = (props) => {
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