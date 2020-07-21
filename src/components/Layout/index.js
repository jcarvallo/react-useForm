import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

const Layout = (props) => (
  <>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">React customer hooks useForm</NavbarBrand>
    </Navbar>
    <Container className="p-4">{props.children}</Container>
  </>
);

export default Layout;
