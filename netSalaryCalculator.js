const basicSalary = parseFloat(prompt("Enter basic salary: "));
//enter basic salary
const benefits = parseFloat(prompt("Enter benefits: "));
//enter benefits

const taxRate1 = 0.1
const taxRate2 = 0.25
const taxRate3 = 0.3

const  nssfStandardRate = 0.06

const grossSalary = basicSalary + benefits ;
//grossSalary=basicSalary+benefits

let tax;
if (grossSalary <= 24000) {
    tax = grossSalary *taxRate1;
  //if gross salary is less or equal to 24000, tax is grossSalary*taxRate1
  } else if (grossSalary <= 32333) {
    tax = (grossSalary - 24000) * taxRate2;
  //if gross salary is less or equal to 32333, tax is grossSalary*taxRate2
  } else if (grossSalary > 32333) {
    tax =  (grossSalary - 32333) *taxRate3;
  //if gross salary is more than 32333, tax is grossSalary*taxRate3
  }
   else {
    tax = 0
     //otherwise, tax=0
  }

  function NHIF(basic){
    if(basic<=5999){
        deductionfornhif=150
      //if basic salary is less or equal to 5999, nhif deduction is 150
    }
    else if(basic>=6000 && basic<=7999){
        deductionfornhif=300
      //if basic salary is 6000 or more than 6000 and less than or equal to 7999, nhif deduction is 300
    }
    else if(basic>=8000 && basic<=11999){
        deductionfornhif=400
      //if basic salary is 8000 or more than 8000 and less than or equal to 11999, nhif deduction is 400
    }
    else if(basic>=12000 && basic<=14999){
        deductionfornhif=500
      //if basic salary is 12000 or more than 12000 and less than or equal to 14999, nhif deduction is 500
    }
    else if(basic>=15000 && basic<=19999){
        deductionfornhif=600
      //if basic salary is 15000 or more than 15000 and less than or equal to 19999, nhif deduction is 600
    }
    else if(basic>=20000 && basic<=24999){
        deductionfornhif=750
      //if basic salary is 20000 or more than 20000 and less than or equal to 24999, nhif deduction is 750
    }
    else if(basic>=25000 && basic<=29999){
        deductionfornhif=850
      //if basic salary is 25000 or more than 25000 and less than or equal to 29999, nhif deduction is 850
    }
    else if(basic>=30000 && basic<=34999){
        deductionfornhif= 900
      //if basic salary is 30000 or more than 30000 and less than or equal to 34999, nhif deduction is 900 
        
    }
    else if(basic>=35000 && basic<=39999){
        deductionfornhif=950
      //if basic salary is 35000 or more than 35000 and less than or equal to 39999, nhif deduction is 950
    }
    else if(basic>=40000 && basic<=44999){
        deductionfornhif=1000
      //if basic salary is 40000 or more than 40000 and less than or equal to 44999, nhif deduction is 1000
    }
    else if(basic>=45000 && basic<=49999){
        deductionfornhif=1100
      //if basic salary is 45000 or more than 45000 and less than or equal to 49999, nhif deduction is 1100
    }
    else if(basic>=50000 && basic<=59999){
        deductionfornhif=1200
      //if basic salary is 50000 or more than 50000 and less than or equal to 59999, nhif deduction is 1200
    }
    else if(basic>=60000 && basic<=69999){
        deductionfornhif=1300
      //if basic salary is 60000 or more than 60000 and less than or equal to 69999, nhif deduction is 1300
    }
    else if(basic>=70000 && basic<=79999){
        deductionfornhif=1400
      //if basic salary is 70000 or more than 70000 and less than or equal to 79999, nhif deduction is 1400
    }
    else if(basic>=80000 && basic<=89999){
        deductionfornhif=1500
      //if basic salary is 80000 or more than 80000 and less than or equal to 89999, nhif deduction is 1500
    }
    else if(basic>=90000 && basic<=99999){
        deductionfornhif=1600
      //if basic salary is 90000 or more than 90000 and less than or equal to 99999, nhif deduction is 1600
    }
    else if(basic>=100000){
        deductionfornhif=1700
      //if basic salary is 100000, nhif deduction is 1700
    }
    else{
        return "The value enetred is invalid"
      //otherwise value entered is invalid
    }
    return deductionfornhif;
    //if value is invalid, return nhif deduction
    }
let nhifDeduction =NHIF(grossSalary)

const nssfDeduction = grossSalary * nssfStandardRate;
const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;


console.log(`Payee (Tax): ${tax}`);

console.log(`Net Salary: ${netSalary}`);
