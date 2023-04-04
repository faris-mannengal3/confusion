import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MunuCOmponent';
import MyMediaClass from './components/MediaComponent';
import {DISHES} from './shared/dishes'
import { Component } from 'react';
class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      dish : DISHES
    }
  }
  
  render (){
    return(
      <>
        <MyMediaClass dishes = {this.state.dish}></MyMediaClass>
      </>
    )
  };
}

export default App;
