import { useState } from "react";

function InputUserName() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data

    // You can pass formData as a fetch body directly:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  const [inputOne, setInputOne] = useState("");

  function addFood() {
    let newFood = {
      nameFood: inputOne,
    };
    console.log(newFood);

    // state.Food.push(newFood);
  }

  return (
    <div>
      <form>
        Продукт:
        <input
          type="text"
          name="input1"
          value={inputOne}
          onChange={(event) => setInputOne(event.target.value)}
        />
        <input type="submit" value="Отправить" onClick={addFood} />
      </form>
    </div>
  );

  // return (
  //   <form method="post" onSubmit={handleSubmit}>
  //     <input
  //       name="myInput"
  //       // value={}
  //       onChange={(event) => setInputOne(event.target.value)}
  //     />

  //     <button type="submit">Submit form</button>
  //   </form>
  // );
}
export default InputUserName;
