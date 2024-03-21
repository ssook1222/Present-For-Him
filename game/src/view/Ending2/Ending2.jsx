import React, { useState }  from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Ending2() {
    // 도메인은 ed2로 
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showText, setShowText] = useState(true);

    const navigate = useNavigate();

    const RealTexts = [
        "도대체 무슨 선물이길래 나의 도움이 필요한 걸까.",
        "침대에 누워 있는 상태라 몸을 움직이기가 귀찮기도 했고 직접 알아서 미리 준비하면 되지 않았을까, 싶은 마음에 아니, 라고 응답했다.",
        "그녀가 나한테 실망했던 걸까?",
        "오늘이 1주년임에도 불구하고 하루종일 그녀에게서 아무런 연락이 오지 않았다.",
        "혹시나 싶어 직접 그녀에게 전화를 걸어보았지만, 전화기의 전원이 꺼져 있다는 연결음만 들렸다.",
        "이런, 단단히 화가 난 거 같은데… 어쩌지…?"
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
                    <div style={{ color: "#fff", paddingLeft: "10px" }}>{RealTexts[communicationTextIndex]}</div>
                    <Button
                        variant="dark"
                        style={{ padding: "10px 20px", borderRadius: "5px" }}
                        onClick={handleNextClick}
                    >
                        다음
                    </Button>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body style={{ margin: "auto" , width: "100%"}}>
                    {showText && (
                        <>
                            <div style={{ padding: "2%", width: "100%", textAlign: "center" }}>
                                <h4>Ending2</h4>
                                <hr></hr>
                                <h5>모든 게 다 귀찮아.</h5>
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

export default Ending2;