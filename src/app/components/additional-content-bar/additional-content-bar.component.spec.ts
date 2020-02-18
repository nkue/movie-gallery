import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalContentBarComponent } from './additional-content-bar.component';

describe('AdditionalContentBarComponent', () => {
  let component: AdditionalContentBarComponent;
  let fixture: ComponentFixture<AdditionalContentBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalContentBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
