import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { Accordion } from "react-bootstrap";
import emoji from "remark-emoji";

const Preview = () => {
  const text = useSelector((state) => state.markdown.text);

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="shadow-sm">
        <Accordion.Header>Previewer</Accordion.Header>
        <Accordion.Body id="preview">
          <ReactMarkdown
            remarkPlugins={[gfm, emoji]}
            children={text}
            rehypePlugins={[rehypeKatex]}
            includeElementIndex={true}
            breaks={true}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Preview;
