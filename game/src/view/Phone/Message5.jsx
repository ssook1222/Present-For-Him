import React, { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Message() {
    const [containerHeight, setContainerHeight] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/msg5")
    };

    const goOmokgyo = () => {
        // Add your logic here based on button click
        navigate("/omokgyo")
    };

    const goGhm = () => {
        // Add your logic here based on button click
        navigate("/Ghm")
    };

    const goYyd = () => {
        navigate("/Yyd")
    };

    // 초기 말풍선 데이터
    const initialBalloons = {
        data: [
            { id: 1, text: "고마워, 오빠.", visible: true },
            { id: 2, text: "1년 간 오빠를 만나면서, 많은 추억들이 곳곳에 쌓여있더라고.", visible: false },
            { id: 3, text: "그 중에서 내게 가장 인상 깊었던 장소였던 곳에 가줄 수 있을까?", visible: false },
            { id: 4, text: "거기에 내가 주고자 하는 선물을 마련해 놨거든. 오빠라면 잘 알아챌 거라고 믿어.", visible: false }
        ]
    };

    // 모달 텍스트 데이터
    const modalTexts = [
        "이럴수가.",
        "너무 나에 대한 믿음이 강한 거 아냐? ",
        "해당 문자를 끝으로 더 이상 그녀에게서 연락이 오지 않는 것을 확인한 나는…",
    ];

    // 말풍선 상태 및 가시성 변경 함수
    const [balloons, setBalloons] = useState(initialBalloons);

    useEffect(() => {
        // 컨테이너의 높이를 말풍선 위치에 따라 동적으로 조정
        const maxHeight = Math.max(
            ...balloons.data.map((balloon) => {
                if (balloon.visible) {
                    const element = document.getElementById(`balloon-${balloon.id}`);
                    return element ? element.offsetTop + element.offsetHeight : 0;
                }
                return 0;
            })
        );
        setContainerHeight(maxHeight + 40); // 여유 공간 추가
    }, [balloons]);

    const handleClick = (id) => {
        const newData = balloons.data.map((balloon, index) => {
            if (id === balloons.data.length) {
                setShowModal(true);
            }
            if (balloon.id === id) {
                return { ...balloon, visible: true };
            } else if (index === id && index < balloons.data.length - 1) {
                return { ...balloon, visible: true };
            } else if (index < id && index < balloons.data.length - 1) {
                return { ...balloon, visible: true };
            } else if (id === balloons.data.length - 1) {
                // 클릭한 말풍선이 마지막 말풍선일 때 
                return { ...balloon, visible: true };
            }
            else {
                return { ...balloon, visible: false };
            }
        });
        setBalloons({ data: newData });
    };

    const handleNextModal = () => {
        if (modalIndex < modalTexts.length - 1) {
            setModalIndex(prevIndex => prevIndex + 1);
        }
        else if (modalIndex === modalTexts.length - 1) {
            // handleNextClick();
        }
        else {
            setShowModal(false);
            setModalIndex(0);
        }
    };

    return (
        <div style={{ height: "100vh", backgroundColor: "black" }}>
            <div style={{ padding: "20px", position: "relative", height: containerHeight }}>
                {balloons.data.map((balloon) => (
                    <div key={balloon.id}>
                        <div
                            id={`balloon-${balloon.id}`}
                            style={{
                                display: balloon.visible ? "block" : "none",
                                position: "relative" // 부모 요소의 position을 설정하여 자식 요소의 position을 조절할 수 있도록 함
                            }}
                            onClick={() => handleClick(balloon.id)} // 클릭 시 가시성 토글
                        >
                            <p style={{ color: "white" }}>CC</p>
                            <div
                                style={{
                                    backgroundColor: "#FFFA82",
                                    padding: "10px 30px 10px 10px",
                                    borderRadius: "10px",
                                    marginBottom: "1%",
                                }}
                            >
                                <p style={{ color: "black" }}>{balloon.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div 
                        class="msgModal"
                        style={{
                        width: "50%",
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <p class="modalText">{modalTexts[modalIndex]}</p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            {
                                modalIndex < modalTexts.length - 1 &&
                                <Button
                                    style={{ fontSize: "80%" }}
                                    variant="light"
                                    onClick={handleNextModal}>
                                    다음
                                </Button>
                            }

                            {
                                modalIndex === modalTexts.length - 1 &&
                                <div>
                                    <Row>
                                        <Button 
                                            style={{"width": "100%", marginBottom: "3%"}}
                                            variant="light"
                                            onClick={goOmokgyo}
                                        >
                                            오목교로 간다
                                        </Button>
                                    </Row>
                                    <Row>
                                        <Button 
                                            style={{"width": "100%", marginBottom: "3%"}}
                                            variant="light"
                                            onClick={goGhm}
                                        >
                                            광화문으로 간다
                                        </Button>
                                    </Row>
                                    <Row>
                                        <Button 
                                            style={{"width": "100%"}}
                                            variant="light"
                                            onClick={goYyd}
                                        >
                                            여의도로 간다
                                        </Button>
                                    </Row>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Message;
