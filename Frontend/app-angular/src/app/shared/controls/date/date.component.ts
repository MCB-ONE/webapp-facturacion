import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

type Value = number;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers:  [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> DateComponent),
      multi: true
    }
  ]
})

export class DateComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder!: string;
  @Input() min!: Date;
  @Input() max!: Date;

  @Output() changed = new EventEmitter<Value>();
  @Output() closed = new EventEmitter<void>();

  get inputValue(): Date {
    return this.value ? new Date(this.value) : new Date();
   }


  value!: Value;
  isDisabled!: boolean;

  constructor(private datepipe: DatePipe) { }

  private propagateChange: any = () =>{}
  private propagateTouched: any = () =>{}


  ngOnInit(): void {
  }

  writeValue(value: Value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void{
    this.isDisabled = isDisabled;
  }

  onChanged(event: MatDatepickerInputEvent<Date>):void{
    console.log(this.datepipe.transform(event.value, 'dd/MM/YYYY'))
    const value = event.value ? event.value.getTime() : new Date().getTime();
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onClosed(): void{
    this.propagateTouched();
    this.closed.emit();
  }

}
