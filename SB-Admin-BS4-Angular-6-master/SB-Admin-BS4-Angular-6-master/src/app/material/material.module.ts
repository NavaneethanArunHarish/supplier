import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSliderModule,
    MatTabsModule,
    MatStepperModule
  ],
  exports: [
    MatInputModule,
    MatSliderModule,
    MatTabsModule,
    MatStepperModule
  ],
  declarations: []
})
export class MaterialModule { } 
