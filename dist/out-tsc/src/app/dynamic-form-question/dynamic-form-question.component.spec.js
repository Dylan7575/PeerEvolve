import { async, TestBed } from '@angular/core/testing';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
describe('DynamicFormQuestionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DynamicFormQuestionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DynamicFormQuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/dynamic-form-question/dynamic-form-question.component.spec.js.map