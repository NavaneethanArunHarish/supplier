import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSliderModule,
    MatTabsModule,
    MatStepperModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatListModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  exports: [
    MatInputModule,
    MatSliderModule,
    MatTabsModule,
    MatStepperModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatListModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  declarations: []
})
export class MaterialModule { } 
