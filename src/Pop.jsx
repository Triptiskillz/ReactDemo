import React, { Component } from 'react'

class Pop extends Component {
    state={
        list:this.props.data
    }
    closeModal = () => {
        let str = { ...this.state }
        str.showModal = false
        this.setState(str)
    };

    handleChange =(e)=>{
        const { currentTarget: input } = e;
        let option = { ...this.state }
        option.list.text = input.value
        // console.log(option)
        this.setState(option);
    }
    handleSubmit=()=>{
        let option = { ...this.state }
        option.list.showModal = false
        // console.log(option)
        this.props.sethandleSubmit(option);
    } 
    render() {
        let {list}=this.state
        // console.log(list)
   
        return (
            <div>
                <div className='modal-wrapper'></div>
                <div className='modal-container'>
                    
                        <input value={list.text} name="text" onChange={this.handleChange}/> 
                    
                    <div className='btn'>
                        <button onClick={this.handleSubmit}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pop