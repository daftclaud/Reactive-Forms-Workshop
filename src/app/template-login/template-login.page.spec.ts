import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemplateLoginPage } from './template-login.page';

describe('TemplateLoginPage', () => {
  let component: TemplateLoginPage;
  let fixture: ComponentFixture<TemplateLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
