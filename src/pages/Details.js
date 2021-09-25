import React from "react";

export default function Details(props) {
  const itemID = props.match.params.id;

  console.log(itemID);

  return (
    <div>
      <h1>Details</h1>
    </div>
  );
}
