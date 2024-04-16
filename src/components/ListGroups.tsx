import React, { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  selectedItem: (item: string) => void;
}

export default function ListGroups({items, heading, selectedItem}: Props) {
    
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h2>{ heading }</h2>
      { items.length === 0 && <p>No items found</p> }
      <ul className="list-group">
        {items.map((item, index )=> (
                <li className={ selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => {setSelectedIndex(index)
                  selectedItem(item)
                }}>{item}</li>
        ))}
      </ul>
    </>
  );
}
