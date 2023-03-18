import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMarkdown } from "../slices/markdownSlice";
import { Accordion, Form } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";

const Editor = () => {
  const text = useSelector((state) => state.markdown.text);
  const dispatch = useDispatch();
  return (
    <Accordion className="editor" defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="shadow-sm">
        <Accordion.Header>Editor</Accordion.Header>
        <Accordion.Body className="">
          <Form.Control
            as={TextareaAutosize}
            id="editor"
            className="editor-textarea m-0 p-0 border-0 w-100"
            placeholder="Enter your markdown here"
            value={text}
            onChange={(e) => dispatch(setMarkdown(e.target.value))}
            style={{
              resize: "none",
              fontFamily: "Lucida Console, Courier, monospace",
            }}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Editor;
