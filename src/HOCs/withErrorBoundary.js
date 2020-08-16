import React, { Component } from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null,
    };
  }

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
    return (
      this.state.hasError ? <h1>OOOps...Something went wrong.</h1> : <Component />
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