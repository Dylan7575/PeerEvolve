/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeertakeComponent } from './peertake.component';

describe('PeertakeComponent', () => {
  let component: PeertakeComponent;
  let fixture: ComponentFixture<PeertakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeertakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeertakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
