import React, { useState } from "react";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return; // 빈 메시지는 추가하지 않음

    // 이전 채팅 기록과 새로운 메시지를 합쳐서 업데이트
    setChatHistory([...chatHistory, message]);

    // 메시지 입력란 초기화
    setMessage("");
  };

  return (
    <div>
      <div
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        {/* 채팅 기록 표시 */}
        {chatHistory.map((chat, index) => (
          <div key={index}>{chat}</div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        {/* 메시지 입력란 */}
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요"
        />
        {/* 전송 버튼 */}
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default ChatForm;
