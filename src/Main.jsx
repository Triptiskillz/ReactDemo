import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
class Main extends Component {
  handleSubmit = () => {
    this.props.onSubmit(true)
  }
  render() {
    let { data, update, list } = this.props

    return (
      <div className='App'>
        {update == true &&
          <div className='btn'>
            <button onClick={this.handleSubmit}>Update</button>
          </div>}

        <div className='center'>
          {data.map((e) => {
            let r1 = list.find((l) => l.text != e.text)

            return (
              <div className={r1?"box1":"box"} onClick={() => this.props.history.push('/child')} >

                {e.text}

              </div>
            )
          }
          )}
        </div>
      </div>
    );
  }
}

export default Main;
