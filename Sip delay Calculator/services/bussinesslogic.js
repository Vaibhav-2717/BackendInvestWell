

const CalculateSip = (req,res)=>{
   
    // const{monthlyinvestment,investmentperiod,rateofreturn,delay}=req.body;

    var monthlyinvestment=req.body.monthlyinvestment;
    var investmentperiod=req.body.investmentperiod;
    var rateofreturn =req.body.rateofreturn;
    var delay=req.body.delay;
    
      var timeduration =(investmentperiod)*12;
      var rate =(rateofreturn)/12;
      var timedurationafterdelay = timeduration-delay;
     
      var starttoday = sipgrowth(monthlyinvestment,timeduration,rate);
      var delayedstart = sipgrowth(monthlyinvestment,timedurationafterdelay,rate);

      var loss = starttoday-delayedstart;
      res.send(loss);

}

function sipgrowth(monthlyinvestment,timeduration,rateofreturn) {
    var sipCumulation=0;
    var sipGrowthResult=0;

    for (let i = 1; i <= timeduration; i++) {
        sipCumulation = monthlyinvestment * (Math.pow((1+rateofreturn/100),i));
        sipGrowthResult += sipCumulation;
    }

    return sipGrowthResult;
}

//  console.log(Math.round(sipgrowth(5000,60,1)));

module.exports=CalculateSip;