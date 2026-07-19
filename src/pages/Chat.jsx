import { useEffect, useRef, useState } from "react";
import PageTransition from "../components/common/PageTransition";
import { Bot } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";
import { suggestedQuestions } from "../data/chatData";
import { askHealthAssistant } from "../services/chatAI";
import { useReport } from "../context/ReportContext";
import BackgroundEffect from "../components/common/BackgroundEffect";

const streamText = async (text, onUpdate) => {
  const words = text.split(" ");

  let currentText = "";

  for (let i = 0; i < words.length; i++) {
    currentText += words[i] + " ";

    onUpdate(currentText);

    await new Promise((resolve) => setTimeout(resolve, 50));
  }
};

const Chat = () => {
  const { report } = useReport();
  const chatContainerRef = useRef(null);
  console.log("Report Context:", report);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: `Hi! 👋 I'm your AI Health Assistant.

Ask me anything about your health report.
Try asking:
• Why is my Vitamin D low?
• What should I improve first?
• Explain my abnormal results.`,
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
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
  messagesRef.current?.scrollTo({
    top: messagesRef.current.scrollHeight,
    behavior: "smooth",
  });

  if (window.innerWidth < 1024) {
    setTimeout(() => {
      chatContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }
}, [messages]);

  const askQuestion = async (question) => {
    messagesRef.current?.scrollTo({
  top: messagesRef.current.scrollHeight,
  behavior: "smooth",
});
    const updatedMessages = [
      ...messages,
      {
        role: "user",
        text: question,
        time: new Date(),
      },
    ];

    // Immediately show user message
    setMessages(updatedMessages);
setTimeout(() => {
  chatContainerRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  messagesRef.current?.scrollTo({
    top: messagesRef.current.scrollHeight,
    behavior: "smooth",
  });
}, 100);
    setIsTyping(true);

    try {
      const answer = await askHealthAssistant(report, updatedMessages);

      // Add empty assistant message
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text: "",
          time: new Date(),
        },
      ]);

      // Hide typing indicator
      setIsTyping(false);

      // Animate the answer
      await streamText(answer, (partialText) => {
        setMessages([
          ...updatedMessages,
          {
            role: "assistant",
            text: partialText,
            time: new Date(),
          },
        ]);
      });
    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text: "Sorry, I couldn't analyze your question.",
          time: new Date(),
        },
      ]);
    } finally {
    }
  };

  return (
    <PageTransition>
    <div className="relative  min-h-screen bg-[#07131F] px-6 py-8">
      <BackgroundEffect variant="chat" />

      <div className="relative z-10 mx-auto max-w-7xl">
       <PageHeader
  title="AI Health Assistant"
  description="Ask anything about your uploaded health report in simple, easy-to-understand language."
  backText="Back to Report"
  backTo="/report-details"
/>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* left section */}
          <div className="space-y-6 lg:col-span-4">
            {/* Report Summary */}

            <div className="mb-4 rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-4 backdrop-blur-xl">
              <h3 className="mb-3 text-lg font-semibold text-cyan-300">
                Uploaded Report
              </h3>

              <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <p className="text-slate-400">Patient</p>
                  <p>{report?.patient?.name}</p>
                </div>

                <div>
                  <p className="text-slate-400">Health Score</p>
                  <p>{report?.summary?.healthScore}/100</p>
                </div>

                <div>
                  <p className="text-slate-400">Tests</p>
                  <p>{report?.summary?.totalTests}</p>
                </div>

                <div>
                  <p className="text-slate-400">Need Attention</p>
                  <p>{report?.summary?.high + report?.summary?.low}</p>
                </div>
              </div>
            </div>

            {/* Suggestion */}
            <div className={`overflow-hidden ...`}></div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                showSuggestions
                  ? "max-h-screen opacity-100 mb-2"
                  : "max-h-0 opacity-0 mb-0"
              }`}
            >
              <SuggestedQuestions
                questions={suggestedQuestions}
                onSelect={askQuestion}
              />
            </div>
          </div>
          {/* Right section */}
          <div className="lg:col-span-8">
            {/* Chat Container */}

            <div ref={chatContainerRef} className="mt-1 flex h-[65vh] min-h-[500px] lg:h-[650px] flex-col rounded-3xl border border-cyan-400/15 bg-slate-900/40 backdrop-blur-xl">
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
                <ChatInput
                  input={input}
                  setInput={setInput}
                  onSend={sendMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Chat;
