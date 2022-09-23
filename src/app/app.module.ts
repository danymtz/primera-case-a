import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './modules/uno/components/uno/uno.component';
import { DosComponent } from './modules/dos/components/dos/dos.component';
import { UnoModule } from './modules/uno/uno/uno.module';
import { DosModule } from './modules/dos/dos/dos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UnoModule,
    DosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
