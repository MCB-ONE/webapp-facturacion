import { LineaFacturaFormModule } from './../../pages/new-factura/components/linea-factura-form/linea-factura-form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLineasFacturaComponent } from './modal-lineas-factura.component';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from '@app/pipes/pipes.module';



@NgModule({
  declarations: [
    ModalLineasFacturaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    PipesModule,
    MatButtonModule,
    LineaFacturaFormModule
  ],
})
export class ModalLineasFacturaModule { }
