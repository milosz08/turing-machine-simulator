/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

class InputIndicators {

    private _start: number = 0;
    private _end: number = 0;
    private readonly _el: any;
    private _codeArea: string = '';


    public constructor(el: any, codeArea: string) {
        this._el = el;
        this._codeArea = codeArea;
    };

    /**
     * Method responsible for converting line + column tuple and separates into two values.
     * For example: ln+col (432) -> ln: 32, col: 7 ...
     */
    public convertInputSelection(): { ln: string, col: string } {
        const currentLine = this._el.value.substring(0, this._el.selectionStart).split('\n');
        const ln = currentLine?.length;
        const col = currentLine[currentLine.length - 1]?.length + 1;
        return { ln, col };
    };

    /**
     * Method responsible for processing and returning the selected area.
     */
    public getInputSelection(): number {
        let start = 0, end = 0;
        let normalizedValue, range, textInputRange, len, endRange;

        if(typeof this._el.selectionStart == 'number' && typeof this._el.selectionEnd == 'number') {
            start = this._el.selectionStart;
            end = this._el.selectionEnd;
        } else {
            range = document['selection'].createRange();

            if(range && range.parentElement() === this._el) {
                len = this._el.value.length;
                normalizedValue = this._el.value.replace(/\r\n/g, '\n');

                textInputRange = this._el.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());

                endRange = this._el.createTextRange();
                endRange.collapse(false);

                if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                    start = end = len;
                } else {
                    start = -textInputRange.moveStart("character", -len);
                    start += normalizedValue.slice(0, start).split('\n').length - 1;

                    if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                        end = len;
                    } else {
                        end = -textInputRange.moveEnd("character", -len);
                        end += normalizedValue.slice(0, end).split('\n').length - 1;
                    }
                }
            }
        }
        this._start = start;
        this._end = end;
        return end - start;
    }
}

export default InputIndicators;