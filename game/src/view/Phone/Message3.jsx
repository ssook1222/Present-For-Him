import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Message() {
    const [containerHeight, setContainerHeight] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const navigate = useNavigate();

    const handleNextClick = () => {
        // Add your logic here based on button click
        navigate("/msg4")
    };


    // 초기 말풍선 데이터
    const initialBalloons = {
        data: [
            { id: 1, text: "항상 우리 기념일 때, 내가 오빠한테 편지를 항상 아날로그 형태로 줬었잖아?", visible: true },
            { id: 2, text: "그래서 이번에는 조금 특별하게 디지털 형태로 줘보고 싶어서 이걸 기획해 봤어. ", visible: false },
            { id: 3, text: "여태까지 단 한 번도 받아보지 못한 형태의 선물이나 편지를 줘보고 싶었어서 말이야.", visible: false }
        ]
    };

    // 모달 텍스트 데이터
    const modalTexts = [
        "단 한 번도 받아보지 못한 형태의 선물이나 편지.",
        "그녀는 종종 기념일이나 생일 같은 날 선물을 줄 때에 ‘내가 받아보지 못한 선물’을 주고자 했다.",
        "이를테면 우리가 겪었던 일에 대한 만화나, 나를 캐릭터해서 그린 그림.",
        "심지어는 100일 매일 나에게 편지를 썼던 다이어리를 주기도 했다.",
        "그래서, 이번에는 어떤 형태일까?",
        "호기심이 생긴 나는 그녀의 문자를 계속 지켜보았다."
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
