import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestClassBindingComponent } from './test-class-binding/test-class-binding.component';
import { TestBindingComponent } from './test-binding/test-binding.component';
import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestStyleBindingComponent } from './test-style-binding/test-style-binding.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestTwowayBindingComponent } from './test-twoway-binding/test-twoway-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestClassBindingComponent,
    TestBindingComponent,
    TestInterpolationComponent,
    TestStyleBindingComponent,
    TestEventBindingComponent,
    TestTwowayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
