import React, { useState } from 'react';
import "./App.css";

function MyButton({ msg }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // alert("Button Clicked : " + count);
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>{msg} - {count}</button>
    </>
  );
}

const App = () => {
  // const name = "Vishwas Prabhu";
  // create use map
  const user = {
    name: "Vishwas Prabhu",
    age: 20,
    address: "Udupi",
    img: "https://i.imgur.com/yXOvdOSs.jpg"
  }

  let content;
  if (user.age > 18) {
    content = <MyButton msg={"Google"} />
  }

  // create list of courses map
  const courses = [
    { id: 1, name: "React", isElective: false },
    { id: 2, name: "Node", isElective: true },
    { id: 3, name: "MongoDB", isElective: false },
    { id: 4, name: "Express", isElective: true },
  ]
  return (
    <>
      <h1 className='heading'>Hello World</h1>
      <h2>It is a nice day</h2>
      <h1>My name is {user.name}</h1>
      <p>My age is {user.age}</p>
      <p>My address is {user.address}</p>
      <img src={user.img} style={{ width: "200px", height: "200px" }} alt="random" />
      <br />
      <MyButton msg={"Click Here"} /> &nbsp;
      {content}
      <br />

      <ul>
        {
          courses.map((course) => (
            <li key={course.id} style={{ color: course.isElective ? "blue" : "red" }}>
              {course.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App