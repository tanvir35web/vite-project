import { useRef } from 'react';

const App = () => {

  let heading = useRef();

  const change = () => {
    heading.current.classList.toggle("text-green");
    // heading.current.classList.add("text-red");
  }

  return (
    <div>
       <h1 className='text-green' ref={heading}>
        This is Heading Text
        </h1>
       <button onClick = {change}> Change </button>
    </div>
  );
};

export default App;