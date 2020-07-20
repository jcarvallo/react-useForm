import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Navbar,
  NavbarBrand,
  Row,
  Col,
} from "reactstrap";
import useForm from "./hooks/useForm";

const initialValueForm = {
  email: { value: "", required: true },
  password: { value: "", required: true },
  select: { value: "", required: true },
  textarea: { value: "", required: true },
  checkbox: { value: false, required: false },
  radio: { value: "", required: true },
};
function App() {
  const { fields, errors, validateForm, ...form } = useForm({
    initialValueForm,
  });

  const handleSubmit = () => {
    if (!Object.values(validateForm()).length) {
      let data = {
        email: fields.email.value,
        password: fields.password.value,
        select: fields.select.value,
        textarea: fields.textarea.value,
        checkbox: fields.checkbox.value,
        radio: fields.radio.value,
      };
      alert(JSON.stringify(data));
    }
  };

  const formControlError = (name) => (errors[name] ? "form-control-error" : "");

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React customer hooks useForm</NavbarBrand>
      </Navbar>
      <Container className="p-4">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  className={formControlError("email")}
                  {...form.input("email")}
                  placeholder="email"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  onChange
                  type="password"
                  className={formControlError("password")}
                  {...form.input("password")}
                  placeholder="password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input
                  type="select"
                  className={formControlError("select")}
                  {...form.select("select")}
                >
                  <option value="">Select options...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
                {errors.select && <p className="error">{errors.select}</p>}
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input
                  type="textarea"
                  className={formControlError("textarea")}
                  {...form.input("textarea")}
                />
                {errors.textarea && <p className="error">{errors.textarea}</p>}
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" {...form.radio("radio", "one")} />{" "}
                    Option one is this and that—be sure to include why it's
                    great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" {...form.radio("radio", "two")} />{" "}
                    Option two can be something else and selecting it will
                    deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio1" disabled /> Option three
                    is disabled
                  </Label>
                </FormGroup>
                {errors.radio && <p className="error">{errors.radio}</p>}
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" {...form.checkbox("checkbox")} /> Check
                  me out
                </Label>
              </FormGroup>
              <br></br>
              <Button onClick={() => handleSubmit()}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <style jxs="true">
        {`
            .error{
              color:red;
              font-size:12px;
            }
            .form-control-error{
              border: 1px solid red;
            }
         `}
      </style>
    </div>
  );
}

export default App;
