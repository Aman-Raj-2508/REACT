// import './App.css';
// //importing our component
// import Item from './components/Item';
// import ItemDate from './components/ItemDate';
// function App() {
//   // Method two to the send the data.
//   const itemTwoName = "SurfExcel";

//   return (
//     <div>
//       {/* //Method 1 to pass the values */}
//       <Item name="Nirma"></Item>
//       <ItemDate day="20" month="June" year="1998"></ItemDate>

//       <Item name={itemTwoName}></Item>
//       <ItemDate day="22" month="July" year="1999"></ItemDate>

//       <Item name="555"></Item>
//       <ItemDate day="24" month="August" year="2000"></ItemDate>
//       <div className="App">
//         Hello Jee
//       </div>
//     </div>

//   );
// }

// export default App;


//Write all the above with properies like name and all is not so covenient for large data.
//so we will use another method
import './App.css';
//importing our component
import Item from './components/Item';
import ItemDate from './components/ItemDate';
function App() {

  //Array of Objects
  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "Nirma2",
      itemDate: "20",
      itemMonth: "June2",
      itemYear: "1998"
    },
    {
      itemName: "Nirma3",
      itemDate: "20",
      itemMonth: "June3",
      itemYear: "1998"
    }
  ]

  return (
    <div>

      <Item name={response[0].itemName}>
        {/* Not visible by default.We will have to use props.children inside Item component to make it visible. */}
        Hello Jee mai first element hoon.
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      <div className="App">
        Hello Jee
      </div>

    </div>

  );
}

export default App;