import React,{useState} from "react";
import { Box, Typography } from "@material-ui/core";
import axios from "axios";


function AddExpenseRequestForm() {
    const [description, setDescription] = useState("");

    const handleDescription =(e) =>{
        setDescription(e.target.value)
    }
  
    const handleSubmit = ()=> {
        console.log(description)
       axios.post("test.json", {
             id: 1,
             date: "",
            request: description,
            requestedby:"",
            status: "Under Review",
            agency:"",
            amount:"",
       },)
            .then(function (response) {
                console.log(response);
              })
        
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="text"
          name="text"
          onChange={(e)=>handleDescription(e)}
          placeholder="Expense Description"
        />
         {/* <input
          type="text"
          
          onChange={}
          placeholder="Who is making the request"
        />
         <input
          type="text"
        
          onChange={}
          placeholder="Agency name"
        />
         <input
          type="text"
          
          onChange={}
          placeholder="Amount (£)"
        /> */}
      </form>
    );
  }
  


  
 
  

  export default AddExpenseRequestForm;
  
  