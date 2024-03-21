import React, { useState, useEffect } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Duck() {
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
        "평일이었으나 운 좋게도 다음 날 공휴일이어서 방문했던 오리배 선착장.",
        "사람이 많을 것을 걱정하였지만 퇴근 직후였던데다가, 평일이어선지 오리배를 탑승하려는 인원은 그렇게 많지 않았다.",
        "전동 오리배와 수동으로 페달을 밟는 형태의 오리배가 있었는데, 둘 다 전동 오리배를 타 본 경험이 없어 전동 오리배로 탑승하였었다.",
        "사실 겁이 굉장히 많은 그녀를 보고, 그녀가 오리배를 타더라도 제대로 경치를 구경할 수 있을까 걱정하였다.",
        "처음에는 흔들리는 배가 무서웠던지 겁에 질려 있었으나, 조금씩 적응되어 핸드폰으로 노을이 지는 한강을 찍는 그녀를 볼 수 있었다.",
        "그렇게 찍은 사진 중 하나가 지구 멸망하는 것과 같은 구름과 햇빛의 모습이었었다.",
        "나 역시 노을이 지는 한강에서 전동 오리배를 운전하는 경험은 색달랐어서 아직도 기억에 남는다.",
        "그렇게 이런저런 생각을 하던 중, 오리배 선착장 앞 테이블에 놓인 그녀의 편지를 발견했다."
    ];

    const goShip = () => {
        // Add your logic here based on button click
        navigate("/Ship")
    };

    const goOmokgyo = () => {
        // Add your logic here based on button click
        navigate("/omokgyo")
    };

    const goGhm = () => {
        // Add your logic here based on button click
        navigate("/Ghm")
    };

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
        moves.push('오리배');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '오리배'];
        setMoves(newMoves);
    };

    const handleContinueClick = () => {
        // 웹 스토리지에서 현재까지의 이동 기록을 가져옴
        const moves = JSON.parse(sessionStorage.getItem('moves')) || [];

        // HD를 이동 기록에 추가
        moves.push('오리배');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '오리배'];
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
                                안녕, 오빠. 나랑 오리배 탔던 거 기억 나? <br></br>
                                사실 내가 물을 되게 무서워해서 오리배를 탈까말까 굉장히 고민 많이 했었는데, 이런 색다른 경험을 오빠랑 하고 싶어서 <br></br>
                                무서웠음에도 불구하고 타러 가보자고 했었던 게 생각나네 ㅎㅎ <br></br>
                                그래도 그 때 겁나서 오빠랑 오리배를 타지 않았다면 엄청 후회했을 거 같아. <br></br>
                                그 때 당시 오빠랑 봤던 노을 지는 한강의 모습이나, 전동 오리배를 재밌게 운전했던 오빠의 옆 모습… <br></br>
                                그리고 다음 날 휴일이어서 온전히 즐길 수 있었던 그 순간들이 내게 모두 소중했거든. <br></br>
                                또 이 때의 경험은 그렇게 같이 놀 수 있는 날이 있으면 색다른 경험을 할 수 있게끔 내가 이곳저곳 알아보게 되는 하나의 계기가 된 거 같기도 해. <br></br>
                                굳이 오리배가 아니더라도, 특이한 것이 아니더라도, 그 순간을 간직할 가치가 있는 경험을 오빠랑 앞으로도 많이 하고 싶어. <br></br>
                                그 옆에 계속 있어줄 거지, 오빠?
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
                            {moves.length < 6 &&
                                <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
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
                            {(!moves.includes('현백') || !moves.includes('솥돈')) && (
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

                            {!moves.includes('유람선') && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goShip}
                                    >
                                        유람선 선착장 방향으로 간다
                                    </Button>
                                </Row>
                            )}

                            {(!moves.includes('광장') || !moves.includes('서대문역')) && (
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

                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Duck;
