import React from "react";
import PropTypes from "prop-types";

const MemoList = ({ memos, setSelectedMemo, selectedMemo, addMemo }) => {
  return (
    <div className="memo-list-container">
      <ul className="memo-list">
        {memos.map((memo, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedMemo(memo);
            }}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedMemo === memo ? "#4b4f57" : "transparent",
              color: selectedMemo === memo ? "white" : "#ccc",
              padding: selectedMemo === memo ? "1px" : "4px",
            }}
          >
            {memo.title}
          </li>
        ))}
      </ul>
      <button onClick={() => addMemo("新規メモ", memos)}>+</button>
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
  selectedMemo: PropTypes.object,
  addMemo: PropTypes.func.isRequired,
};

export default MemoList;
