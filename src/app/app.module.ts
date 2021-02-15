import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiftsModule } from './gifts/gifts.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ShareModule,GiftsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
