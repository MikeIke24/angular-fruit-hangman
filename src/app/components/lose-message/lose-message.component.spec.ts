import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseMessageComponent } from './lose-message.component';

describe('LoseMessageComponent', () => {
  let component: LoseMessageComponent;
  let fixture: ComponentFixture<LoseMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoseMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
