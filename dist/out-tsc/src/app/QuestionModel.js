import { FormGroup, Validators, FormControl } from '@angular/forms';
export var QuestionModel = (function () {
    function QuestionModel() {
        this.questions = [];
    }
    QuestionModel.prototype.toGroup = function () {
        var group = {};
        this.questions.forEach(function (question) {
            group[question.key] = new FormControl('', Validators.required);
        });
        return new FormGroup(group);
    };
    return QuestionModel;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/QuestionModel.js.map