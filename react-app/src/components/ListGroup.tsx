import { useState } from "react";

interface Props {
  heading: string;
  items_arr: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items_arr, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items_arr.length == 0 && <p>No items found</p>}
      <ul className="list-group">
        {items_arr.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
