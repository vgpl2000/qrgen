import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcompComponent } from './qrcomp.component';

describe('QrcompComponent', () => {
  let component: QrcompComponent;
  let fixture: ComponentFixture<QrcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QrcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
