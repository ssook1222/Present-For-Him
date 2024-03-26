import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Ghm() {
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const goSquare = () => {
        navigate("/Square")
    };

    const goWest = () => {
        navigate("/West")
    };

    const RealTexts = [
        "우리 일상과 가장 밀접해 있는 이 곳, 광화문 광장.",
        "사실 내가 그녀에게 나를 좋아하지 않냐며 물어보며 서로에 대한 감정을 확인 했던 곳도 바로 여기이다.",
        "그래도 서로 감정을 확인했던 그 날이 우리의 연인으로써의 첫 공식적인 시작일이 되었고, 오늘이 그 날로부터 딱 1년이 지난 날이다.",
        "그런 기념비적인 날인 것 외에도 평일에 회사 근처에서 점심이나 저녁을 먹으면, 광화문 광장을 데이트 장소로 하여 걷곤 했다.",
        "그만큼 광화문 광장은 우리에게 추억이 많은 곳 중 하나이다."
    ];

    const handleNextClick = () => {
        if (communicationTextIndex === RealTexts.length - 1) {
            // 마지막 텍스트일 경우 모달 창 표시
            setShowModal(true);
        } else {
            // 다음 텍스트의 인덱스로 업데이트
            setCommunicationTextIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <>
            <div style={{
                backgroundImage: `url("/images/ghm.png")`,
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                padding: "20px",
            }}>
                <div style={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
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
                <Modal.Body style={{ margin: "auto" }}>
                    <h5 style={{ textAlign: "center" }}>광화문 광장에서 나는…</h5>
                    <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                        <Button
                            onClick={goSquare}
                            variant="light"
                            style={{ textAlign: "center", width: "100%" }}
                        >광장을 한 바퀴 산책한다.</Button>
                    </Row>
                    <Row style={{ margin: "auto", width: "100%", marginTop: "3%" }}>
                        <Button variant="light"
                            style={{ textAlign: "center", width: "100%" }}
                            onClick={goWest}>
                            서대문역 방향으로 가 본 다.
                        </Button>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Ghm;
