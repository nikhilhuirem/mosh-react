import React from "react";

export default function ListGroups() {
    const items = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
    ];
  return (
    <>
      <h2>List group</h2>
     
      <ul className="list-group">
        {items.map(item => (
                <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
