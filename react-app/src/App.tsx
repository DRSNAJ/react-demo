// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

function App() {
  // let items = ["New York", "Colombo", "London", "Paris", "Tokyo"];

  // const handleSelectItem = (item: String) => {
  //   console.log(item);
  // };
  const handleButtonClick = (BtnTxt: String) => {
    console.log(BtnTxt);
  };

  return (
    <div>
      <MyButton onClickButton={handleButtonClick}>hello click me</MyButton>
      {/* <Alert>Hello World</Alert> */}
      {/* <ListGroup
        items_arr={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
