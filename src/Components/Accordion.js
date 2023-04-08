import React from "react"

export class AccordionItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false,
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    })
  }
  render() {
    const activeStatus = this.state.visibility ? "active" : ""

    return (
      <div>
        <button className="accordion__button" onClick={this.handleToggleVisibility}>
          {this.props.hiddenElement.label}
          <span
            className={this.state.visibility ? "fas fa-minus" : "fas fa-plus"}
          ></span>
        </button>
        <div className={`accordion__content ${activeStatus}`}>
          {this.props.hiddenElement.value}
        </div>
      </div>
    )
  }
}

export default class Accordion extends React.Component {
  render() {
    return (
      <div className="accordion">
        {this.props.hiddenElements.map((hiddenElement) => (
          <AccordionItem key={hiddenElement.label} hiddenElement={hiddenElement} />
        ))}
      </div>
    )
  }
}
