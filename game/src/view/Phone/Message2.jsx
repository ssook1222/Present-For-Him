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
        navigate("/msg2")
    };


    // 초기 말풍선 데이터
    const initialBalloons = {
        data: [
            { id: 1, text: "이 문자에 답장하려고?", visible: true },
            { id: 2, text: "미안하지만, 그렇게까지 하기엔 내가 개발 실력이 뛰어나질 못해. ", visible: false },
            { id: 3, text: "양방향 소통을 할 수 있게끔 구현하기에는 시간도 꽤 부족하고…", visible: false },
            { id: 4, text: "아, 계속 서론이 길어지네. 미안해.", visible: false }
        ]
    };

    // 모달 텍스트 데이터
    const modalTexts = [
        "음… 나와 내 여자친구는 둘 다 개발자이다.",
        "그러다 보니 종종 개발 관련한 이야기를 할 때도 있다.",
        "그런데 웃긴 것이 어느 때는 이런 개발 이야기를 해서 통하는 게 많다고 좋아하는데 ",
        "또 어느 때는 개발 이야기를 하면, 일하고 왔는데 일의 연장선 같다고 엄청 싫어한다.",
        "어느 장단에 맞추라는 건지…"
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
        } else {
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
                    <div style={{
                        width: "50%",
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <p>{modalTexts[modalIndex]}</p>
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
