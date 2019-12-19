import React, { useState, useContext, Fragment } from "react";
import { getPayRateFromBill, 
  getTermRateFromPay, 
  useWindowDimensions, 
  setLoginValues 
} from "utils";
import ValuesComponent from "components/ValuesComponent";
import MobileValuesComponent from "components/ValuesComponent/MobileValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import "./styles.scss";
import { UserContext } from "store/Store";
import { marginDefaultRates } from "constants/rates";
import MobileSalaryComponent from "components/SalaryComponent/MobileSalaryComponent";


const BillRate = () => {
  const [data, setData] = useState({
    percent: "0",
    rate: "0"
  });

  const value = useContext(UserContext);
  const { user } = value;
  const marginArray = user.googleId ? user.margin : marginDefaultRates;

  const { rate, percent } = data;

  const payRate = getPayRateFromBill(rate, percent);
  const termRate = getTermRateFromPay(payRate);

  const { width } = useWindowDimensions();

  const renderValuesComponent = () => {
    return (
      <Fragment>
        <ValuesComponent
          billRate={rate}
          percentage={percent}
          termRate={termRate}
          payRate={payRate}
          type="Margin"
        />
        <SalaryComponent payRate={payRate} termRate={termRate} />
      </Fragment>
    );
  };

  const renderMobileValuesComponent = () => {
    return (
      <Fragment>
        <MobileValuesComponent  
          billRate={rate}
          percentage={percent} 
          termRate={termRate} 
          payRate={payRate} 
          type="Margin"
        />
        <MobileSalaryComponent payRate={payRate} termRate={termRate} />
      </Fragment>
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
        loginValues={setLoginValues(user.googleId)}
      />
      {width < 768 && renderMobileValuesComponent()}
      {width >= 768 && renderValuesComponent()}
      
    </div>
  );
};

export default BillRate;
