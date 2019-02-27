import React, { Component } from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

class Form extends Component {
  state = {
    ...DEFAULT_STATE
  }

  // handleSubmit = event => {
  //   console.log(this.state)
  //   // debugger;
  //   event.preventDefault()
    
  //   document.getElementById("order-form").reset()
  //   // this.props.addOrder(this.state)

  // //   this.setState({
  // //     protein: this.state.protein,
  // //  fillings: this.state.fillings,
  // //  toppings: this.state.topppings,
  // //  sides: this.state.sides
  // //   })
  // }
  onSubmit = (event) => {
event.preventDefault()
    console.log("hiii",this)
    // debugger;
    let passUp = this.state
    this.props.onSubmit(passUp)

  };
  handleChange = event => {
    // console.log(event)
    const itemType = event.target.name
    const item = event.target.value

    !this.state[`${itemType}`].includes(item) ?
      this.setState({
        [itemType]: this.state[`${itemType}`].concat(item)
      })
    :
      this.setState({
        [itemType]: this.state[`${itemType}`].filter(
          ingr => ingr !== item
        )
      })
  }

  render() {
    console.log(this)
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={this.onSubmit}>
          <ProteinForm
            protein={ this.state.protein }
            handleOnChange={this.handleChange}
          />

          <FillingForm
            fillings={ this.state.fillings }
            handleOnChange={ this.handleChange }
          />

          <ToppingForm
            toppings={ this.state.toppings }
            handleOnChange={ this.handleChange }
          />

          <SideForm
            sides={ this.state.sides }
            handleOnChange={ this.handleChange }
          />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
