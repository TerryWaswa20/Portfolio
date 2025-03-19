import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;
      const errorDetails = errorInfo ? errorInfo.componentStack : "No stack trace available.";

      return (
        <div>
          <h1>Something went wrong.</h1>
          <details>
            <summary>Click for more details</summary>
            <p>{error && error.toString()}</p>
            <pre>{errorDetails}</pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
