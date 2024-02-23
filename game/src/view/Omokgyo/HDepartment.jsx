import React, { useState } from "react";
import { Button, Row, Modal } from "react-bootstrap";

function HDepartment() {
    const [communicationTextIndex, setCommunicationTextIndex] = useState(0);

    const RealTexts = [
        "오목교에 있는 더 현대 백화점으로 갔다.",
        "사실 오목교 근처에 사는 그녀와 놀기 위해 종종 이 곳을 방문하기도 했다.",
        "특히 이 곳 최상층에 있는 곳은 가끔 들러서 앉아있기에 적합한 곳이고, ",
        "야외 정원도 규모가 크지는 않지만 제대로 꾸며져 있어 가 볼만 했기 때문이다.",
        "그리고 지하에 있는 현대 식품관도 종종 방문했다.",
        "새로 나온 음료나, 과자, 음식들에 크게 관심이 있는 그녀를 따라 신상품들을 보는 것이 은근히 재밌었기 때문이다.",
        "마지막으로 식당 층. 식당 층은 많이 가보지는 못했으나, ",
        "부산 사람인 나를 보며 부산식 낙곱새 집을 데려갔었던 적이 있다. ",
        "그렇게 더 현대 백화점을 이 곳 저 곳 둘러다 보며, 걷던 나는 식당 층에 있는 벤치에 놓여있는 그녀의 편지를 발견했다."
    ];

    const handleNextClick = () => {
            setCommunicationTextIndex(prevIndex => prevIndex + 1);
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
        </>
    );
}

export default HDepartment;
