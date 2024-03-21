import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function West() {
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showText, setShowText] = useState(true);
    const [showOtherChoice, setShowOtherChoice] = useState(false);
    const [moves, setMoves] = useState([]);

    const navigate = useNavigate();

    const goOmokgyo = () => {
        // Add your logic here based on button click
        navigate("/omokgyo")
    };

    const goYyd = () => {
        // Add your logic here based on button click
        navigate("/Yyd")
    };

    const goSquare = () => {
        // Add your logic here based on button click
        navigate("/Square")
    };

    const RealTexts = [
        "서대문역. 입사 초기, 본사에서 나와 근무했던 공유 오피스가 있던 곳이었다. ",
        "근처에 시청역이 있어 초반에는 시청역으로 출퇴근 하였으나, ",
        "같은 5호선 출퇴근러였던 서대문역으로 통근하다는 것이 용이하다는 것을 알려준 이후로는",
        "그녀, 그리고 다른 남자동기 이렇게 세 명이서 서대문역으로 같이 퇴근을 하였다.",
        "물론 사귀기도 전의 일이다. 그떄까지만 해도 우리 사이의 관계가 저렇게 될 것이라고는 전혀 생각치 못했기 떄문에…",
        "지금은 광화문역 근처에 근무지가 있긴 하지만, 서대문역 쪽에서 자주 밥을 먹다보니 서대문역으로 퇴근하는 일이 잦다.",
        "근처에 디저트 무인 카페도 있고, 꽃집도 있고 해서 여러 이벤트들이 있던 곳이기도 하다.  ",
        "그렇게 생각하던 중 디저트 무인가게 진열장 속 그녀의 편지를 발견하였다."
    ];

    const handleNextClick = () => {
        if (communicationTextIndex === RealTexts.length - 1) {
            setShowModal(true);
        } else {
            setCommunicationTextIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleModalNextClick = () => {
        setShowText(false);
    };

    const handleContinueClick = () => {
        // 웹 스토리지에서 현재까지의 이동 기록을 가져옴
        const moves = JSON.parse(sessionStorage.getItem('moves')) || [];

        // HD를 이동 기록에 추가
        moves.push('서대문역');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '서대문역'];
        setMoves(newMoves);

        setShowOtherChoice(true);
    };

    const handleQuitClick = () => {
        // Implement your logic here
        navigate("/end3");
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
                    {showText && (
                        <>
                            <div style={{ padding: "2%" }}>
                                안녕, 오빠. 우리의 일상과 가장 밀접한 곳을 꼽으라면 서대문역이 아닐까? <br></br>
                                실제로 나는 서대문역으로 출퇴근을 하고 있기도 하고… 물론 우리 둘 다 근무지는 광화문역 근처이지만 광화문역으로 퇴근한 건 뭔가 손에 꼽을 거 같아. <br></br> 
                                급하게 어디를 바로 가야 할 때 아닌 이상은 말이지? <br></br> 
                                그래서 전에 오빠한테 크게 실망해서 감정 정리를 해야 했을 때 서대문역으로 출퇴근하면서 이런 저런 생각을 했었거든. <br></br>
                                특히 우리끼리 장난치면서 부르던 편의점 브랜드나 샌드위치 프랜차이즈 브랜드…를 생각하니까, 오빠는 이미 내 일상 속에 깊이 들어와 있구나 라는 생각이 들었어. <br></br>
                                그리고 이런 생각을 할 필요도 없이 오빠는 이미 나에게 큰 의미를 가진 존재이고, <br></br>
                                내가 오빠를 사랑한다는 그 대전제는 변하지 않겠구나라는 것을 알 수 있었지. <br></br>
                                오빠는 종종 이 전제가 바뀔까봐 불안해 할 때도 있지만, 진심으로 그럴 필요가 없다고 말해주고 싶어. <br></br>
                                이 전제는 내 일상에서 변하지 않을 근본이기도 하거든. <br></br>
                                항상 오빠와의 관계를 소중하게 여기고 있으니까 이런 내 마음을 꼭 알아줬음 좋겠어!
                            </div>

                            <Button
                                variant="light"
                                style={{ textAlign: "center", width: "80%", marginTop: "2%", display: "block", margin: "auto" }}
                                onClick={handleModalNextClick}
                            > 다음 </Button>
                        </>
                    )}

                    {!showText && !showOtherChoice && (
                        <>
                            <h5 style={{ textAlign: "center", marginBottom: "5%" }}>그녀의 편지를 다 읽은 나는...</h5>
                            <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                                <Button
                                    variant="light"
                                    style={{ textAlign: "center", width: "100%", marginTop: "2%", display: "block", margin: "auto" }}
                                    onClick={handleQuitClick}
                                > 더 이상 이동하지 않고<br></br> 그녀에게 문자로 답장한다. </Button>
                            </Row>

                            {
                            moves.length < 6 && <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                                <Button
                                    variant="light"
                                    style={{ textAlign: "center", width: "100%", marginTop: "2%", display: "block", margin: "auto" }}
                                    onClick={handleContinueClick}
                                > 다른 곳도 가 본다. </Button>
                            </Row>
                            }
                        </>
                    )}

                    {showOtherChoice && (
                        <div>
                            <h4 style={{ marginBottom: "2%" }}>어디로 갈까?</h4>
                            {!moves.includes('광장') && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goSquare}
                                    >
                                        광장으로 간다
                                    </Button>
                                </Row>
                            )}

                            {(!moves.includes('솥돈') || !moves.includes('현백')) && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goOmokgyo}
                                    >
                                        오목교로 간다
                                    </Button>
                                </Row>
                            )}

                            {(!moves.includes('오리배') || !moves.includes('유람선')) && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goYyd}
                                    >
                                        여의도로 간다
                                    </Button>
                                </Row>
                            )}

                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default West;

