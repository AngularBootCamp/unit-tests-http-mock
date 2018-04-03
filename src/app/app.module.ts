import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SwService } from './sw.service';
import { ToCapsPipe, ContainsXPipe, CheckmarkPipe, FieldRangePipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ToCapsPipe,
    ContainsXPipe,
    CheckmarkPipe,
    FieldRangePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SwService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
