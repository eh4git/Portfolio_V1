import React, { Component } from "react"

class ErrorBoundary extends Component {
  state = { 
      hasError: false, 
      error: null,
      errorInfo: null,
    };
  

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    const Component = this.props.component
    console.log(this.props)
    return (
      this.state.hasError ? (
        <div>
          <h1 id='errMsg'>OOOps...Something went wrong...</h1>
          <h3>I must be currently preforming maintenance, I will have the site back up and running soon. Please check back shortly </h3>
        </div>) 
      : <Component />
    )
  }
}

function withErrorBoundary(component) {
  return function (props) {
    return (
      < ErrorBoundary component={component} {...props} />
    )
  }
}

export default withErrorBoundary