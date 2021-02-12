
import React, { Component } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Plan from './componemts/plan';

export default class App extends Component {
  state={
    items:[],
    text:""
  }
  handelChange=(e)=>{
    this.setState({text:e.target.value})
  }
  addItem=(e)=>{
    if(this.state.text !==""){
        const items=[...this.state.items,this.state.text]
        this.setState({items:items,text:""})
    }
  }

  handelDelete=(id)=>{
    console.log("delete",id)
    const OldItem=[...this.state.items]
    const items=OldItem.filter((item,i)=>{
      return i!==id
    })
    this.setState({items:items})
}
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-black shadow-lg p-3">
            <h2 className="text-center">
               Today plan
            </h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control" placeholder="Enter your plan" value={this.state.text} onChange={this.handelChange}>

                </input>
              </div>
              <div className="col-2">
                <button className="btn btn-warning px5 front-weight-bold" onClick={this.addItem}>Add</button>
              </div>
              <div className="container-fluid">
                <div className="list-styled row m-5">
               
                  {this.state.items.map((item,i)=>{
                  return <Plan value={item} key={i} id={i}  handelDelete={this.handelDelete} />}
                  
                  )}
                </div>
                </div>  
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

