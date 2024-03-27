import React, { useState }  from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import '../../../src/view/Ending.css'

function RealEnd() {
    // 도메인은 real-end으로 
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showText, setShowText] = useState(true);

    const navigate = useNavigate();

    const RealTexts = [
        "안녕, 오빠. 모든 곳을 돌아다니기에는 꽤 귀찮았을텐데… 그래도 내 말 듣고 다 가줘서 진심으로 고마워.",
        "오목교, 여의도, 광화문… 이 3곳은 1년 간의 시간 동안 오빠와 함께 지내며 내게 있어 가장 인상 깊었던 곳들이야.",
        "사실 영등포나 홍대, 숙대 같이 우리끼리 데이트를 자주하고 그만큼 추억이 많이 쌓인 곳은 그 외에도 있지만, ",
        "동상이몽이라는 말이 있듯, 같은 장소에서 같은 일을 하더라도 우리는 살아온 시간 동안 다른 것을 경험했기 때문에 느끼는 바가 다를 거잖아?",
        "그래서 이 장소들을 내가 왜 1년간 가장 인상 깊은 장소로 꼽았는지, ",
        "오빠랑 만났던 1년 여의 시간 동안 내가 그 장소에서 어떤 것을 인상 깊게 생각하고 있는지 조금이나마 파악하는 데 도움이 되었으면 좋겠어 ㅎㅎ",
        "1년이라는 시간이 길다면 길고, 짧다면 짧은 시간일 수 있겠지만 개인적으로는 사람을 변화시키기에 충분한 시간이라고 생각해.",
        "나만해도, 일단 외형적으로도 많이 바뀌었고 내면적으로도 많이 바뀌었거든.",
        "그런데 더 놀라운 건 앞으로는 이 1년이 아니라 평생을 오빠랑 함께 살아갈 거란 말이지?",
        "그 기간 동안 내가 얼마나 변화할 지, 오빠는 또 얼마나 바뀔지, 그리고 또 우리가 앞으로 마주할 세상은 어느 정도로 달라질 지!",
        "이 모든 것들을 우리가 함께 지켜볼 수 있다는 거에 감사하고 있어, 오빠.",
        "아 그리고, 마지막으로 나오는 엔딩 명을 진짜 전화나 문자로 말해주면 내가 따로 선물을 줄 거에용!",
        "기간은 24년 4월 12일(13일 넘어가기 전) 자정까지 : )"
    ];

    const goStart = () => {
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
                backgroundColor: "#FFE3EE",
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
                    <div className="end-text" style={{ color: "black", paddingLeft: "10px" }}>{RealTexts[communicationTextIndex]}</div>
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
                <Modal.Body style={{ margin: "auto" , width: "100%", marginTop: "50%", marginBottom:"50%"}}>
                    {showText && (
                        <>
                            <div style={{ padding: "2%", width: "100%", textAlign: "center" }}>
                                <h4>Normal Ending</h4>
                                <hr></hr>
                                <h5>총총이는 곰곰이를 사랑해💗</h5>
                                {/* 이미지 따로 넣기 */}
                                <image></image>
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

export default RealEnd;