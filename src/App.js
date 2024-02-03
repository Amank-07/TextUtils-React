// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';




// import React from "react";
// import {
//   BrowserRouter as Router,Switch,Route, Routes
// } from "react-router-dom";

function App() {
const [mode,setMode]=useState('light'); //whether dark mode is enabled or not


const [alert,setAlert]=useState(null); 

  const showAlert =(message,type)=>
  {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }

const toggleMode=(cls)=>{
  removeBodyClasses();
  console.log(cls)

  document.body.classList.add('bg-'+cls)
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    // document.title="TextUtils -Dark mode";
   
   
    // setInterval(()=>{
    //   document.title="install TextUtils no w";
    // },1500);


    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success");
    // document.title="TextUtils -light mode";

  }
}


  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       follow aman
    //     </a>
    //   </header>
    // </div>


    // <>
    // <nav>
    //   <li>HOme</li>
    //   <li>About</li>
    //   <li>contact</li>
    // </nav>
    // <div classNameName='container'>
    //   <h1>hello {name}</h1>
    // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum magnam maiores veritatis deserunt dignissimos, autem, pariatur asperiores corrupti vero, quod placeat quae praesentium incidunt cupiditate facilis obcaecati hic. Rerum!</p>
    // </div>
    // </>
    // <div classNameName='blank'>Lovely</div>

    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href='/'>TextUtils</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href='/'>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='/'>About</a>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>  */}

{/* <Navbar/> */}
  {/* <Router> */}
  <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>  
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Switch> */}
  {/* <Routes> */}
          {/* <Route  exact path="/about" element={<About/>}> */}
            {/* <About /> */}
          {/* </Route> */}
         {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}> */}


          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>

          {/* </Route>  */}
  {/* </Routes> */}
  {/* <About/> */}
    {/* </Switch> */}
    </div>
  {/* </Router> */}
  </>
  );
}

export default App;
