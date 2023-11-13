import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropmenuComponent } from './dropmenu.component';

describe('DropmenuComponent', () => {
  let component: DropmenuComponent;
  let fixture: ComponentFixture<DropmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropmenuComponent]
    });
    fixture = TestBed.createComponent(DropmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
