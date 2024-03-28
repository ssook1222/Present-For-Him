import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import '../../../src/view/Ending.css'

function Ending3() {
    // 도메인은 end3으로 
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showText, setShowText] = useState(true);

    const navigate = useNavigate();

    const RealTexts = [
        "갑자기 핸드폰 화면이 켜져서 핸드폰을 보니, 그녀에게서 전화가 오고 있었다.",
        "급하게 전화를 받으니 수화기 너머에서 그녀의 목소리가 들렸다.",
        "오빠, 오늘 내가 준비한 선물은 어땠어? 각 장소마다 담겨 있는 나의 감정들을 오빠가 직접 가서 느껴봤으면 해서 이렇게 준비해봤어.",
        "동상이몽이라는 말이 있는 것처럼 사실 같은 장소라고 해도 우리 둘이 생각하는 것과 시선이 다르니까,",
        "나한테는 굉장한 추억이자 소중하게 간직하고 싶은 순간일 수 있는데, 오빠한테는 또 아닐 수도 있잖아?",
        "그래서 나는 오빠한테 이러한 차이에서부터 오는 그런 간극을 조금 메꿔보고자 이번 1주년 이벤트로 이런 걸 준비해봤어.",
        "같은 장소, 같은 순간에 있었지만 나는 그 순간에 이런 것들이 더 인상에 남았다! 같은 것을 알려주고 싶었거든 ㅎㅎ",
        "물론 오빠가 모든 곳을 다 다녀온 것은 아니지만, 그래도 한 곳이라도 가서 내가 느꼈던 감정들을 함께 느껴줬다는 것에 고마워.",
        "앞으로도, 아니 평생이 되려나? 오빠와 평생 같이 살면서 느끼는 차이가 있을텐데 이번처럼 잘 메꿔보면서 함께 살아봐요 힣",
        "그녀의 와르르 쏟아지듯이 내뱉는 말을 들으며 미리 써 온 편지를 낭독하는 것이 아닌가 하는 생각이 들었다.",
        "하지만, 그녀의 마지막 프로포즈 같은 말에 함박 웃음을 지으며 말했다.",
        "“지금 어디에요? 내가 그 쪽으로 갈게.”"
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
                backgroundColor: "#D5C2EE",
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
                    <div
                        className="end-text"
                        style={{ color: "black", paddingLeft: "10px" }}>{RealTexts[communicationTextIndex]}</div>
                    <Button
                        className="end-bt"
                        variant="dark"
                        style={{ padding: "10px 20px", borderRadius: "5px" }}
                        onClick={handleNextClick}
                    >
                        →
                    </Button>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body style={{ margin: "auto", width: "100%", marginTop: "50%", marginBottom: "50%" }}>
                    {showText && (
                        <>
                            <div style={{ padding: "2%", width: "100%", textAlign: "center" }}>
                                <h4>Normal Ending</h4>
                                <hr></hr>
                                <h5>끈기가 조금만 더 있었더라면...!</h5>

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

export default Ending3;