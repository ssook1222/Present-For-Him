import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import '../../../src/view/Ending.css'

function Ending1() {

    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showText, setShowText] = useState(true);

    const navigate = useNavigate();

    const RealTexts = [
        "무슨 이상한 전화번호로 문자가 왔담.",
        "나는 저장되지 않은 전화번호로 연락이 오는 것을 무시한 채 오늘 데이트를 기대하고 있었다.",
        "왜냐면 오늘은 그녀와 내가 만난 지 딱 1년이 되는 날이기 때문이다.",
        "…",
        "그런데 그녀에게 보낸 연락이 10시간이 넘어도 오지 않는다.",
        "뭐지? 무슨 일이 생긴걸까…?"
    ];

    const goStart = () => {
        // Add your logic here based on button click
        navigate("/")
    };

    const handleNextClick = () => {
        if (communicationTextIndex === RealTexts.length - 1) {
            setShowModal(true);
        } else {
            setCommunicationTextIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <>
            <div style={{
                backgroundColor: "black",
                height: "100vh",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                padding: "20px",
            }}>
                <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    width: "100%",
                    height: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "5px"
                }}>
                    <div
                        className="end-text"
                        style={{ color: "#fff", paddingLeft: "10px" }}>
                        {RealTexts[communicationTextIndex]}
                    </div>
                    <Button
                        className="end-bt"
                        variant="dark"
                        style={{ padding: "10px 20px", borderRadius: "5px" }}
                        onClick={handleNextClick}
                    >
                        →
                    </Button>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body style={{ margin: "auto", width: "100%" }}>
                    {showText && (
                        <>
                            <div style={{ padding: "2%", width: "100%", textAlign: "center" }}>
                                <h4>Ending1</h4>
                                <hr></hr>
                                <h5>시작도 안 했는데...</h5>
                            </div>
                            <br></br>
                            <Button
                                variant="light"
                                style={{ textAlign: "center", width: "80%", marginTop: "2%", display: "block", margin: "auto" }}
                                onClick={goStart}
                            > 처음으로 </Button>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Ending1;