import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldStepBarInterface } from 'src/app/modules/global-components/step-bar/step-bar.types';
import { CatalogMenuItemInterface } from './setings-catalog.types';

@Component({
  selector: 'app-setings-catalog',
  templateUrl: './setings-catalog.component.html',
  styleUrls: ['./setings-catalog.component.scss']
})

export class SetingsCatalogComponent implements OnInit {

  catalogMenu: CatalogMenuItemInterface[]= [
    {
      name: 'Создать категорию',
      activeTab: 'create_category'
    },
    {
      name: 'Создать категорию',
      activeTab: 'createСategory2'
    },
    {
      name: 'Создать категорию',
      activeTab: 'createСategory3'
    },
  ];

  fieldsStepBar: FieldStepBarInterface[] = [
    {
      step: 1,
      title: 'Создание китегории',
      id: 1,
      valid: 'empty'
    },
    {
      step: 2,
      title: 'Создание атрибутов',
      id: 2,
      valid: 'empty'
    },
    {
      step: 3,
      title: 'Завершиние создания',
      id: 3,
      valid: 'empty'
    },
  ];

  activeTab: string = 'create_category';
  step: number = 2;
  form: FormGroup = new FormGroup({});
  stepName: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.stepName = `step_${this.step}`;
  }

  createForm() {
    this.form = this.fb.group({
      step_1: this.fb.group({
        
          category: [{
              value: '',
              disabled: false
            }, [Validators.required]],
          
            subCatagory: [{
                value: '',
                disabled: false
              }, [Validators.required]]

      }),
      step_2: this.fb.group({

          atribute: [{value: 'test', disabled: false}],
        
          category: [{
              value: '',
              disabled: false
            }, [Validators.required]],
          
            subCatagory: [{
                value: '',
                disabled: false
              }, [Validators.required]]
      }),
      step_3: this.fb.group({
        
          category: [{
              value: '',
              disabled: false
            }, [Validators.required]],
          
            subCatagory: [{
                value: '',
                disabled: false
              }, [Validators.required]]
      })
    })
  }

  changeActiveTab (tab: string) {
    this.activeTab = tab;
  }

  onBack() {
    this.changeValidBarStep('back');
    if(this.step > 1) {
      this.stepName = `step_${this.step - 1}`;
      this.step--;
    }
  }

  onNext() {
    console.log(this.form.controls);
    
    this.changeValidBarStep('next');
    if(this.step < this.fieldsStepBar.length && this.form.controls[`step_${this.step}`].status === 'VALID') {
      this.stepName = `step_${this.step + 1}`;
      this.step++;
    }
  }
  
  changeValidBarStep(str: string): void {
    const length = this.step - 1;

    if(str === 'next') {
      if(this.form.controls[this.stepName] && this.form.controls[this.stepName].status === 'INVALID') {
        this.fieldsStepBar[length].valid = 'invalid';
      } else if(this.form.controls[`step_${this.step}`] && this.form.controls[`step_${this.step}`].status === 'VALID') {
        this.fieldsStepBar[length].valid = 'valid';
      }
    }
    if(str === 'back') {
      console.log('back');
      
      if(length > 0) {
        this.fieldsStepBar[length].valid = 'empty';
      }  
    }
  }
}
