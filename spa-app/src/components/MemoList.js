import React from "react";
import PropTypes from "prop-types";

const MemoList = ({ memos, setSelectedMemo, addMemo }) => {
  return (
    <div className="memo-list-container">
      <h2 className="current-state">一覧</h2>
      <ul className="memo-list">
        {memos.map((memo, index) => (
          <li
            key={index}
            onClick={() => setSelectedMemo(memo)}
            style={{ cursor: "pointer" }}
          >
            {memo.title}
          </li>
        ))}
      </ul>
      <button onClick={() => addMemo("New Memo", "New memo content")}>+</button>
    </div>
  );
};

MemoList.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSelectedMemo: PropTypes.func.isRequired,
  addMemo: PropTypes.func.isRequired,
};

export default MemoList;
