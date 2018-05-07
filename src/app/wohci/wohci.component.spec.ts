import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WohciComponent } from './wohci.component';

describe('WohciComponent', () => {
  let component: WohciComponent;
  let fixture: ComponentFixture<WohciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WohciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WohciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
