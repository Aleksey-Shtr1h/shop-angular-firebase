import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from "@angular/forms";
import { noop } from 'rxjs';

@Component({
  selector: 'generate-attribute',
  templateUrl: './form-generate-attribute.component.html',
  styleUrls: ['./form-generate-attribute.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => FormGenerateAttributeComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS, 
      useExisting: forwardRef(() => FormGenerateAttributeComponent),
      multi: true
    }
  ]
})
export class FormGenerateAttributeComponent implements ControlValueAccessor, OnInit {
  onChangeCallback: (_: any) => void = noop;
  onTouchedCallback: () => void = noop;

  formGroup: FormGroup = new FormGroup({});
  value: string = '';
  testControl = new FormControl();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.testControl.valueChanges.subscribe(value => {
      this.onChangeCallback(value)
    })
  }

  validate(control: AbstractControl): ValidationErrors | null {
    // console.log('validate: ', control);
    
    // if (this.formArray) {
    //   return this.formArray
    // }

    return null
  }

  writeValue(value: any): void {
    console.log('writeValue');
    // this.formGroup = this.fb.group({test1: ''});
    this.testControl.setValue(value)
    // console.log(value);
    

    console.log(this.formGroup);
    
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    
    this.onChangeCallback = fn;
  }
  
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
    this.onTouchedCallback = fn;
  }

}
