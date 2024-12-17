import { renderHook, act } from '@testing-library/react';
import useMemoEditor from '../../hooks/useMemoEditor';

describe('useMemoEditor', () => {
  let saveMemoMock;
  let deleteMemoMock;

  beforeEach(() => {
    saveMemoMock = jest.fn();
    deleteMemoMock = jest.fn();
  });

  it('should initialize with the selectedMemo content', () => {
    const selectedMemo = { content: 'Initial memo content' };

    const { result } = renderHook(() =>
      useMemoEditor(selectedMemo, saveMemoMock, deleteMemoMock)
    );

    expect(result.current.content).toBe('Initial memo content');
  });

  it('should update content when selectedMemo changes', () => {
    const { result, rerender } = renderHook(
      ({ selectedMemo }) =>
        useMemoEditor(selectedMemo, saveMemoMock, deleteMemoMock),
      {
        initialProps: { selectedMemo: { content: 'First memo content' } },
      }
    );

    expect(result.current.content).toBe('First memo content');

    rerender({ selectedMemo: { content: 'Updated memo content' } });

    expect(result.current.content).toBe('Updated memo content');
  });

  it('should handle content changes correctly', () => {
    const selectedMemo = { content: 'Initial memo content' };

    const { result } = renderHook(() =>
      useMemoEditor(selectedMemo, saveMemoMock, deleteMemoMock)
    );

    act(() => {
      result.current.handleContentChange({
        target: { value: 'Updated memo content' },
      });
    });

    expect(result.current.content).toBe('Updated memo content');
  });

  it('should call saveMemo with the correct content', () => {
    const selectedMemo = { content: 'Initial memo content' };

    const { result } = renderHook(() =>
      useMemoEditor(selectedMemo, saveMemoMock, deleteMemoMock)
    );

    act(() => {
      result.current.setContent('Saved memo content');
    });

    act(() => {
      result.current.handleSaveMemo();
    });

    expect(saveMemoMock).toHaveBeenCalledWith('Saved memo content');
  });

  it('should call deleteMemo', () => {
    const selectedMemo = { content: 'Initial memo content' };

    const { result } = renderHook(() =>
      useMemoEditor(selectedMemo, saveMemoMock, deleteMemoMock)
    );

    act(() => {
      result.current.handleDeleteMemo();
    });

    expect(deleteMemoMock).toHaveBeenCalled();
  });
});
