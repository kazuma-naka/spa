import React from "react";
import PropTypes from "prop-types";

const MemoList = ({ memos, setSelectedMemo, addMemo }) => {
  return (
    <div className="memo-list-container">
      <ul className="memo-list">
        {memos.map((memo, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedMemo(memo);
              console.log(`title:${memo.title}\ncontent: ${memo.content}`);
            }}
            style={{ cursor: "pointer" }}
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
  addMemo: PropTypes.func.isRequired,
};

export default MemoList;
