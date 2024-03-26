import React, { useState, useEffect } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Sotdon() {
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

    const RealTexts = [
        "여기야 말로 사귀기 전에 그녀의 플러팅이 정점을 달했던 때가 아닐까.",
        "원래 퇴근 메이트였던 우리는 점차 친해져 갔고, 시간이 나서 한 두 번씩 저녁을 같이 먹기 시작하다가… ",
        "이젠 거의 매일 저녁을 같이 먹는 사이가 되었다.",
        "여기도 썸 타기 전, 그녀가 (전) 고깃집 아르바이트 생이었던 나한테 고기 굽는 실력을 보여주면 고기를 사주겠다며 저녁 약속을 잡은 곳 중 하나이다.",
        "그리고 그 약속이 있는 날, 갑작스레 그녀가 야근을 하게 되었을 뿐이다. ",
        "공짜 고기가 아쉬웠던 나는 집 근처 역에 도착하자마자 그녀에게 전화를 했었는데 그녀의 플러팅이 정말 나한테 훅 들어왔다.",
        "‘ABAP 대신 내가 보고 싶다’니… ",
        "아무튼, 이 곳은 그러한 추억이 담긴 곳이다. ",
        "물론 지금은 그 때 이후로 그녀가 기름진 음식을 잘 안 먹게 되어서 방문한 적은 없지만, 나름 이렇게 추억이 담긴 곳을 오니 색 다르다.",
        "어? 그녀가 쓴 것으로 보이는 편지가 가게 테이블 위에 놓여있다."
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
        // HD를 이동 기록에 추가
        moves.push('솥돈');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '솥돈'];
        setMoves(newMoves);
    };

    const goHdepartment = () => {
        // Add your logic here based on button click
        navigate("/Hdepartment")
    };

    const goGhm = () => {
        // Add your logic here based on button click
        navigate("/Ghm")
    };

    const goYyd = () => {
        navigate("/Yyd")
    }

    const handleContinueClick = () => {
        // 웹 스토리지에서 현재까지의 이동 기록을 가져옴
        const moves = JSON.parse(sessionStorage.getItem('moves')) || [];

        // HD를 이동 기록에 추가
        moves.push('솥돈');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '솥돈'];
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
                backgroundImage: `url("/images/sd.png")`,
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
                                안녕, 오빠. 여기서 이러한 편지를 받게 될 거라고는 생각조차 못했지? <br></br>
                                벌써 우리가 1년이라니… 여기서 오빠랑 고기 구워 먹었을 때가 새록새록 기억이 나. <br></br>
                                여기서 고기 구워먹고 설빙가서 빙수 먹은 건 기억나요? <br></br>
                                그 때 딸기 빙수 먹을 때 내가 딸기 소스 안 좋아한다고 그랬는데 오빠가 장난인 줄 알고 딸기 소스 추가시킨 것도 기억이 나. <br></br>
                                그 때 진짜 우리 엄청 티격태격 싸웠었는데 말이지, 우리가 이렇게 될 거라는 걸 알고 있었을까? <br></br>
                                단순히 퇴근만 같이 하는 게 아니라 앞으로 출근도 이제 같이 할 거라는 거 말이야! <br></br>
                                물론 지금은 같이 출근하는 거까진 힘들지만, 이제 곧 같이 살 거니까 ㅎㅎ
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

                            {moves.length < 6 && <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                                <Button
                                    variant="light"
                                    style={{ textAlign: "center", width: "100%", marginTop: "2%", display: "block", margin: "auto" }}
                                    onClick={handleContinueClick}
                                > 다른 곳도 가 본다. </Button>
                            </Row>
                            }

                            {
                                moves.includes('서대문역') && moves.includes('솥돈') && moves.includes('현백') && moves.includes('오리배') && moves.includes('유람선') && moves.includes('광장') && (
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
                            {(!moves.includes('서대문역') || !moves.includes('광장')) && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goGhm}
                                    >
                                        광화문으로 간다
                                    </Button>
                                </Row>
                            )}

                            {!moves.includes('현백') && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goHdepartment}
                                    >
                                        현대백화점으로 간다
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

export default Sotdon;