import {
  Component, Input, ContentChildren, QueryList, AfterContentInit, ViewEncapsulation,
  EventEmitter, Output
} from '@angular/core';
import { TabComponent } from './tab.component';
@Component({
  selector: 'tabbed-pane',
  styleUrls: ['./tabbed-pane.component.css'],
  template: `
    <div class="tabbed-pane">
    <div>
      <span *ngFor="let tab of tabsArray">
        <a (click)="selectTab(tab)">{{tab.title}}</a>
      </span>
    </div>
    <div>
      <ng-content></ng-content>
    </div>
    </div>
  `
})
export class TabbedPaneComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  get tabsArray() {
    return this.tabs.toArray();
  }

  @Input() selectedIndex: number = 0;
  @Output() selectedIndexChange = new EventEmitter<number>();

  ngAfterContentInit(): void {
    let index = this.selectedIndex;
    this.select(index);
  }

  private select(index: number) {
    for (let i = 0; i < this.tabsArray.length; i++) {
      this.tabsArray[i].active = (i == index);
    }
  }

  private selectTab(tab: TabComponent) {
    let index = this.tabsArray.lastIndexOf(tab);
    this.select(index);
    this.selectedIndexChange.next(index);
  }
}
