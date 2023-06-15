import React from "react";

const Header = (props) => {
  return (
    // <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="ui fixed menu" >
      <div className="ui container center">
        <h2>Contact Manager</h2>
        
      </div>
      
      {/* <img src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png" style={{width:"30px", height:"30px", marginRight:"20px" , marginTop:"10px"}} onClick={props.darkMode}/> */}
    </div>
    // </nav>
  );
};

export default Header;
