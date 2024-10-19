import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/AuthProvider.js";

const MemoList = ({
  memos,
  setMemos,
  setSelectedMemo,
  selectedMemo,
  addMemo,
}) => {
  useEffect(() => {
    const storedMemos = JSON.parse(localStorage.getItem("memos")) || [];
    setMemos(storedMemos);
  }, [setMemos]);
  const { isLoggedIn } = useAuth();
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
      <button
        onClick={() => {
          if (isLoggedIn) {
            addMemo("新規メモ", memos);
          }
        }}
      >
        +
      </button>
    </div>
  );
};

MemoList.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setMemos: PropTypes.func.isRequired,
  setSelectedMemo: PropTypes.func.isRequired,
  selectedMemo: PropTypes.object,
  addMemo: PropTypes.func.isRequired,
};

export default MemoList;
