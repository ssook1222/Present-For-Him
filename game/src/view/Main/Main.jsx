import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';
import "./Main.css";

function Main() {

  const navigate = useNavigate();

  const [showButtons, setShowButtons] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const handleTextClick = () => {
    setShowButtons(true);
    setTextVisible(false);
  };

  const handleYesClick = () => {
    // Add your logic here based on button click
    navigate("/msg1")
  };


  const handleNoClick = () => {
    navigate("/ending1")
  }

  return (
    <div className="main-container">
      <div
        onClick={handleTextClick}
        className={`blinking-text ${textVisible ? "" : "visible"}`}
      >
        <div>당신에게 하나의 메시지가 도착했습니다.</div>
        <div>확인하시겠습니까?</div>
      </div>

      {showButtons && (
        <Row style={{ width: "30%", justifyContent: "center", marginTop: "3%" }}>
          <Col>
            <Button
              variant="dark"
              style={{ padding: "10px", margin: "auto", display: "block" }}
              onClick={() => handleYesClick()}
            >
              예
            </Button>
          </Col>
          <Col>
            <Button
              variant="dark"
              style={{ padding: "10px", margin: "auto", display: "block" }}
              onClick={() => handleNoClick()}
            >
              아니오
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Main;
