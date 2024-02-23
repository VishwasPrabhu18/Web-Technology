import React from 'react';
import "./App.css";

function MyButton() {
  return (
    <>
      <button>Click Here</button>

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
    content = <MyButton />
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
      <img src={user.img} style={{ width: "200px", height: "200px" }} alt="random" />
      <br />
      <MyButton />
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