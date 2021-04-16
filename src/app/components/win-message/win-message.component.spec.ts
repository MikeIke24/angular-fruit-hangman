import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinMessageComponent } from './win-message.component';

describe('WinMessageComponent', () => {
  let component: WinMessageComponent;
  let fixture: ComponentFixture<WinMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
