import React from "react";
import { useForm } from "../../../hooks";

const withInicio = (Component) => (props) => {
  const initialValueForm = {
    email: { value: "", required: true },
    password: { value: "", required: true },
    select: { value: "", required: true },
    textarea: { value: "", required: true },
    checkbox: { value: false, required: false },
    radio: { value: "", required: true },
  };
  const { fields, errors, validateForm, ...form } = useForm({
    initialValueForm,
  });

  const actions = {
    errors,
    form,
    formControlError: (name) => (errors[name] ? "form-control-error" : ""),
    handleSubmit: () => {
      if (!Object.values(validateForm()).length) {
        let data = {};
        for (const [key, field] of Object.entries(fields)) {
          data = { ...data, [key]: field.value };
        }
        alert(JSON.stringify(data));
      }
    },
  };

  return <Component {...actions} />;
};

export default withInicio;
