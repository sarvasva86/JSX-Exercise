import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Alert Component
function Alert({ message, type }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
}

// Button Component
function Button({ label, onClick }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {label}
    </button>
  );
}

// Main App Component
function BootstrapApp() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="container mt-4">
      <h1>Bootstrap Components</h1>
      <Alert message="This is a success alert!" type="success" />
      <Alert message="This is a danger alert!" type="danger" />
      <Alert message="This is an info alert!" type="info" />
      <Button label="Click Me!" onClick={handleClick} />
    </div>
  );
}

export default BootstrapApp;
