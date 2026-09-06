"use client";
import { useState, useRef, useEffect } from "react";

const whoamiText = `Adrian Akhuya
Full Stack Developer

Building modern web, backend,
and mobile experiences.`;

const aboutText = `Adrian Akhuya
Full Stack Developer

Passionate about building products that matter.
Clean code, thoughtful design, continuous learning.`;

const stackText = `Frontend
  React · Next.js · TypeScript · JavaScript

Backend
  Node.js · Python · Flask

Database
  PostgreSQL · MongoDB · SQLite

Mobile
  Flutter · Dart`;

const projectsData = [
  { id: "1", title: "TinyNest", description: "An interactive early learning platform designed to make early learning engaging.", stack: "Flutter · Dart · Flask · PostgreSQL" },
  { id: "2", title: "Bug Hunter", description: "A game that teaches programming concepts by identifying and fixing bugs.", stack: "React · Node.js · MongoDB · Socket.io" },
  { id: "3", title: "Portfolio Website", description: "The very site you're viewing — a personal brand built with modern tools.", stack: "Next.js · TypeScript · Tailwind CSS · Framer Motion" },
];

const commands = ["whoami", "about", "stack", "projects", "status", "contact", "clear", "help", "sudo hire adrian", "coffee", "hello"];

function SyntaxHighlight({ text }: { text: string }) {
  const parts = text.split(/(\s+)/);
  return (
    <>
      {parts.map((part, i) => {
        if (part === "const" || part === "function" || part === "return" || part === "if" || part === "else") {
          return <span key={i} style={{ color: "#C586C0" }}>{part}</span>;
        } else if (part === "=>" || part === "===" || part === "&&" || part === "||") {
          return <span key={i} style={{ color: "#569CD6" }}>{part}</span>;
        } else if (part.startsWith('"') || part.startsWith("'")) {
          return <span key={i} style={{ color: "#CE9178" }}>{part}</span>;
        } else if (/^\d+$/.test(part)) {
          return <span key={i} style={{ color: "#B5CEA8" }}>{part}</span>;
        } else if (part === "true" || part === "false" || part === "null") {
          return <span key={i} style={{ color: "#569CD6" }}>{part}</span>;
        }
        return <span key={i} style={{ color: "#D4D4D4" }}>{part}</span>;
      })}
    </>
  );
}

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: "output", text: "// Welcome to Adrian's terminal." },
    { type: "output", text: "// Curious? Type 'help'." },
  ]);
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [history]);

  const levenshtein = (a: string, b: string) => {
    const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) dp[i][0] = i;
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
      }
    }
    return dp[a.length][b.length];
  };

  const findClosestCommand = (cmd: string) => {
    let closest = "";
    let minDist = 3;
    for (const c of commands) {
      const dist = levenshtein(cmd, c);
      if (dist < minDist) {
        minDist = dist;
        closest = c;
      }
    }
    return closest;
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output = "";
    let type = "output";

    switch (trimmed) {
      case "whoami":
        output = whoamiText;
        break;
      case "about":
        output = aboutText;
        break;
      case "stack":
        output = stackText;
        break;
      case "projects":
        output = projectsData.map(p => `${p.id.padStart(2, '0')}  ${p.title}\n    ${p.stack}`).join("\n\n") + '\n\nType "open 1" to explore a project.';
        break;
      case "status":
        output = `● AVAILABLE FOR OPPORTUNITIES

Open to:

  → Freelance projects
  → Collaborations
  → Full Stack Developer roles`;
        type = "success";
        break;
      case "contact":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        output = "// Scrolling to Contact section...";
        break;
      case "clear":
        setHistory([]);
        return;
      case "help":
        output = `Available commands:

  whoami     Quick introduction
  about      About Adrian
  stack      Technologies I work with
  projects   Explore my work
  status     Current availability
  contact    Get in touch
  clear      Clear terminal

Developer shortcuts:

  sudo hire adrian
  coffee
  hello`;
        break;
      case "sudo hire adrian":
        output = `// Checking availability...
// Access granted ✓
// Opening communication channels...`;
        type = "success";
        setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 600);
        break;
      case "coffee":
        output = "Fuel level restored. Ready to code.";
        type = "success";
        break;
      case "hello":
        output = `Hello

// Thanks for stopping by.
// Let's build something useful.`;
        break;
      default:
        if (trimmed.startsWith("open ")) {
          const id = trimmed.split(" ")[1];
          const project = projectsData.find(p => p.id === id);
          if (project) {
            output = `${project.title}
────────────────────────

${project.description}

Stack:
${project.stack}

Status:
● Currently building`;
          } else {
            output = `Project not found: ${id}. Use "projects" to see available projects.`;
            type = "error";
          }
        } else {
          const suggestion = findClosestCommand(trimmed);
          output = `Command not found: ${trimmed}.`;
          if (suggestion) output += `\n\nDid you mean:\n→ ${suggestion}`;
          type = "error";
        }
    }

    setHistory(prev => [...prev, { type: "input", text: cmd }, { type, text: output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      setCommandHistory(prev => [...prev, input.trim()]);
      setHistoryIndex(-1);
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      const match = commands.find(c => c.startsWith(partial));
      if (match) setInput(match);
    }
  };

  const renderOutput = (text: string) => {
    return text.split("\n").map((line, i) => (
      <div key={i}>{line || "\u00A0"}</div>
    ));
  };

  return (
    <section className="py-20 px-4 md:px-6 relative z-10 bg-onyx/80">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#1E1E1E] border border-[#333] rounded-xl overflow-hidden shadow-2xl font-mono text-xs md:text-sm cursor-text" onClick={() => inputRef.current?.focus()}>
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2D2D] border-b border-[#333]">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-[#858585] text-xs">guest@adrian.dev: ~/portfolio</span>
          </div>

          {/* Terminal body */}
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto" ref={containerRef}>
            {history.map((entry, i) => (
              <div key={i}>
                {entry.type === "input" ? (
                  <div className="text-[#569CD6] whitespace-pre-wrap">
                    <span style={{ color: '#858585' }}>❯ </span>
                    <SyntaxHighlight text={entry.text} />
                  </div>
                ) : entry.type === "success" ? (
                  <div className="text-[#6A9955] whitespace-pre-wrap">{renderOutput(entry.text)}</div>
                ) : entry.type === "error" ? (
                  <div className="text-[#F44747] whitespace-pre-wrap">{entry.text}</div>
                ) : (
                  <div className="text-[#D4D4D4] whitespace-pre-wrap">
                    <SyntaxHighlight text={entry.text} />
                  </div>
                )}
              </div>
            ))}

            {/* Active input line */}
            <div className="flex items-center text-[#569CD6]">
              <span className="mr-2" style={{ color: '#858585' }}>❯</span>
              <input
                ref={inputRef}
                id="terminal-input"
                name="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-[#D4D4D4] font-mono text-xs md:text-sm placeholder-[#6E6E6E]"
                placeholder="Type a command..."
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
