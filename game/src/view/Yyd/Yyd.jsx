import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Yyd() {
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const goDuck = () => {
        navigate("/duck")
    };

    const goShip = () => {
        navigate("/ship")
    };

    const RealTexts = [
        "여의도 한강공원. 날이 좀 많이 추웠던 요 근래에는 갈 일이 잘 없었지만, 봄 ~ 가을 사이에 또의나루라고 불릴 정도로 자주 방문했던 곳 중 하나이다.",
        "산책을 좋아하는 우리 둘의 특성 상 공원을 돌아다니는 것을 좋아하기도 하고,",
        "5호선으로 퇴근하는 우리 둘에게 퇴근 길에 데이트하기 좋은 곳이기도 해서 여러모로 자주 방문했었다.",
        "나에겐 아직 본격적으로 연애를 시작하기 전, 그녀가 나를 좋아한다는 것을 확실히 알 수 있었던 곳이기도 하다.",
        "사실 썸 단계에서도 종종 방문했던 곳으로 애슐리 퀸즈도 가 보았었고, ",
        "내가 좋아하는 랫서판다 인형을 뽑기 위해 종종 방문하기도 했었었다. (물론 단 한 번도 성공하진 못했다.)",
        "200일에 레터링 마카롱을 사 들고 한강 라면을 먹으러 방문한 적도 있었으며,  ",
        "그 때 윤하의 콘서트를 운 좋게 보기도 했었다.",
        "아무쪼록 이 곳도 굉장히 추억이 많은 장소였었다. 그리고 그것은 그녀 역시 마찬가지인 듯하다.",
        "여의도 한강공원에서 나는…"
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
                <Modal.Body style={{ margin: "auto" }}>
                    <h5 style={{ textAlign: "center" }}>여의도로 이동한 나는...</h5>
                    <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                        <Button
                            onClick={goDuck}
                            variant="light"
                            style={{ textAlign: "center", width: "100%" }}>
                            유람선 선착장 방향으로 간다.</Button>
                    </Row>
                    <Row style={{ margin: "auto", width: "100%", marginTop: "3%" }}>
                        <Button variant="light"
                            style={{ textAlign: "center", width: "100%" }}
                            onClick={goShip}>
                            오리배 타는 방향으로 간다.
                        </Button>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )


}

export default Yyd;