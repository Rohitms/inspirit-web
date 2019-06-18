import React from 'react'

export default class Doitem extends React.Component {
  render() {
    return (
      <div className="Doitem">
        <div className="Doitem-title">{this.props.title}</div>
        <div className="Doitem-subtitle">{this.props.subtitle}</div>
        <div className="line" />
      </div>
    )
  }
}
