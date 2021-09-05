/*!
 * @file InputIndicators.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript Class file (turing algorithm logic)
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
 */

/**
 * @details Class which stores the methods that handle the current value of the column, row, and number of 
 *          selected characters in the program's input field. Used by the React component.
 * 
 * @constructor { React.MutableObject<> } el - reference to the machine code input field (virtual DOM tree object).
 *              { string } codearea - the value entered in the program code entry field
 */
class InputIndicators {
    _start = 0;
    _end = 0;

    constructor(el, codearea) {
        this.el = el;
        this.codearea = codearea;
    }

    /**
     * Method responsible for converting line + column tuple and separates into two values.
     * For example: ln+col (432) -> ln: 32, col: 7 ...
     * 
     * @returns { Object<number> } - object that stores the cursor position in the current column and in 
     *                               the textarea field row.
     */
     convertInputSelection() {        
        const currentLine = this.el.value.substr(0, this.el.selectionStart).split('\n');
        const ln = currentLine?.length;
        const col = currentLine[currentLine.length - 1]?.length + 1;
        return { ln, col };
    }

    /**
     * Method responsible for processing and returning the selected area.
     * 
     * @returns { number } - range of the selected field by the user.
     */
    getInputSelection() {
        let start = 0, end = 0;
        let normalizedValue, range, textInputRange, len, endRange;
    
        // Checking that the supplied item is the value of number
        if(typeof this.el.selectionStart == 'number' && typeof this.el.selectionEnd == 'number') {
            start = this.el.selectionStart;
            end = this.el.selectionEnd;
        } else {
            range = document.selection.createRange();
    
            if(range && range.parentElement() === this.el) {
                len = this.el.value.length;
                normalizedValue = this.el.value.replace(/\r\n/g, '\n');
    
                textInputRange = this.el.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());
    
                endRange = this.el.createTextRange();
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
};

export default InputIndicators;