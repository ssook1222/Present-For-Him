import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function HDepartment() {
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showText, setShowText] = useState(true);
    const [showOtherChoice, setShowOtherChoice] = useState(false);
    const [moves, setMoves] = useState([]);

    const navigate = useNavigate();

    const RealTexts = [
        "오목교에 있는 더 현대 백화점으로 갔다.",
        "사실 오목교 근처에 사는 그녀와 놀기 위해 종종 이 곳을 방문하기도 했다.",
        "특히 이 곳 최상층에 있는 곳은 가끔 들러서 앉아있기에 적합한 곳이고, 야외 정원도 규모가 크지는 않지만 제대로 꾸며져 있어 가 볼만 했기 때문이다.",
        "그리고 지하에 있는 현대 식품관도 종종 방문했다.",
        "새로 나온 음료나, 과자, 음식들에 크게 관심이 있는 그녀를 따라 신상품들을 보는 것이 은근히 재밌었기 때문이다.",
        "마지막으로 식당 층. 식당 층은 많이 가보지는 못했으나, 부산 사람인 나를 보며 부산식 낙곱새 집을 데려갔었던 적이 있다.",
        "그렇게 더 현대 백화점을 이 곳 저 곳 둘러다 보며, 걷던 나는 식당 층에 있는 벤치에 놓여있는 그녀의 편지를 발견했다."
    ];

    const goSotdon = () => {
        // Add your logic here based on button click
        navigate("/Sotdon")
    };

    const goGhm = () => {
        // Add your logic here based on button click
        navigate("/Ghm")
    };

    const goYyd = () => {
        // Add your logic here based on button click
        navigate("/Yyd")
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
    };

    const handleContinueClick = () => {
        // 웹 스토리지에서 현재까지의 이동 기록을 가져옴
        const moves = JSON.parse(sessionStorage.getItem('moves')) || [];
    
        // HD를 이동 기록에 추가
        moves.push('현백');
    
        // 웹 스토리지에 업데이트된 이동 기록 저장
        sessionStorage.setItem('moves', JSON.stringify(moves));
        const newMoves = [...moves, '현백'];
        setMoves(newMoves);

        setShowOtherChoice(true);
    };

    const handleQuitClick = () => {
        // Implement your logic here
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
                                안녕, 오빠. 이 편지가 여기에 놓여있을 거라고 예상했나요? <br></br>
                                아무래도 카카오톡이나 팀즈 같은 메신저가 아니라 단순 편지이다 보니까 조금 어투가 딱딱해지니까 쓰는 나로써도 뭔가 어색하다. 음.. 이번에는 반말로 써볼까? <br></br>
                                여기는 그래도 오목교에서 데이트 한다고 치면 빠지지 않고 방문해서 종종 왔던 거 같아. <br></br>
                                먹을 것도 많고, 볼 것도 은근히 있고… 그래서 종종 데이트 코스 짜기 애매할 때는 여기로 왔었지. <br></br>
                                생각해보니까 크리스마스 이브였나, 크리스마스에도 여기 와서 데이트 하지 않았었나? <br></br>
                                영화는 물론 여기가 아니라 다른 곳에서 봤지만 영화 보러 가기 전에 잠깐 여기 들렀었던 기억이 나서! <br></br>
                                생각보다 우리 오목교에도 많은 추억이 있구나 싶네. <br></br>
                                사귀기 전에도 그렇고, 사귀고 나서도 그렇고…
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

                            <Row style={{ margin: "auto", width: "100%", marginTop: "5%" }}>
                                <Button
                                    variant="light"
                                    style={{ textAlign: "center", width: "100%", marginTop: "2%", display: "block", margin: "auto" }}
                                    onClick={handleContinueClick}
                                > 다른 곳도 가 본다. </Button>
                            </Row>
                        </>
                    )}

                    {showOtherChoice && (
                        <div>
                            <h4 style={{marginBottom:"2%"}}>어디로 갈까?</h4>
                            { (!moves.includes('서대문') || !moves.includes('광장')) && (
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

                            {!moves.includes('솥돈') && (
                                <Row>
                                    <Button
                                        style={{ "width": "100%", marginBottom: "3%" }}
                                        variant="light"
                                        onClick={goSotdon}
                                    >
                                        솥돈으로 간다
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

export default HDepartment;
