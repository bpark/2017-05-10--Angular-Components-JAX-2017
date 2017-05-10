import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div *ngIf="active">
      <h4>{{title}}</h4>
      <ng-content></ng-content>
    </div>    
  `
})
export class TabComponent {

  @Input() title: string;
  active: boolean = true;

}
