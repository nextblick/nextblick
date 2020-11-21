import React from "react"
import { navigateTo } from "gatsby-link"

export default class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      to: `/`,
    }
    this.handleClick = this.handleClick.bind(this)
    this.navigateTo = this.navigateTo.bind(this)
  }

  navigateTo(to) {
    navigateTo(to)
  }

  handleClick(e) {
    e.stopPropagation()
    e.preventDefault()

    this.props.onClick(e)
    this.setState({ to: this.props.to })
    setTimeout(() => this.navigateTo(this.state.to), this.props.delay || 500)
  }

  render() {
    return (
      <a
        href={this.props.to}
        className={`${this.props.className ? this.props.className : ``}`}
        onClick={(e) => this.handleClick(e)}
      >
        {this.props.children}
      </a>
    )
  }
}
