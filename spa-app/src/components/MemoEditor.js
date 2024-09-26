import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MemoEditor = ({
  selectedMemo,
  memos,
  setMemos,
  saveMemo,
  deleteMemo,
}) => {
  const [content, setContent] = useState(selectedMemo?.content || "");

  useEffect(() => {
    setContent(selectedMemo?.content || "");
  }, [selectedMemo]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveMemo = () => {
    const updatedMemo = { ...selectedMemo, content };
    const updatedMemos = memos.map((memo) =>
      memo.title === selectedMemo.title ? updatedMemo : memo,
    );
    setMemos(updatedMemos);
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
    saveMemo(content);
  };

  const handleDeleteMemo = () => {
    const updatedMemos = memos.filter(
      (memo) => memo.title !== selectedMemo.title,
    );
    setMemos(updatedMemos);
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
    deleteMemo();
  };

  return (
    <div className="memo-editor-container">
      <textarea
        className="memo-textarea"
        value={content}
        onChange={handleContentChange}
      />
      <div className="memo-editor-buttons">
        <button className="memo-edit-button" onClick={handleSaveMemo}>
          編集
        </button>
        <button className="memo-delete-button" onClick={handleDeleteMemo}>
          削除
        </button>
      </div>
    </div>
  );
};

MemoEditor.propTypes = {
  selectedMemo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setMemos: PropTypes.func.isRequired,
  saveMemo: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
};

export default MemoEditor;
