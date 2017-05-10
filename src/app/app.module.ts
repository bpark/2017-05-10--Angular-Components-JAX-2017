import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TabbedPaneModule } from './tabbed-pane/tabbed-pane.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabbedPaneModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
