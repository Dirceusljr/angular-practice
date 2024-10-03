import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localePt, 'pt-BR');

bootstrapApplication(AppComponent, {
    providers: [
      { provide: LOCALE_ID, useValue: 'pt-BR' }
    ]
  }).catch((err) => console.error(err));
