import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Colombo", "London", "Paris", "Tokyo"];
  return (
    <div>
      <ListGroup items_arr={items} heading="Cities" />
    </div>
  );
}

export default App;
