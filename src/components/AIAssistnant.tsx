import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messagesHistory, setMessagesHistory] = useState<
    { sender: "human" | "bot"; text: string }[]
  >([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const STORAGE_KEY = "ai-chat-history";

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessagesHistory(parsed);
      } catch (e) {
        console.error("Nie udało się wczytać historii czatu:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messagesHistory));
  }, [messagesHistory]);

  const handleAI = (message: string): string | null => {
    const lower = message.toLowerCase();

    if (lower.includes("słownik") || lower.includes("dictionary")) return "/dictionary";
    if (lower.includes("kurs") || lower.includes("nauka") || lower.includes("courses")) return "/courses";
    if (
      lower.includes("strona główna") ||
      lower.includes("start") ||
      lower.includes("main") ||
      lower.includes("home")
    )
      return "/";

    return null;
  };

  const generateBotResponse = (message: string): string => {
    const lower = message.toLowerCase();

    if (lower.includes("kim jesteś") || lower.includes("czym jesteś")) {
      return "Jestem AI Asystentem – pomagam ci w tej aplikacji.";
    }

    if (lower.includes("co robisz") || lower.includes("jaki masz cel")) {
      return "Pomagam ci nawigować i odpowiadam na pytania o funkcje aplikacji.";
    }

    if (lower.includes("hej") || lower.includes("cześć") || lower.includes("siema")) {
      return "Hejka! Jak mogę pomóc?";
    }

    return "Nie wiem jeszcze jak odpowiedzieć na to pytanie 😅";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: {sender: "human" | "bot"; text: string} = {
      sender: "human",
      text: inputValue
    }
    setMessagesHistory(prev => {
      const updated = [...prev, userMsg];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    setInputValue("");

    const targetRoute = handleAI(inputValue);

    setTimeout(() => {
      if (targetRoute) {
        navigate(targetRoute);

        const botMsg: {sender: "human" | "bot"; text: string} = {
          sender: "bot",
          text: `Przenoszę cię do: ${targetRoute}`,
        }
        setMessagesHistory(prev => {
          const updated = [...prev, botMsg];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
          return updated;
        });

      } else {
        const botMsg: { sender: "human" | "bot"; text: string } = {
          sender: "bot",
          text: generateBotResponse(inputValue),
        };

        setMessagesHistory((prev) => [...prev, botMsg]);
      }
    }, 700);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messagesHistory]);

  return (
    <>
      <div
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-700 transition"
        onClick={() => setOpen(!open)}
        title="AI Asystent"
      >
        🤖
      </div>

      {open && (
        <div className="fixed bottom-24 right-6 bg-white p-4 rounded shadow-md w-80 flex flex-col max-h-[500px]">
          <div className="flex-1 overflow-y-auto mb-2 pr-1 flex flex-col">
            <p className="text-gray-800 mb-2">Cześć! Napisz, gdzie mam cię przenieść 👇 (chwilowo dopiero powstaje i obsługuje tylko przenoszenie. Przepraszam)</p>
            {messagesHistory.map((msg, index) => (
              <p
                key={index}
                className={`text-sm py-1 px-2 rounded mb-1 max-w-[80%] ${
                  msg.sender === "human"
                    ? "bg-indigo-100 text-right self-end ml-auto"
                    : "bg-gray-100 text-left self-start"
                }`}
              >
                {msg.text}
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded"
              placeholder="Zadaj pytanie..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              onClick={handleSend}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
