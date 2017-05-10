
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabbedPaneComponent } from './tabbed-pane.component';
@NgModule({
  imports: [
    CommonModule  //ngIf, ngFor
  ],
  declarations: [
    TabComponent,
    TabbedPaneComponent
  ],
  exports: [
    TabComponent,
    TabbedPaneComponent
  ]
})
export class TabbedPaneModule {
}
