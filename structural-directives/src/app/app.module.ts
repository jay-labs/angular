import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestNgifComponent } from './test-ngif/test-ngif.component';
import { TestNgswitchComponent } from './test-ngswitch/test-ngswitch.component';
import { TestNgforComponent } from './test-ngfor/test-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestNgifComponent,
    TestNgswitchComponent,
    TestNgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
