import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { decreasingInstallment } from '../../helpers/decreasingInstallment';
import { fixedInstallment } from '../../helpers/fixedInstallment';

import './Sliders.css';

function Sliders() {
  const [amountOfCredit, setAmountOfCredit] = useState<number>(300000);
  const [repaymentPeriod, setRepaymentPeriod] = useState<number>(300);
  const [maxPeriod, setMaxPeriod] = useState<number>(480);
  const [interest, setInterest] = useState<string>('8.33');
  const [maxInterest, setMaxInterest] = useState<number>(15.00);
  const [fixedInstallemnt, setFixedInstallemnt] = useState<number>(0);
  const [decreasingInstallemnt, setDecreasingInstallemnt] = useState<Array<any>>([]);

  useEffect(() => {
    if (repaymentPeriod > maxPeriod) {
      setRepaymentPeriod(maxPeriod);
    }
    if (Number(interest) > maxInterest) {
      setInterest(maxInterest.toString());
    }
  }, [interest, repaymentPeriod]);

  // amount of credit
  const increaseAmountOfCredit = () => {
    setAmountOfCredit(amountOfCredit + 10000);
  };

  const decreaseAmountOfCredit = () => {
    if (amountOfCredit > 10000) {
      setAmountOfCredit(amountOfCredit - 10000);
    }
  };

  const handleAmountOfCredit = (event:any) => {
    setAmountOfCredit(Number(event.target.value));
  };

  // repayment period
  const increaseRepaymentPeriod = () => {
    if (repaymentPeriod < maxPeriod) {
      setRepaymentPeriod(repaymentPeriod + 1);
    }
  };

  const decreaseRepaymentPeriod = () => {
    if (repaymentPeriod > 1) {
      setRepaymentPeriod(repaymentPeriod - 1);
    }
  };

  const handleRepaymentPeriod = (event:any) => {
    if (repaymentPeriod < maxPeriod) {
      setRepaymentPeriod(Number(event.target.value));
    } else {
      setRepaymentPeriod((event.target.value).slice(0, -2));
    }
  };

  // interest
  const increaseInterest = () => {
    if (Number(interest) < maxInterest) {
      setInterest((Number(interest) + 0.5).toFixed(2));
    }
  };

  const decreaseInterest = () => {
    if (Number(interest) > 1) {
      setInterest((Number(interest) - 0.5).toFixed(2));
    }
  };

  const handleInterest = (event:any) => {
    let string = (event.target.value).replace(/,/i, '.');
    string = string.replace(/ %/i, '');
    const numberRegex = /^\d*\.?\d*$/;
    if (string === '' || numberRegex.test(string)) {
      setInterest(string);
    }
  };

  const handleCalculate = async () => {
    const fixedInst = fixedInstallment(amountOfCredit, repaymentPeriod, interest);
    setFixedInstallemnt(Number(fixedInst));
    const decrInst = await decreasingInstallment(amountOfCredit, repaymentPeriod, interest);
    setDecreasingInstallemnt(decrInst);
  };

  return (
    <div className="sliders-container">
      <div className="credit-amount">

        {/* amount of credit */}
        <div className="amount-of-credit">
          <p className="p-slider-name">Credit amount</p>
          <div className="input-module">
            <div className="input-btn">
              <button
                className="credit-amount-btn-minus"
                type="button"
                onClick={decreaseAmountOfCredit}
              >
                -
              </button>
            </div>
            <div className="credit-amount-i">
              <input
                className="credit-amount-input"
                type="number"
                defaultValue={amountOfCredit}
                value={amountOfCredit}
                onChange={handleAmountOfCredit}
              />
            </div>
            <div className="input-btn">
              <button
                className="credit-amount-btn-plus"
                type="button"
                onClick={increaseAmountOfCredit}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* repayment-period */}
        <div className="repayment-period">
          <p className="p-slider-name">Repayment period</p>
          <div className="input-module">
            <div className="input-btn">
              <button
                className="credit-amount-btn-minus"
                type="button"
                onClick={decreaseRepaymentPeriod}
              >
                -
              </button>
            </div>
            <div className="credit-amount-i">
              <input
                className="credit-amount-input"
                defaultValue={repaymentPeriod}
                value={repaymentPeriod}
                type="number"
                onChange={handleRepaymentPeriod}
              />
            </div>
            <div className="input-btn">
              <button
                className="credit-amount-btn-plus"
                type="button"
                onClick={increaseRepaymentPeriod}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* interest */}
        <div className="interest">
          <p className="p-slider-name">Interest</p>
          <div className="input-module">
            <div className="input-btn">
              <button
                className="credit-amount-btn-minus"
                type="button"
                onClick={decreaseInterest}
              >
                -
              </button>
            </div>
            <div className="credit-amount-i">
              <input
                className="credit-amount-input"
                defaultValue={`${interest} %`}
                value={`${interest} %`}
                type="text"
                onChange={handleInterest}
                onClick={handleInterest}
                pattern="[0-9]+([\.,][0-9]+)?"
                inputMode="numeric"
                min="0.5"
                max="15.0"
                step="1"
              />
            </div>
            <div className="input-btn">
              <button
                className="credit-amount-btn-plus"
                type="button"
                onClick={increaseInterest}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <Button
          className="calculate-btn"
          variant="contained"
          onClick={handleCalculate}
        >
          Calculate
        </Button>
        <div className="fixInst">
          <p className="p-fixInst">
            Fixed installement
            {' '}
            {fixedInstallemnt}
          </p>
        </div>
        <div className="decrInst">
          <p className="p-decrInst">
            Decreasing installement
            {' '}
            {decreasingInstallemnt[1].toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sliders;
