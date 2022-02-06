
//function for calculating the sip delay
const CalculateSip = (monthlyinvestment, investmentperiod, rateofreturn, delay) => {

    var timeduration = (investmentperiod) * 12;        //converting years into months 
    var rate = (rateofreturn) / 12;                     //calculating rate for per month
    var timedurationafterdelay = timeduration - delay;                
 
    var starttoday = sipgrowth(monthlyinvestment, timeduration, rate);         //amount get if start from today it will get value from sipgrowth funtion
    var delayedstart = sipgrowth(monthlyinvestment, timedurationafterdelay, rate);    //amount get if start after delay it will get value from sipgrowth funtion

    var loss = starttoday - delayedstart;     //loss get from the delay of investment


    // returing result in an object form
    var allinvestmentinfo = {
        startfromtoday: Math.round(starttoday),
        delayedstart: Math.round(delayedstart),
        lossfromdelay: Math.round(loss)
    }
    return allinvestmentinfo;

}

//function for calculation of sipgrowth
function sipgrowth(monthlyinvestment, timeduration, rateofreturn) {
    var sipCumulation = 0;
    var sipGrowthResult = 0;

    for (let i = 1; i <= timeduration; i++) {
        sipCumulation = monthlyinvestment * (Math.pow((1 + rateofreturn / 100), i));
        sipGrowthResult += sipCumulation;
    }

    return sipGrowthResult;
}


module.exports = CalculateSip;