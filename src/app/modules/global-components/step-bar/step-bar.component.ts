import { Component, Input, OnInit } from '@angular/core';

import { FieldStepBarInterface } from './step-bar.types';

@Component({
  selector: 'global-component-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss']
})
export class StepBarComponent implements OnInit {

  @Input() fieldsStepBar: FieldStepBarInterface[] = [];
  @Input() step: number = 0;

  constructor() { }

  ngOnInit() {
    
  }

  getActiveItem(idx: number): boolean {
    idx++;
    if(this.step === idx) {
      return true;
    }
    return false;    
  }

}
