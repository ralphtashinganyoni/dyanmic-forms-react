import React from "react";
import InputTextField from "./input-field";
import DropdownSelect from "./select-field";
import TextAreaField from "./text-area";

class DynamicForm extends Comment{
    state = {

    };
     submitForm = event =>{
        const {fields, ...inputFields} = this.state;
        console.log(inputFields)
        // Do whatever you wish with the data
        event.preventDefault();
     }
}