import React from "react";
import PropTypes from "prop-types";

const MemoEditor = ({ selectedMemo, saveMemo, deleteMemo }) => {
  return (
    <div className="memo-editor-container">
      <textarea className="memo-textarea" value={selectedMemo?.content || ""} />
      <div className="memo-editor-buttons">
        <button className="memo-edit-button" onClick={() => saveMemo()}>
          編集
        </button>
        <button className="memo-delete-button" onClick={deleteMemo}>
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
