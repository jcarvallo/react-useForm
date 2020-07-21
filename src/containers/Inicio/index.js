import React from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
} from "reactstrap";
import withInicio from "./components/withInicio";

const Inicio = ({...props}) => {
    let { errors, form, formControlError, handleSubmit } = props;
    return (
      <>
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
              <Button onClick={handleSubmit}>Submit</Button>
            </Form>
          </Col>
        </Row>
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
      </>
    );
}

export default withInicio(Inicio);
