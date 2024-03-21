import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Message() {
    const [containerHeight, setContainerHeight] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [modalTextIndex, setModalTextIndex] = useState(0);
    const [modalText, setModalText] = useState("");
    const [showNextButton, setShowNextButton] = useState(false);

    const navigate = useNavigate();

    const handleNextModal = () => {
        console.log(modalTextIndex)
        if (modalTextIndex === 0) {
            setModalTextIndex(1);
            setShowNextButton(true);
        } 
        else if (modalTextIndex === 1){
            setShowNextButton(true);
            handleFinalYesClick();
        }
        else {
            setShowModal(false);
            setShowNextButton(false);
        }
    };

    const handleYesClick = () => {
        if (modalIndex === 0) {
            setModalText(modalTexts2[0]);
            setModalIndex(1);
        } else {
            handleNextModal();
        }
    };

    const handleNoClick = () => {
        navigate("/ed2");
    };

    const handleFinalYesClick = () => {
        navigate("/msg5");
    };

    const initialBalloons = {
        data: [
            { id: 1, text: "그래서 말인데, 이번에 주려는 거는 조금 특별해서 오빠가 조금 나를 도와줘야 되는 게 있어.", visible: true },
            { id: 2, text: "나를 도와줄 수 있을까?", visible: false }
        ]
    };

    const modalTexts = [
        "그녀를 도와주시겠습니까?"
    ];

    const modalTexts2 = [
        "이상하다. 이럴 때만 단답형으로 답장을 할 수 있단 말이지?",
        "이쯤되면 그녀가 답정너가 아닌가 싶지만, 주려고 하는 선물이 궁금해서 예라고 응답했다."
    ];

    const [balloons, setBalloons] = useState(initialBalloons);

    useEffect(() => {
        const maxHeight = Math.max(
            ...balloons.data.map((balloon) => {
                if (balloon.visible) {
                    const element = document.getElementById(`balloon-${balloon.id}`);
                    return element ? element.offsetTop + element.offsetHeight : 0;
                }
                return 0;
            })
        );
        setContainerHeight(maxHeight + 40);
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
                return { ...balloon, visible: true };
            } else {
                return { ...balloon, visible: false };
            }
        });
        setBalloons({ data: newData });
    };

    useEffect(() => {
        setModalText(modalIndex === 0 ? modalTexts[0] : modalTexts2[modalTextIndex]);
        setShowNextButton(modalIndex === 1 && modalTextIndex <= modalTexts2.length - 1);
    }, [modalIndex, modalTextIndex]);

    return (
        <div style={{ height: "100vh", backgroundColor: "black" }}>
            <div style={{ padding: "20px", position: "relative", height: containerHeight }}>
                {balloons.data.map((balloon) => (
                    <div key={balloon.id}>
                        <div
                            id={`balloon-${balloon.id}`}
                            style={{
                                display: balloon.visible ? "block" : "none",
                                position: "relative"
                            }}
                            onClick={() => handleClick(balloon.id)}
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
                    <div style={{
                        width: "50%",
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <p>{modalText}</p>
                        {showNextButton && (
                            <Button
                                style={{ fontSize: "80%" }}
                                variant="light"
                                onClick={handleNextModal}>
                                다음
                            </Button>
                        )}
                        {!showNextButton && (
                            <div>
                                <Button
                                    style={{ fontSize: "80%", marginRight: '10px' }}
                                    variant="light"
                                    onClick={handleYesClick}>
                                    예
                                </Button>
                                <Button
                                    style={{ fontSize: "80%" }}
                                    variant="light"
                                    onClick={handleNoClick}>
                                    아니오
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Message;
