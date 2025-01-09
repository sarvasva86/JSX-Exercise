function Alert({ message, type }) {
  return <div className={`alert alert-${type}`} role="alert">{message}</div>;
}

function App() {
  return (
    <div>
      <Alert message="This is a success alert!" type="success" />
      <Alert message="This is a danger alert!" type="danger" />
    </div>
  );
}
