import { useState } from "react";

const useMemoEditor = (selectedMemo, saveMemo, deleteMemo) => {
  const [content, setContent] = useState(selectedMemo?.content || "");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveMemo = () => {
    saveMemo(content);
  };

  const handleDeleteMemo = () => {
    deleteMemo(selectedMemo);
  };

  return {
    content,
    setContent,
    handleContentChange,
    handleSaveMemo,
    handleDeleteMemo,
  };
};

export default useMemoEditor;
