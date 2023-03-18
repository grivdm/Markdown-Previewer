import React from "react";
import Preview from "./components/Preview";
import Editor from "./components/Editor";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const MainPage = () => {
  const rotation = useSelector((state) => state.rotation.isRotated);
  return (
    <Container fluid className="main-page" style={{}}>
      <Row>
        <Col
          xs={12}
          md={rotation ? 12 : 6}
          style={{
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Editor />
        </Col>
        <Col
          xs={12}
          md={rotation ? 12 : 6}
          style={{
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Preview />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
