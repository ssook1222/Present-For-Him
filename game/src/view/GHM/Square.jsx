import React, { useState, useEffect } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Square() {
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showText, setShowText] = useState(true);
    const [showOtherChoice, setShowOtherChoice] = useState(false);
    const [moves, setMoves] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // 컴포넌트가 처음으로 렌더링될 때 moves 배열의 길이를 가져옴
        const initialMoves = JSON.parse(sessionStorage.getItem('moves')) || [];
        setMoves(initialMoves);
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음으로 렌더링될 때 한 번만 실행

    const goOmokgyo = () => {
        // Add your logic here based on button click
        navigate("/omokgyo")
    };

    const goYyd = () => {
        // Add your logic here based on button click
        navigate("/Yyd")
    };

    const goWest = () => {
        // Add your logic here based on button click
        navigate("/West")
    };

    const RealTexts = [
        "그녀와 거닐었던 광장을 한 번 혼자 산책해보기로 했다.",
        "이렇게나 넓었던가…? 함께 걸었을 때에도 광장이 어느 정도 면적이 있다는 것을 알기는 했으나, 막상 걸어보니 그 면적이 더 넓게 다가왔다.",
        "이런저런 생각을 하며 걷다, 그녀에게 고백 비스무리하게 했던 장소에 도착했다.",
        "그녀는 그 때 내가 ‘그 쪽도 나를 좋아하지 않냐’고 물어본 질문을 굉장히 당황스럽다고 했었다.",
        "사실 당황하는 모습이 눈에 보이긴 했었다. 그 질문 이후에 바로 자신에게 시간을 조금 달라고 했었으니…",
        "물론 나는 관대하게 시간을 주긴 했다. 약 5분.",
        "그제서야 그녀는 자신의 감정에 대해 실토했고, 서로의 마음을 확인할 수 있었다.",
        "그렇게 생각하던 중 테이블 위에 놓여있는 그녀의 편지를 발견했다."
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
        const moves = JSON.parse(sessionStorage.getItem('moves')) || [];
        moves.push('광장');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '광장'];
        setMoves(newMoves);
    };

    const handleContinueClick = () => {
        // 웹 스토리지에서 현재까지의 이동 기록을 가져옴
        const moves = JSON.parse(sessionStorage.getItem('moves')) || [];

        // HD를 이동 기록에 추가
        moves.push('광장');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '광장'];
        setMoves(newMoves);

        setShowOtherChoice(true);
    };

    const handleQuitClick = () => {
        // Implement your logic here
        navigate("/end3");
    };

    const handleFinalClick = () => {
        // Implement your logic here
        navigate("/real-end");
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
                                안녕, 오빠. 광장은 우리에게 있어 어떻게 보면 가장 특별한 곳이자, 가장 일상적인 곳이 아닐까 싶어, <br></br>
                                오빠는 모르겠지만 오빠가 부산에 교정을 받으러 종종 내려 갔을 때 있잖아. <br></br>
                                아니면 오빠가 SI 프로젝트 때문에 야근해서 나를 볼 수 없을 때나… <br></br>
                                아무튼 내가 오빠를 만나지 못할 때, 종종 퇴근하고 혼자 오빠 없는 광장을 거닐곤 해. <br></br>
                                되게 청승맞지 않아? ㅎㅎ… 하지만, 나한테 그만큼 오빠랑 광장을 거니는 그 순간들이 엄청 큰 추억이자 재산이거든. <br></br>
                                일상 속에서의 그 모습들도, 오빠가 나한테 고백 겸 질문을 했을 때의 그 순간들도. <br></br>
                                모두 이제는 내 인생 속에서 놓칠 수 없는 하나의 재산이 되었어. <br></br>
                                그만큼 오빠가 이제는 내 일상 속에 가장 중요한 부분을 차지하고 있다는 의미기도 하겠지?
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
                            {
                                moves.length < 6 && <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                                    <Button
                                        variant="light"
                                        style={{ textAlign: "center", width: "100%", marginTop: "2%", display: "block", margin: "auto" }}
                                        onClick={handleQuitClick}
                                    > 더 이상 이동하지 않고<br></br> 그녀에게 문자로 답장한다. </Button>
                                </Row>
                            }

                            {
                                moves.length < 6 && (
                                    <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                                        <Button
                                            variant="light"
                                            style={{ textAlign: "center", width: "100%", marginTop: "2%", display: "block", margin: "auto" }}
                                            onClick={handleContinueClick}
                                        > 다른 곳도 가 본다. </Button>
                                    </Row>
                                )
                            }

                            {
                                ( moves.includes('서대문역') && moves.includes('솥돈') && moves.includes('현백') && moves.includes('오리배') && moves.includes('유람선') && moves.includes('광장') ) && (
                                    <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                                        <Button
                                            variant="light"
                                            style={{ textAlign: "center", width: "100%", marginTop: "2%", display: "block", margin: "auto" }}
                                            onClick={handleFinalClick}
                                        > 고개를 들어 보니 눈 앞에 그녀가 서 있었다! </Button>
                                    </Row>
                                )
                            }
                        </>
                    )}

                    {showOtherChoice && (
                        <div>
                            <h4 style={{ marginBottom: "2%" }}>어디로 갈까?</h4>
                            {!moves.includes('서대문역') && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goWest}
                                    >
                                        서대문 방향으로 간다
                                    </Button>
                                </Row>
                            )}

                            {(!moves.includes('솥돈') || !moves.includes('현백')) && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={ goOmokgyo }
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
                                        onClick={ goYyd }
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

export default Square;

