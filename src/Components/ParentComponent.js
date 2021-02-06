import React from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  // sending a function as a props
  const handleAlert = (Name) => {
    alert(`Hi, I am ${Name}`);
  };
  return (
    <div className="parentComponent">
     
      <div style={{ padding: "10px 20px", textAlign: "center",  borderRadius: "50%"}}>
          <img src="riadh.jpg" className="imagepublic" alt="myImage" />
        </div>
      <ChildComponent
       fullName="Riadh Khanchel, Ph.D."
        profession="Assistant Professor of quantitative Methods"
        biography="I have a Bachelor Degree of management, a Master Degree of modeling and Ph.D. in management. I have a various work exprerience in teaching, consultancy and managment. "
        handleAlert={handleAlert}
      >
        
      </ChildComponent>
      
      
    </div>
  );
};

export default ParentComponent;
