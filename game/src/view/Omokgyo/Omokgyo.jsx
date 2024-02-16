import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";

function Omokgyo() {
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const RealTexts = [
        "사실, 오목교는 우리 둘에게 있어 조금 특별한 곳이다.",
        "개인적으로는 그녀의 플러팅(그녀는 아니라고는 하지만…)을 받은 곳이기도 하고,",
        "주말에 상대적으로 덜 번화하지만 그래도 있을 건 다 있는 이 곳에서 데이트를 종종하기도 했다.",
        "평일에도 저녁을 먹으러 이 곳을 꽤 방문했으니 다른 곳에 비해 추억이 많은 건 당연한 셈이다.",
        "그럼 이제 어디로 가볼까..."
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
                backgroundImage: 'url("your-background-image-url.jpg")',
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
                <Modal.Body style={{margin: "auto"}}>
                    <h5 style={{textAlign:"center"}}>오목교로 이동한 나는...</h5>
                    <Row style={{margin: "auto", width:"100%", marginTop:"5%"}}>
                        <Button variant="light" style={{textAlign:"center", width:"100%"}}>오목교 더 현대 백화점으로 간다.</Button>
                    </Row>
                    <Row style={{margin: "auto", width:"100%", marginTop:"3%"}}>
                        <Button variant="light" style={{textAlign:"center", width:"100%"}}>오목교 앞 솥뚜껑 삼겹살집으로 간다.</Button>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Omokgyo;
