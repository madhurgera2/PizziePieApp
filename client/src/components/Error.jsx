import React from "react";
import { Alert } from "react-bootstrap";
export const Error= (error)=>{
    return(
        
            <Alert   variant="error">
      This is a {error} alert—check it out!
    </Alert>
        
    )
}