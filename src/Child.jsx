import React, { Component } from 'react';
import './App.css';
import Pop from './Pop';
import newitem from "./newitem.js";

class Child extends Component {
    state = {

        data: this.props.data
    }

    setShowModal = (id) => {
        let str = { ...this.state }
        // console.log(id)
        let r2 = str.data.map((e) => e.showModal = false)
        let r1 = str.data.find((e) => e.id === id)
        r1.showModal = true
        this.setState(str)

    }
    handleSubmit = (list) => {
        let str = { ...this.state }
        let r1 = str.data.find((e) => e.id === list.id)
        r1 = list
        this.setState(str)

        this.props.onSubmit(str)
    }

    render() {

        let {data } = this.state
        // console.log(data)
        return (
            <div className='App'>
                {data.map((e) => (
                    <div>
                        {e.showModal && (
                            <Pop data={e} option sethandleSubmit={this.handleSubmit}>
                            </Pop>)}
                    </div>
                ))}
                <div className='center'>
                    {data.map((e) => (
                        <div className='box'>
                            <div className='header'>
                                <i class="fa fa-edit" onClick={() => this.setShowModal(e.id)}></i>
                            </div>

                            <div className='text'>
                                {e.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Child;
