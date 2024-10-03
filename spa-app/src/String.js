class String {
  static getFirstLine(text) {
    if (!text) return "";
    const lines = text.split("\n");
    return lines[0];
  }
  static uniqueTitle(text, memos) {
    const title = String.getFirstLine(text);
    let uniqueTitle = title;
    let counter = 1;
    while (memos.some((memo) => memo.title === uniqueTitle)) {
      uniqueTitle = `${title} (${counter})`;
      counter++;
    }
    return uniqueTitle;
  }
}

export default String;
