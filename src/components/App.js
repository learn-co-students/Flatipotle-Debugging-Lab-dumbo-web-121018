import React, { Component } from 'react'
import '../App.css'
import Form from './Form'
import Order from './Order'
import Image from '../images/logo.png'

class App extends Component {
  state = {
    orders: [],
    protein:[]
    }
  
  handleSubmit = (value) => {
    // event.preventDefault()
    console.log("in app",value.fillings)
   
  //  this.setState({
  //    orders:
  //  })
    
    this.addOrder(value)
    document.getElementById("order-form").reset()

  
  }
  addOrder = (order) => {
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  render() {
   
    
    const orders = this.state.orders.map( (order, idx) => {
      console.log(order)
      return <Order key={idx} {...order} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={ Image } className="App-logo" alt="logo" />
        </header>

        <Form onSubmit={this.handleSubmit}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App
