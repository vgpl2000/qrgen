import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { QrcompComponent } from './qrcomp/qrcomp.component';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzPopoverModule } from 'ng-zorro-antd/popover';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    QrcompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzInputModule,
    NzButtonModule,
    NzQRCodeModule,
    NzMessageModule,
    NzColorPickerModule,
    NzPopoverModule
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
