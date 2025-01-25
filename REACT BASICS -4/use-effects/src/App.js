import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  //<------------------------VARIATION - 1 ---> EVERY RENDER ------------------------->
  // useEffect(() => {
  //   console.log("UI RENDERING DONE")
  // });

  //<------------------------VARIATION - 2 ---> FIRST RENDER ------------------------->
  // useEffect(() => {
  //   console.log("UI RENDERING DONE")
  // }, []);

  //<------------------------VARIATION - 3 ---> ON FIRST RENDER + WHENEVER DEPENDENCY CHANGES------------------------->
  // useEffect(() => {
  //   console.log("Change Observed ")
  // }, [text]);


  //<------------------------VARIATION - 4 ---> TO HANDLE UNMOUNTING OF A COMPONENT------------------------->

  // useEffect(() => {
  //   console.log("Listener added ");


  //   return () => {
  //     console.log("Listener removed");
  //   }
  // }, [text]);

  // function changeHandler(event) {
  //   console.log(text);
  //   setText(event.target.value);
  // }

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    console.log("Adding event listener");
    window.addEventListener('resize', handleResize);

    // Cleanup function (executes on unmount or dependency change)
    return () => {
      console.log("Removing event listener");
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="App">
      {/* <input type="text" onChange={changeHandler}></input> */}

      <p >Windows Size is : {windowSize}</p>
    </div>
  );
}

export default App;
