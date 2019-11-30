import React, { useState, useContext } from "react";
import { getPayRateFromBill, getTermRateFromPay } from "utils";
import ValuesComponent from "components/ValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import "./styles.scss";
import { UserContext } from "store/Store";

const BillRate = () => {
  const [data, setData] = useState({
    margin: "0",
    rate: "0"
  });

  const user = useContext(UserContext);
  const marginArray = user.margin;

  const { rate, margin } = data;

  const payRate = getPayRateFromBill(rate, margin);
  const termRate = getTermRateFromPay(payRate);

  return (
    <div className="bill-rate-container">
      <p>
        Use these fields if you have a Bill Rate and Margin,
        and want to know Pay Rate and Term Rates
      </p>
      <FormComponent
        rateType="Bill Rate"
        percentType="Margin"
        setData={setData}
        percentageRates={marginArray}
      />
      <ValuesComponent
        billRate={rate}
        percentage={margin}
        termRate={termRate}
        payRate={payRate}
        type="Margin"
      />
      <SalaryComponent payRate={payRate} termRate={termRate} />
    </div>
  );
};

export default BillRate;
