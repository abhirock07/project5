import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablenumberComponent } from './tablenumber.component';

describe('TablenumberComponent', () => {
  let component: TablenumberComponent;
  let fixture: ComponentFixture<TablenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablenumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
