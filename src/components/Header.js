import React from "react";
import { Navbar, Button, NavbarBrand } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setRotation } from "../slices/rotationSlice";

const Header = () => {
  const rotation = useSelector((state) => state.rotation.isRotated);
  const dispatch = useDispatch();
  return (
    <Navbar
      variant="dark"
      bg="dark"
      className="mb-3 p-3 d-flex justify-content-between"
    >
      <NavbarBrand className="mx-3">React Markdown Previewer</NavbarBrand>
      <Button
        className="mx-3 d-none d-md-block"
        variant="outline-secondary"
        onClick={() => dispatch(setRotation())}
        active={rotation}
      >
        <i className="bi bi-hr"></i>
      </Button>
    </Navbar>
  );
};

export default Header;
