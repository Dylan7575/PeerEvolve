/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvalstatsComponent } from './evalstats.component';

describe('EvalstatsComponent', () => {
  let component: EvalstatsComponent;
  let fixture: ComponentFixture<EvalstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
