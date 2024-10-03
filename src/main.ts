import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app/app.component';

registerLocaleData(localePt, 'pt-BR');

bootstrapApplication(AppComponent, {
    providers: [
      { provide: LOCALE_ID, useValue: 'pt-BR' }
    ]
  }).catch((err) => console.error(err));
