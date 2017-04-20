var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from "./app/QuestionBase";
export var DropDownQuestion = (function (_super) {
    __extends(DropDownQuestion, _super);
    function DropDownQuestion() {
        _super.call(this);
        this.options = [];
        this.controlType = 'dropdown';
    }
    return DropDownQuestion;
}(QuestionBase));
export var TextboxQuestion = (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion() {
        _super.call(this);
        this.controlType = 'textbox';
    }
    return TextboxQuestion;
}(QuestionBase));
export var ZeroSum = (function (_super) {
    __extends(ZeroSum, _super);
    function ZeroSum() {
        _super.call(this);
        this.controlType = 'zerosum';
    }
    return ZeroSum;
}(QuestionBase));
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/QuestionTextbox.js.map