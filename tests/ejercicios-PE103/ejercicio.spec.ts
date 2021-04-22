import 'mocha';
import {expect} from 'chai';
import {Mastercard} from '../../src/ejercicios-PE103/mastercard';
import {Paypal} from '../../src/ejercicios-PE103/paypal';
import {Visa} from '../../src/ejercicios-PE103/visa';

describe('Mastercard class tests', () => {
  const mastercardComission = new Mastercard(200);

  it('A Mastercard class object can be successfully created', () => {
    expect(mastercardComission).not.to.be.equal(null);
  });

  it('Commission is correctly calculated with the Mastercard option', () => {
    expect(mastercardComission.commission()).to.be.equal(10);
  });
});

describe('Paypal class tests', () => {
  const paypalComission = new Paypal(300);

  it('A Paypal class object can be successfully created', () => {
    expect(paypalComission).not.to.be.equal(null);
  });

  it('Commission is correctly calculated with the Paypal option', () => {
    expect(paypalComission.commission()).to.be.equal(9);
  });
});

describe('Visa class tests', () => {
  const visaComission = new Visa(500);

  it('A Visa class object can be successfully created', () => {
    expect(visaComission).not.to.be.equal(null);
  });

  it('Commission is correctly calculated with the Paypal option', () => {
    expect(visaComission.commission()).to.be.equal(32.5);
  });
});
