import React, { useState, useEffect, useCallback } from "react";
import MemoList from "./components/MemoList.js";
import MemoEditor from "./components/MemoEditor.js";
import AuthButton from "./components/AuthButton.js";
import { AuthProvider, useAuth } from "./hooks/AuthProvider.js";
import "./App.css";
import String from "./String.js";

function AppContent() {
  const { isLoggedIn } = useAuth();
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  useEffect(() => {
    const storedMemos = JSON.parse(localStorage.getItem("memos")) || [];
    setMemos(storedMemos);
  }, []);

  useEffect(() => {
    if (memos.length > 0) {
      localStorage.setItem("memos", JSON.stringify(memos));
    }
  }, [memos]);

  const addMemo = useCallback(
    (content) => {
      const title = String.uniqueTitle(content, memos);
      const newMemo = { title, content };
      setMemos((prevMemos) => [...prevMemos, newMemo]);
      setSelectedMemo(newMemo);
    },
    [memos]
  );

  const saveMemo = useCallback(
    (newContent) => {
      const newTitle = String.uniqueTitle(newContent, memos);
      const updatedMemo = {
        ...selectedMemo,
        title: newTitle,
        content: newContent,
      };
      const updatedMemos = memos.map((memo) =>
        memo === selectedMemo ? updatedMemo : memo
      );
      setMemos(updatedMemos);
      setSelectedMemo(updatedMemo);
    },
    [memos, selectedMemo]
  );

  const deleteMemo = useCallback(() => {
    setMemos(memos.filter((memo) => memo !== selectedMemo));
    setSelectedMemo(null);
  }, [memos, selectedMemo]);

  return (
    <div className="app-area">
      <div className="status-text-parent">
        <h2 className="status-text">
          {isLoggedIn ? "ログイン済" : "未ログイン"}
        </h2>
      </div>
      <div className="app-container">
        <MemoList
          memos={memos}
          setMemos={setMemos}
          selectedMemo={selectedMemo}
          setSelectedMemo={setSelectedMemo}
          addMemo={addMemo}
        />
        <div className="memoeditor-and-authbutton-parent">
          <AuthButton />
          {selectedMemo && (
            <MemoEditor
              selectedMemo={selectedMemo}
              saveMemo={saveMemo}
              deleteMemo={deleteMemo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
