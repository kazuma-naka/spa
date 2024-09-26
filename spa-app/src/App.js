import React, { useState } from "react";
import MemoList from "./components/MemoList.js";
import MemoEditor from "./components/MemoEditor.js";
import "./App.css";
import String from "./String.js";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  const addMemo = (content) => {
    const title = String.uniqueTitle(content, memos);
    const newMemo = { title, content };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  };

  const saveMemo = (newContent) => {
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
  };

  const deleteMemo = () => {
    setMemos(memos.filter((memo) => memo !== selectedMemo));
    setSelectedMemo(null);
  };

  return (
    <div className="app-area">
      <div className="status-text-parent">
        <h2 className="status-text">
          {selectedMemo ? `編集 ${selectedMemo.title}` : "一覧"}
        </h2>
      </div>
      <div className="app-container">
        <MemoList
          memos={memos}
          setSelectedMemo={setSelectedMemo}
          addMemo={addMemo}
        />
        {selectedMemo && (
          <MemoEditor
            selectedMemo={selectedMemo}
            saveMemo={saveMemo}
            deleteMemo={deleteMemo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
