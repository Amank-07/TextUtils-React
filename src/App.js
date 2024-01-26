import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


let name="aman"
function App() {
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
  <Navbar title='TextUtils'/>
  <div className='container my-3'>
    <TextForm heading="Enter the text to analyze below"/>
  {/* <About/> */}
  </div></>
  );
}

export default App;
