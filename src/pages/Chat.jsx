import ChatHeader from "../components/chat/ChatHeader";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

import { useState } from "react";
import {
  suggestedQuestions,
  dummyAnswers,
} from "../data/chatData";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi 👋 I'm your AI Health Assistant. Ask me anything about your blood report.",
    },
  ]);

  const askQuestion = (question) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            dummyAnswers[question] ||
            "I'm still learning.",
        },
      ]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#071522] px-6 py-8">
      <div className="mx-auto max-w-5xl">

        <ChatHeader />

        <SuggestedQuestions
          questions={suggestedQuestions}
          onSelect={askQuestion}
        />

        <ChatMessages messages={messages} />

        <ChatInput />

      </div>
    </div>
  );
};

export default Chat;