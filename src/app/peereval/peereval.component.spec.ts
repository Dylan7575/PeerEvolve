/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeerevalComponent } from './peereval.component';

describe('PeerevalComponent', () => {
  let component: PeerevalComponent;
  let fixture: ComponentFixture<PeerevalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerevalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
