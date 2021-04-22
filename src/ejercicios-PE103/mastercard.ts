import {Commission} from './commission';

/**
 * Clase que representa el método de pago Mastercard.
 */
export class Mastercard extends Commission {
  /**
   * Constructor de la clase.
   * @param price El precio del producto que se haya comprado.
   */
  constructor(protected price: number) {
    super(price);
  }

  /**
   * Método que calcula la comisión aplicando el porcentaje de Mastercard.
   * @returns El valor de la comisión.
   */
  protected calculateCommission(): number {
    return this.price * 0.05;
  }

  /**
   * Hook que muestra en pantalla el valor de la comisión.
   * @param commission El valor de la comisión.
   */
  protected afterCalculateComision(commission: number): void {
    console.log(`The commission with Mastercard is ${commission}`);
  }
}
