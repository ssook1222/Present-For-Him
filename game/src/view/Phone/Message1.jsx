import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import './Msg.css'
function Message() {
    const [containerHeight, setContainerHeight] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const navigate = useNavigate();

    const handleNextClick = () => {
        // Add your logic here based on button click
        navigate("/msg2")
    };

    // 초기 말풍선 데이터
    const initialBalloons = {
        data: [
            { id: 1, text: "안녕, 오빠.", visible: true },
            { id: 2, text: "300일 때도 비슷한 말을 했던 거 같긴 한데, \r\n우리가 벌써 만난 지 1년이라니 너무 신기하지 않아? ", visible: false },
            { id: 3, text: "오빠는 이 메시지를 볼 때쯤이면, 여기에 회신을 못하겠지만", visible: false },
            { id: 4, text: "나는 이 텍스트를 오빠가 보고만 있는 걸로도 충분히 행복해.", visible: false }
        ]
    };

    // 모달 텍스트 데이터
    const modalTexts = [
        "나는 저 문자를 보고, 저기에 답장하고자 하였으나.",
        "무슨 일인지 입력 창이 뜨지 않아 아무런 답장도 할 수 없었다.",
        "아니, 나름 작년에 산 최신폰인데?",
        "이 상황이 무언가 잘못되었다고 생각한 나는 계속 날아오는 그녀의 문자를 볼 수 밖에 없었다."
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
            } else {
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
            handleNextClick();
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
                        <Button
                            style={{ fontSize: "80%" }}
                            variant="light"
                            onClick={handleNextModal}>
                            {modalIndex < modalTexts.length - 1 ? '다음' : '닫기'}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Message;
