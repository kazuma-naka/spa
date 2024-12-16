import { useState, useEffect } from "react";

const useMemoEditor = (selectedMemo, saveMemo, deleteMemo) => {
  const [content, setContent] = useState(selectedMemo?.content || "");

  useEffect(() => {
    setContent(selectedMemo?.content || "");
  }, [selectedMemo]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveMemo = () => {
    saveMemo(content);
  };

  const handleDeleteMemo = () => {
    deleteMemo();
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
