import { useState } from "react";

const useForm = ({ initialValueForm }) => {
  const [fields, setFields] = useState(initialValueForm);
  const [errors, setErrors] = useState({});
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const onBlur = ({ target }) => { // Valida el campo requerido
    let error = errors;
    let { name } = target;
    let { value, required } = fields[name];
    if (!value && required) {
      error[name] = "Required field";
    } else if (name === "email" && value) {
      if (!emailRegex.test(value)) {
        error[name] = "Invalid email";
      }else{
        delete error[name];
      }
    } else if (error[name]) {
      delete error[name];
    }
    setErrors({ ...error });
  };

   const onChange = ({ target }) => { // Agrega el valor del campo
     let { name, type, value, checked } = target;
     setFields({
       ...fields,
       [name]: {
         ...fields[name],
         value: type === "checkbox" ? checked : value,
       },
     });
   };

  const validateFields = () => { // Valida los campos requeridos
    let requireds = {};
    for (let [key, values] of Object.entries(fields)) {
      let { value, required } = values;
      if (!value && required) {
        requireds[key] = "Required field";
      } else if (key === "email" && value) {
        if (!emailRegex.test(value)) {
          requireds[key] = "Invalid email";
        }
      }
    }
    return requireds;
  };

  const validateForm = () => { // Valida el formulario
    let requireds = validateFields();
    setErrors(requireds);
    return requireds;
  };

  return {
    fields,
    errors,
    validateForm,
    input: (name) => ({
      name,
      value: fields[name].value,
      onChange,
      onBlur
    }),
    checkbox: (name) => ({
      name,
      value: fields[name].value,
      onChange
    }),
    radio: (name, value) => ({
      name,
      value,
      checked: value === fields[name].value,
      onChange
    }),
    select: (name) => ({
      name,
      value: fields[name].value,
      onChange,
      onBlur
    }),
  };
};


export default useForm;
