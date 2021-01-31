import logo from './logo.svg';
import './App.css';
import Contact from "./componenet/contact"
import { Component } from 'react';

class App extends Component {
  render (){
    return(
      <div>
    <Contact name="Foster"
      cellphone="(718)-494-1313"
      email="Foster@gmail.com"
      workPhone="(718)-494-1313"
      />
      <br/>
      <Contact name="David"
      cellphone="(718)-242-2531"
      email="david@gmail.com"
      workPhone="(718)-242-2531"
      />
      <br/>
      <Contact name="D3p4k"
      cellphone="(718)-353-0292"
      email="de3p4k@gmail.com"
      workPhone="(718)-244-2653"
      />
      </div>
    )
  
  }
  
  
}

export default App;
