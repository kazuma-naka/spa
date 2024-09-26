import React, { useState } from "react";
import MemoList from "./components/MemoList.js";
import MemoEditor from "./components/MemoEditor.js";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  const addMemo = (title, content) => {
    const newMemo = { title, content };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  };

  const saveMemo = () => {
    console.log("save memo button click");
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
      {selectedMemo && (
        <MemoEditor
          selectedMemo={selectedMemo}
          saveMemo={saveMemo}
          deleteMemo={deleteMemo}
        />
      )}
    </div>
  );
}

export default App;
