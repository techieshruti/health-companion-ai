import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";
import ChatHeader from "../components/chat/ChatHeader";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";
import { suggestedQuestions, dummyAnswers } from "../data/chatData";
import BackgroundEffect from "../components/common/BackgroundEffect";

const Chat = () => {
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
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

  const sendMessage = () => {
    if (!input.trim()) return;

    askQuestion(input);

    setInput("");
  };

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
      setShowSuggestions(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: dummyAnswers[question] || "I'm still learning.",
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

        <div
          className={`overflow-hidden transition-all duration-300 ${
            showSuggestions
              ? "max-h-40 opacity-100 mb-2"
              : "max-h-0 opacity-0 mb-0"
          }`}
        >
          <SuggestedQuestions
            questions={suggestedQuestions}
            onSelect={askQuestion}
          />
        </div>

        {/* Chat Container */}

        <div className="mt-4 flex h-[560px] flex-col rounded-3xl border border-cyan-400/15 bg-slate-900/40 backdrop-blur-xl">
          {/* Scrollable Messages */}

          <div
            ref={messagesRef}
            className="modal-scrollbar flex-1 space-y-6 overflow-y-auto p-6"
          >
            <ChatMessages messages={messages} />

            {isTyping && (
              <div className="flex justify-start animate-[fadeUp_.25s_ease]">
                <div className="rounded-3xl border border-cyan-400/15 bg-slate-900 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                      <Bot size={18} className="text-white" />
                    </div>

                    <span className="text-lg font-semibold text-cyan-300">
                      AI
                    </span>
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Fixed Input */}

          <div className="border-t border-cyan-400/10 p-5">
            <ChatInput input={input} setInput={setInput} onSend={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
