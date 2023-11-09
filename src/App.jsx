import { useRef } from 'react';

const App = () => {

  let firstName, lastName, fullName = useRef();
 const info = () => {

  let fName = firstName.value;
  let lName = lastName.value;

  fullName.innerText = fName + ' ' + lName;

 }

  return (
    <div>
      <input ref={(e) =>firstName = e } type="text" placeholder="What is Your First Name?"/><br />
      <input ref={(e) => lastName = e} type="text" placeholder="What is Your Last Name?"/><br />
      <button onClick={info}>Submit</button>
      <h2 ref={(e)=>fullName = e}></h2>
    </div>
  );
};

export default App;