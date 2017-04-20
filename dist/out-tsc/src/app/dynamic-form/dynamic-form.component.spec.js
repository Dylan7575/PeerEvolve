import { async, TestBed } from '@angular/core/testing';
import { DynamicFormComponent } from './dynamic-form.component';
describe('DynamicFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DynamicFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DynamicFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/dynamic-form/dynamic-form.component.spec.js.map