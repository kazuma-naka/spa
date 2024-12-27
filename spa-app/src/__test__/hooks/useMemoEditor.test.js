import { renderHook, act } from "@testing-library/react";
import useMemoEditor from "../../hooks/useMemoEditor";

describe("useMemoEditorのテスト", () => {
  let savedMemos = [];
  let deletedMemo = null;

  const saveMemo = (content) => {
    savedMemos.push(content);
  };

  const deleteMemo = (memo) => {
    deletedMemo = memo;
  };

  beforeEach(() => {
    savedMemos = [];
    deletedMemo = null;
  });

  afterEach(() => {
    savedMemos = [];
    deletedMemo = null;
  });

  it("初期状態でメモの内容をテスト", () => {
    const selectedMemo = { content: "初期メモの内容" };

    const { result } = renderHook(() =>
      useMemoEditor(selectedMemo, saveMemo, deleteMemo)
    );

    expect(result.current.content).toBe("初期メモの内容");
  });

  it("handleContentChange で内容が変更された場合、内容が正しく反映されるかテストする", () => {
    const selectedMemo = { content: "初期メモの内容" };

    const { result } = renderHook(() =>
      useMemoEditor(selectedMemo, saveMemo, deleteMemo)
    );

    act(() => {
      result.current.handleContentChange({
        target: { value: "更新されたメモの内容" },
      });
    });

    expect(result.current.content).toBe("更新されたメモの内容");
  });

  it("保存機能で正しい内容が保存される", () => {
    const selectedMemo = { content: "初期メモの内容" };

    const { result } = renderHook(() =>
      useMemoEditor(selectedMemo, saveMemo, deleteMemo)
    );

    act(() => {
      result.current.setContent("保存されたメモの内容");
    });

    act(() => {
      result.current.handleSaveMemo();
    });

    expect(savedMemos).toContain("保存されたメモの内容");
  });

  it("削除機能のテスト", () => {
    const selectedMemo = { content: "初期メモの内容" };

    const { result } = renderHook(() =>
      useMemoEditor(selectedMemo, saveMemo, deleteMemo)
    );

    act(() => {
      result.current.handleDeleteMemo();
    });

    expect(deletedMemo).toEqual(selectedMemo);
  });
});
