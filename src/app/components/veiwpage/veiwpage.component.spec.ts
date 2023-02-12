import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwpageComponent } from './veiwpage.component';

describe('VeiwpageComponent', () => {
  let component: VeiwpageComponent;
  let fixture: ComponentFixture<VeiwpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
