//This is the APP.JS;
import './App.css';
import ParentComponent from "./Components/ParentComponent"
function App() {
  return (
<div>
  <ParentComponent/>
</div>
  );
}
export default App;

/*******************************************/
//This is the parent Component
/*******************************************/
import React from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  // sending a function as a props
  const handleAlert = (Name) => {
    alert(`Hi i Am ${Name}`)
  }
  return (
    <div className="parentComponent">
      <ChildComponent
        first="this is props send from ParentComponent"
        second="This is the second props"
        number={1234}
        tab={["a", "b", "c"]}
        handleAlert={handleAlert}
      />
    </div>
  );
};

export default ParentComponent;



/////////////////////////////////////////
//This is the child component
//////////////////////////////////////////
import React from "react";

const ChildComponent = (props) => {
  console.log("pros", props);
  //childName is used to return a value to the fuction
  // the value is defined in the child
  const ChildName = "Riadh";
  // key is used to identify each element
  return (
    <div>
      <h1> {props.first} </h1>
      {props.handleAlert(ChildName)}
      <h2> {props.second} </h2>
      <h3> {props.number} </h3>
      <div>
        <h4> tab props</h4>
        <ul>
          {props.tab.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default ChildComponent;