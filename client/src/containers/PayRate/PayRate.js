import React, { useState, useContext, Fragment } from "react";
import ValuesComponent from "components/ValuesComponent";
import MobileValuesComponent from "components/ValuesComponent/MobileValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import { getTermRateFromPay, 
  getBillRateFromPay, 
  filterRates, 
  useWindowDimensions, 
  setLoginValues 
} from "utils";
import "./styles.scss";
import { UserContext } from "store/Store";
import { markupDefaultRates } from "constants/rates";
import MobileSalaryComponent from "components/SalaryComponent/MobileSalaryComponent";

const PayRate = () => {
  const [data, setData] = useState({
    rate: "0",
    percent: "0"
  });

  const value = useContext(UserContext);
  const { user } = value;
  const markupArray = user.googleId ? user.markup : markupDefaultRates;

  const { rate, percent } = data;

  const billRate = getBillRateFromPay(rate, filterRates(percent, markupArray));
  const termRate = getTermRateFromPay(rate);

  const { width } = useWindowDimensions();

  const renderValuesComponent = () => {
    return (
      <Fragment>
        <ValuesComponent
          billRate={billRate}
          percentage={percent}
          termRate={termRate}
          payRate={rate}
          type="Markup"
        />
        <SalaryComponent payRate={rate} termRate={termRate} />
      </Fragment>
    );
  };

  const renderMobileValuesComponent = () => {
    return (
      <Fragment>
        <MobileValuesComponent 
          billRate={billRate}
          percentage={percent}
          termRate={termRate}
          payRate={rate}
          type="Markup"
        />
        <MobileSalaryComponent payRate={rate} termRate={termRate} />
      </Fragment>
    );
  };

  return (
    <div className="pay-rate-container">
      <p>
        Use these fields if you have a Pay Rate and Markup,
        and want to know Bill Rate and Term Rates
      </p>
      <FormComponent
        rateType="Pay Rate"
        percentType="Markup"
        setData={setData}
        percentageRates={markupArray || markupDefaultRates}
        loginValues={setLoginValues(user.googleId)}
      />
      {width < 768 && renderMobileValuesComponent()}
      {width >= 768 && renderValuesComponent()}
    </div>
  );
};

export default PayRate;
