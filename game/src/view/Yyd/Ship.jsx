import React, { useState, useEffect } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Ship() {
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showText, setShowText] = useState(true);
    const [showOtherChoice, setShowOtherChoice] = useState(false);
    const [moves, setMoves] = useState([]);

    const navigate = useNavigate();

    const RealTexts = [
        "이 유람선 선착장의 경우 2층으로 나뉘어져 있다.",
        "2층은 애슐리 퀸즈, 1층은 편의점과 조그마한 규모의 오락실로 되어 있는데, 이 두 층 모두 그녀와 함께 방문했었다.",
        "애슐리 퀸즈의 경우 연애 하기 전에 한 번 한강 뷰를 보며 저녁 식사를 하고자 가봤었고, (물론 실패했다. 예약을 하려고 해도 퇴근하고 가는 시간대에는 방문이 불가능해서…)",
        "1층의 경우 내가 렛서팬더를 좋아해서 랫서팬더 인형을 뽑기 위해 종종 방문하곤 했었다. (이 역시 돈만 날리고 실패했다.  그래서 따로 인형을 다이소에서 구입했다…)",
        "편의점의 경우 여기서 한강 라면을 먹지는 않았지만, 한강공원 근처에 있는 편의점 입구에서 라면을 구매해 끓여먹었던 기억이 있다.",
        "그 외에도 여기서 인형 뽑기를 하던 도중, 중학생으로 보이는 커플 무리를 만났던 일화라던가,",
        "애슐리 퀸즈에서 이야기했던 추억이라던가… 겨울에는 추워서 잘 안 왔으나 종종 방문했던 곳이라 이 역시 기억에 남는다.",
        "이처럼 이런저런 생각을 하던 와중, 편의점 전자레인지 위에 놓인 그녀의 편지가 보였다."
    ];

    useEffect(() => {
        // 컴포넌트가 처음으로 렌더링될 때 moves 배열의 길이를 가져옴
        const initialMoves = JSON.parse(sessionStorage.getItem('moves')) || [];
        setMoves(initialMoves);
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음으로 렌더링될 때 한 번만 실행

    const goDuck = () => {
        // Add your logic here based on button click
        navigate("/duck")
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
        moves.push('유람선');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '유람선'];
        setMoves(newMoves);
    };

    const handleFinalClick = () => {
        // Implement your logic here
        navigate("/real-end");
    };

    const handleContinueClick = () => {
        // 웹 스토리지에서 현재까지의 이동 기록을 가져옴
        const moves = JSON.parse(sessionStorage.getItem('moves')) || [];

        // HD를 이동 기록에 추가
        moves.push('유람선');

        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '유람선'];
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
                                안녕, 오빠! 오늘의 여의도 한강공원 날씨는 어때? <br></br>
                                여의도 한강공원은 다 좋은데 겨울이 되면 너무 추워져서 가기가 힘들단 말이지. <br></br>
                                그럼에도 불구하고 난 여기하면 오빠랑 겨울에 여기를 산책했던 게 기억나긴 해 ㅎㅎ. <br></br>
                                오빠는 뭔가 랫서판다 뽑기에 실패한 것을 가장 먼저 떠올릴 거 같긴 한데 말이지…? <br></br>
                                사실 여기를 오면 나는 우리가 본격적으로 사귀기 전에, 하트 모양 터널을 지나갔던 게 가장 많이 생각 나. <br></br>
                                오빠랑 함께 여기를 거닐며 지나가면서, 뭔가 몽글몽글 했던 그 때의 감정이 아직도 기억 나거든. <br></br>
                                그 때 날씨가 겨울이라 조금 추웠었는데… 핫팩을 오빠가 대신 달궈주던 그 다정한 모습도 같이 생각나네. <br></br>
                                그래서 뭔가 그 떄 오빠 모습에 한 번 감동?이라고 해야 하나, 약간 설렜었던 거 같아. <br></br>
                                아마 그 때의 감정과 오빠의 그 다정한 모습은 나중에 나이 들어서도 계속 기억하지 않을까…
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
                            {moves.length < 6 &&
                                <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                                    <Button
                                        variant="light"
                                        style={{ textAlign: "center", width: "100%", marginTop: "2%", display: "block", margin: "auto" }}
                                        onClick={handleQuitClick}
                                    > 더 이상 이동하지 않고<br></br> 그녀에게 문자로 답장한다. </Button>
                                </Row>
                            }
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

                            {!moves.includes('오리배') && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goDuck}
                                    >
                                        오리배 타는 곳 방향으로 간다
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

export default Ship;
