import React from "react";
import PropTypes from "prop-types";
import useMemoEditor from "../hooks/useMemoEditor.js";

const MemoEditor = ({ selectedMemo, saveMemo, deleteMemo }) => {
  const {
    content,
    handleContentChange,
    handleSaveMemo,
    handleDeleteMemo,
  } = useMemoEditor(selectedMemo, saveMemo, deleteMemo);

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
  saveMemo: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
};

export default MemoEditor;
