import React, { useState, useEffect } from "react";

function Message() {
    const [containerHeight, setContainerHeight] = useState(0);

    // 초기 말풍선 데이터
    const initialBalloons = {
        data: [
            { id: 1, text: "hello", visible: true },
            { id: 2, text: "hi", visible: false },
            { id: 3, text: "hello2", visible: false }
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
        const lastCharacter = id.toString().slice(-1); // 현재 아이디의 마지막 글자 추출
        const newId = parseInt(lastCharacter); // 숫자로 형변환
        const newData = balloons.data.map((balloon, index) => {
            if (balloon.id === id) {
                // 클릭한 말풍선부터 마지막까지의 가시성을 true로 설정
                const updatedBalloons = [...balloons.data];
                for (let i = index; i < updatedBalloons.length; i++) {
                    // 이미 visible한 말풍선은 pass
                    // updatedBalloons[i].id = newId;
                    if (updatedBalloons[i].visible) continue;
                    // 마지막 말풍선인 경우 예외 처리
                    if (i === updatedBalloons.length - 1){ 
                        updatedBalloons[i].visible = true;
                        break };
                    updatedBalloons[i].visible = true;
                    // console.log(updatedBalloons[i])
                }
                console.log(updatedBalloons)
                return updatedBalloons;
            }
            else{
                return balloon;
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
                        position: "absolute",
                        top: "20px",
                        left: "20px",
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
