import { async, TestBed } from '@angular/core/testing';
import { SurveyDemoComponent } from './survey-demo.component';
describe('SurveyDemoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SurveyDemoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SurveyDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/survey-demo/survey-demo.component.spec.js.map