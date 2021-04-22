import {Commission} from './commission';

/**
 * Clase que representa el método de pago Paypal.
 */
export class Paypal extends Commission {
  constructor(protected price: number) {
    super(price);
  }

  /**
   * Método que calcula la comisión aplicando el porcentaje de Paypal.
   * @returns El valor de la comisión.
   */
  protected calculateCommission(): number {
    return this.price * 0.03;
  }

  /**
   * Hook que muestra en pantalla el valor de la comisión.
   * @param commission El valor de la comisión.
   */
  protected afterCalculateComision(commission: number): void {
    console.log(`The commission with Paypal is ${commission}`);
  }
}
