import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/AuthProvider.js";

const MemoEditor = ({ selectedMemo, saveMemo, deleteMemo }) => {
  const [content, setContent] = useState(selectedMemo?.content || "");
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    setContent(selectedMemo?.content || "");
  }, [selectedMemo]);

  const handleContentChange = (e) => {
    if (isLoggedIn) {
      setContent(e.target.value);
    }
  };

  const handleSaveMemo = () => {
    if (isLoggedIn) {
      saveMemo(content);
    }
  };

  const handleDeleteMemo = () => {
    if (isLoggedIn) {
      deleteMemo();
    }
  };

  return (
    <div className="memo-editor-container">
      <textarea
        className="memo-textarea"
        value={content}
        onChange={handleContentChange}
      />
      <div className="memo-editor-buttons">
        <button
          className="memo-edit-button"
          onClick={() => {
            handleSaveMemo();
          }}
        >
          編集
        </button>
        <button
          className="memo-delete-button"
          onClick={() => {
            handleDeleteMemo();
          }}
        >
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
  saveMemo: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
};

export default MemoEditor;
