import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReactiveSignupPage } from './reactive-signup.page';

describe('ReactiveSignupPage', () => {
  let component: ReactiveSignupPage;
  let fixture: ComponentFixture<ReactiveSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
