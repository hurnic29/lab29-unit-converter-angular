import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab29-unit-converter-angular';
  matDrawerMode = 'side';
  matDrawerHasBackdrop = true;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLang() {
    this.translate.use('ja');
  }
}
