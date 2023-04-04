import { useState } from "react";
import { useEffect } from "react";

const useForm = (initialState = {}) => {

const [values, setValues] = useState(initialState);
    
useEffect(() => {
	localStorage.setItem('personalDetails', JSON.stringify(values));
	
}, [values]);
  
const handleChange = ({target}) => {
    setValues({
        ...values,
        [target.name]: target.value,
    });
	}

return {
    values,
    handleChange,
    }
}

export default useForm;