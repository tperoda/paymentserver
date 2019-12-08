import React, { useState, useContext } from "react";
import { getPayRateFromBill, getTermRateFromPay, useWindowDimensions } from "utils";
import ValuesComponent from "components/ValuesComponent";
import MobileValuesComponent from "components/ValuesComponent/MobileValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import "./styles.scss";
import { UserContext } from "store/Store";
import { marginDefaultRates } from "constants/rates";


const BillRate = () => {
  const [data, setData] = useState({
    percent: "0",
    rate: "0"
  });

  const value = useContext(UserContext);
  const { user } = value;
  const marginArray = user.margin;

  const { rate, percent } = data;

  const payRate = getPayRateFromBill(rate, percent);
  const termRate = getTermRateFromPay(payRate);

  const { width } = useWindowDimensions();

  const renderValuesComponent = () => {
    return (
      <ValuesComponent
        billRate={rate}
        percentage={percent}
        termRate={termRate}
        payRate={payRate}
        type="Margin"
      />
    );
  };

  const renderMobileValuesComponent = () => {
    return (
      <MobileValuesComponent  
        billRate={rate}
        percentage={percent} 
        termRate={termRate} 
        payRate={payRate} 
        type="Margin" 
      />
    );
  }

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
        percentageRates={marginArray || marginDefaultRates}
      />
      {width < 768 && renderMobileValuesComponent()}
      {width >= 768 && renderValuesComponent()}
      <SalaryComponent payRate={payRate} termRate={termRate} />
    </div>
  );
};

export default BillRate;
