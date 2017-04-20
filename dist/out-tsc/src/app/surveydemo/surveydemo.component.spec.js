import { async, TestBed } from '@angular/core/testing';
import { SurveydemoComponent } from './surveydemo.component';
describe('SurveydemoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SurveydemoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SurveydemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/surveydemo/surveydemo.component.spec.js.map