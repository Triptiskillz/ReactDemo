import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Child from './Child'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import item from "./item.js";

class App extends Component {

  state = {
    data: [
      { id: 1, text: "hello", showModal: false },
      { id: 2, text: 'hello', showModal: false },
      { id: 3, text: 'hello', showModal: false },
      { id: 4, text: 'hello', showModal: false },
      { id: 5, text: 'hello', showModal: false },
      { id: 6, text: 'hello', showModal: false }
    ],
    update: false,
    list:[]
  }
  async fetchDatacompareslist() {
    let s1 = { ...this.state }
    let str = JSON.stringify(s1.data)
    item.store(str)
  }

  componentDidMount() {
    this.fetchDatacompareslist();

  }
  componentDidUpdate(prevProps, prevState) {
      if (prevProps !== this.props) {
          this.fetchDatacompareslist();
      }
  }
  handleSubmit = (item) => {
    let str = { ...this.state }
    str.update = true
    str.list = item.data
    str.data=item.data
    this.setState(str)
  }

  handleUpdate =(value)=>{
    let str = { ...this.state }
    let str1 = JSON.stringify(str.list)
    item.remove()
    item.store(str1)

    window.location='/'
  
  }
  render() {
    let str = item.get()
    let data = JSON.parse(str)


    if (data == null) {
      let str = JSON.stringify(this.state.data)
      item.store(str)
    }
    // console.log(data)
    // console.log(this.state.update)
    // console.log(this.state.list)
    // console.log(JSON.stringify(data) === JSON.stringify(this.state.data))

    return (

      <BrowserRouter>

        <Switch>
          <Route path="/child" render={(props) => <Child {...props} onSubmit={this.handleSubmit} data={data} />} />
          <Route path="/" render={(props) => <Main {...props} data={data} list={this.state.data} update={this.state.update} onSubmit={this.handleUpdate}/>} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
