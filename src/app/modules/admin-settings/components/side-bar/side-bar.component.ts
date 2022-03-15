import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  activeTab: string = '';

  @Input() catalogMenu:any;
  @Output() changeActiveTab = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  changeTab (tab: string) {
    this.changeActiveTab.emit(tab);
    this.activeTab = tab;
  }
 
}
