import React, { useState, useEffect } from "react";

function Message() {
    const [containerHeight, setContainerHeight] = useState(0);

    // 초기 말풍선 데이터
    const initialBalloons = {
        data: [
            { id: 1, text: "hello", visible: true },
            { id: 2, text: "hi", visible: false },
            { id: 3, text: "hello2", visible: false },
            { id: 4, text: "test", visible: false }
        ]
    };

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
            if (balloon.id === id) {
                return { ...balloon, visible: true };
            } else if (index === id && index < balloons.data.length - 1) {
                // 클릭한 말풍선의 다음 말풍선만 가시성을 변경
                return { ...balloon, visible: true };
            } else if (index < id && index < balloons.data.length - 1) {
                // 기존 말풍선 가시성 유지
                return { ...balloon, visible: true };
            } else if (id === balloons.data.length - 1) {
                // 마지막 말풍선일 때 true로 유지
                return { ...balloon, visible: true };
            } 
             else {
                return { ...balloon, visible: false };
            }
        });
        setBalloons({ data: newData });
    };
    

    return (
        <div style={{ backgroundColor: "black", padding: "20px", position: "relative", height: containerHeight }}>
            {balloons.data.map((balloon) => (
                <div
                    key={balloon.id}
                    id={`balloon-${balloon.id}`}
                    style={{
                        backgroundColor: "#FFFA82",
                        padding: "10px",
                        display: balloon.visible ? "block" : "none"
                    }}
                    onClick={() => handleClick(balloon.id)} // 클릭 시 가시성 토글
                >
                    <p style={{ color: "black" }}>{balloon.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Message;
