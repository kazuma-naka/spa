import React, { useState } from "react";
import MemoList from "./components/MemoList.js";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  const addMemo = (title, content) => {
    const newMemo = { title, content };
    setMemos([...memos, newMemo]);
  };

  const editMemo = (newContent) => {
    setMemos(
      memos.map((memo) =>
        memo === selectedMemo ? { ...memo, content: newContent } : memo
      )
    );
  };

  const deleteMemo = () => {
    setMemos(memos.filter((memo) => memo !== selectedMemo));
    setSelectedMemo(null);
  };

  return (
    <div className="app-container">
      <MemoList
        memos={memos}
        setSelectedMemo={setSelectedMemo}
        addMemo={addMemo}
      />
    </div>
  );
}

export default App;
