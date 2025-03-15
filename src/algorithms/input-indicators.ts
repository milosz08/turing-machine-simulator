class InputIndicators {
  private readonly _el: any;

  constructor(el: any) {
    this._el = el;
  }

  convertInputSelection(): { ln: number; col: number } {
    const currentLine = this._el.value.substring(0, this._el.selectionStart).split('\n');
    const ln = currentLine?.length;
    const col = currentLine[currentLine.length - 1]?.length + 1;
    return { ln: parseInt(ln), col: parseInt(col) };
  }

  getInputSelection(): number {
    let start = 0,
      end = 0;
    let normalizedValue, range, textInputRange, len, endRange;

    if (typeof this._el.selectionStart == 'number' && typeof this._el.selectionEnd == 'number') {
      start = this._el.selectionStart;
      end = this._el.selectionEnd;
    } else {
      range = document['selection'].createRange();

      if (range && range.parentElement() === this._el) {
        len = this._el.value.length;
        normalizedValue = this._el.value.replace(/\r\n/g, '\n');

        textInputRange = this._el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        endRange = this._el.createTextRange();
        endRange.collapse(false);

        if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
          start = end = len;
        } else {
          start = -textInputRange.moveStart('character', -len);
          start += normalizedValue.slice(0, start).split('\n').length - 1;

          if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
            end = len;
          } else {
            end = -textInputRange.moveEnd('character', -len);
            end += normalizedValue.slice(0, end).split('\n').length - 1;
          }
        }
      }
    }
    return end - start;
  }
}

export { InputIndicators };
