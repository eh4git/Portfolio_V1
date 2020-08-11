import React from 'react';
import './App.css';
import withErrorBoundary from "./HOCs/withErrorBoundary"
import Test from "./components/test"

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default withErrorBoundary(App);
