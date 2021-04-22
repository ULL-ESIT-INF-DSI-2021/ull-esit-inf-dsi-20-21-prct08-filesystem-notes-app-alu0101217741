/**
 * Clase abstracta que incluye un método de plantilla para calcular las
 * comisiones con diferentes métodos de pago.
 */
export abstract class Commission {
  /**
   * Constructor de la clase.
   * @param price El precio del producto que se haya comprado.
   */
  constructor(protected price: number) {}

  /**
   * Método de plantilla que permite calcular la comisión aplicada a una compra.
   * @returns El valor de la comisión.
   */
  commission(): number {
    const commission = this.calculateCommission();
    this.afterCalculateComision(commission);
    return commission;
  }

  /**
   * Método abstracto que deben implementar las subclases para aplicar un
   * porcentaje de comisión determinado.
   */
  protected abstract calculateCommission(): number;

  /**
   * Hook que muestra el valor de la comisión tras calcularla.
   * @param commission El valor de la comisión que se debe mostrar.
   */
  protected afterCalculateComision(commission: number): void {}
}
