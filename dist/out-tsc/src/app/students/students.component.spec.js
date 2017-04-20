import { async, TestBed } from '@angular/core/testing';
import { StudentsComponent } from './students.component';
describe('StudentsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StudentsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/students/students.component.spec.js.map