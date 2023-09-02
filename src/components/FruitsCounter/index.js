import {Component} from 'react'

import './index.css'

class Count extends Component {
  state = {mangocount: 0, bananaconut: 0}

  onMaIncrement = () => {
    this.setState(prevState => {
      console.log(`prevState ${prevState.mangocount}`)
      return {mangocount: prevState.mangocount + 1}
    })
  }

  onBaIncrement = () => {
    this.setState(prevState => {
      console.log(`prevState ${prevState.bananaconut}`)
      return {bananaconut: prevState.bananaconut + 1}
    })
  }

  render() {
    const {mangocount} = this.state
    const {bananaconut} = this.state

    return (
      <div className="bg-container">
        <h1 className="head">
          Bob ate <span className="mangocount">{mangocount}</span> mangoes
          <span className="bananaconut"> {bananaconut}</span> bananas
        </h1>
        <div>
          <img
            className="mango"
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
          />
          <img
            className="banana"
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
          />
        </div>
        <div>
          <button className="btn" onClick={this.onMaIncrement}>
            Eat Mango
          </button>
          <button className="btn" onClick={this.onBaIncrement}>
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}
export default Count
