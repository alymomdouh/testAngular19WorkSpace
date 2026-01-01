import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCoreFeaturesComponent } from './advanced-core-features.component';

describe('AdvancedCoreFeaturesComponent', () => {
  let component: AdvancedCoreFeaturesComponent;
  let fixture: ComponentFixture<AdvancedCoreFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedCoreFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedCoreFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
