import { EventEmitter, Injectable } from '@angular/core';
import { LineaFactura } from '@app/models/backend/lineaFactura';
import { ILineaFacturaItem } from '@app/models/frontend';

@Injectable({
  providedIn: 'root'
})
export class LineafacturaService {

  lineasFactura: ILineaFacturaItem[] = [];

  lineasFacturaUpdated: EventEmitter<ILineaFacturaItem[]> = new EventEmitter();

  constructor() { }

  setLineas(lineasFactura: LineaFactura[]): void {
    let index = 0;
    lineasFactura.forEach(element => {
      let newItem: ILineaFacturaItem = {
        id: index,
        concepto: element.concepto,
        precioUnitario: element.precioUnitario,
        cantidad: element.cantidad,
        totalLinea: element.cantidad * element.precioUnitario
      }

      this.lineasFactura = [...this.lineasFactura, newItem]
      index ++;
    });

    console.log(this.lineasFactura);
  }

  getLineas(): ILineaFacturaItem[] {
    return this.lineasFactura;
  }

  deleteLinea(linea: ILineaFacturaItem): void {
    const i = this.lineasFactura.indexOf(linea);
    this.lineasFactura.splice(i, 1);

    this.lineasFacturaUpdated.emit(this.lineasFactura);
  }

  updateLinea(linea: ILineaFacturaItem): void {
    const i = this.lineasFactura.indexOf(linea);
    this.lineasFactura.splice(i, 1);

    const total = linea.precioUnitario * linea.cantidad

    const newLineaFactura: ILineaFacturaItem = {
      id: linea.id,
      concepto: linea.concepto,
      precioUnitario: linea.precioUnitario,
      cantidad: linea.cantidad,
      totalLinea: total
    }

    this.lineasFactura.push(newLineaFactura);

    this.lineasFacturaUpdated.emit(this.lineasFactura);
  }

  addLinea(lineaFactura: ILineaFacturaItem) {
    let id = this.lineasFactura.length + 2;

    const total = lineaFactura.precioUnitario * lineaFactura.cantidad

    const newLineaFactura: ILineaFacturaItem = {
      id: id,
      concepto: lineaFactura.concepto,
      precioUnitario: lineaFactura.precioUnitario,
      cantidad: lineaFactura.cantidad,
      totalLinea: total
    }
    this.lineasFactura = [...this.lineasFactura, newLineaFactura]

    this.lineasFacturaUpdated.emit(this.lineasFactura);
  }


}
