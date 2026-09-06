"use client";
import { useEffect, useState } from "react";

interface Props {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function TypingText({
  words,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: Props) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, deletingSpeed);
    } else if (text.length === currentWord.length && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (text.length === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse ml-1 font-light text-candy-blue">|</span>
    </span>
  );
}
