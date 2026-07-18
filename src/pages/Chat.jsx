import { useEffect, useRef, useState } from "react";

import ChatHeader from "../components/chat/ChatHeader";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

import {
  suggestedQuestions,
  dummyAnswers,
} from "../data/chatData";

import BackgroundEffect from "../components/common/BackgroundEffect";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: `Hi! 👋 I'm your AI Health Assistant.

I've analyzed your blood report and I'm here to explain your results in simple language.

You can ask me about:

• Abnormal values
• Diet
• Lifestyle
• Medications
• Improving your health score`,
      time: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const askQuestion = (question) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
        time: new Date(),
      },
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            dummyAnswers[question] ||
            "I'm still learning.",
          time: new Date(),
        },
      ]);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#071522] px-6 py-8">

      <BackgroundEffect variant="chat" />

      <div className="relative z-10 mx-auto max-w-5xl">

        <ChatHeader />

        <SuggestedQuestions
          questions={suggestedQuestions}
          onSelect={askQuestion}
        />

        {/* Chat Container */}

        <div className="mt-8 flex h-[560px] flex-col rounded-3xl border border-cyan-400/15 bg-slate-900/40 backdrop-blur-xl">

          {/* Scrollable Messages */}

          <div
            ref={messagesRef}
            className="flex-1 space-y-6 overflow-y-auto p-6"
          >

            <ChatMessages messages={messages} />

            {isTyping && (
              <div className="rounded-2xl border border-cyan-400/10 bg-slate-900 px-5 py-4 text-slate-300">
                AI is analyzing your report...
              </div>
            )}

          </div>

          {/* Fixed Input */}

          <div className="border-t border-cyan-400/10 p-5">
            <ChatInput />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Chat;