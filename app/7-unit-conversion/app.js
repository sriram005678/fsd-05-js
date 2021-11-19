
   let unitEconomicsForm = document.getElementById('unit-economics-form'), 
    //    calculateBtn = document.getElementById('calculate'),
       sellingPriceInput = document.getElementById('selling-price'),
       cogsInput = document.getElementById('cogs'),
       grossMarginInput = document.getElementById('gross-margin'),
       salesMarketingInput = document.getElementById('sales-marketing'),
       operationsCostInput = document.getElementById('operating-cost'),
       netMarginInput = document.getElementById('net-margin'),
       sellingPriceValue, cogsValue, grossMarginValue, salesMarketingValue,operationsCostValue,
       netMarginValue;
       
//    console.log(calculateBtn);

function calculate(e){
        e.preventDefault();


        // console.log('hello');

        sellingPriceValue = sellingPriceInput.value;
        cogsValue = cogsInput.value;
        grossMarginValue = sellingPriceValue - cogsValue;
        // console.log(grossMarginValue);

        grossMarginInput.value = grossMarginValue;



        salesMarketingValue = salesMarketingInput.value;
        operationsCostValue = operationsCostInput.value;
        netMarginValue = grossMarginValue - salesMarketingValue - operationsCostValue;

        netMarginInput.value = netMarginValue;
}


unitEconomicsForm.addEventListener('submit',calculate);
