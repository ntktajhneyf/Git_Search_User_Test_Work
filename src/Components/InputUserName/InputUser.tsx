import React, { useState } from "react";

const MyComponent = (props) => {
  // const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    // setInputValue(event.target.value);
    const newText = event.target.value;
    props.onChange(newText);
  };
  // let spisok = `https://api.github.com/search/users?q=${inputValue}`;
  // console.log(spisok);

  return (
    <div>
      <input type="text" value={props.value} onChange={handleInputChange} />
      <p>Значение: {props.value}</p>
    </div>
  );
};

export default MyComponent;
