import React from "react";
import { Nav ,Navbar,Container} from "react-bootstrap";
import { FaRegCheckSquare} from "react-icons/fa";

export default()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
            <FaRegCheckSquare/>{''}Todo list
            </Navbar.Brand> 
      </Navbar> 
    )
}