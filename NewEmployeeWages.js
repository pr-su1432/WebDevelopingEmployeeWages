//uc1
{
    const IS_PRESENT = 1
let empCheck = Math.floor(Math.random() * 10) % 2 ;
if (empCheck == IS_PRESENT){
    console.log("Employee is ABSENT:")
}
else
{
    console.log("Employee iS PRESENT:")
}
}
 //uc2
{
    const IS_PARTTIME = 1;  
    const IS_FULLTIME = 2;
    const IS_PARTTIME_HOURS = 4;
    const IS_FULLTIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
        
    let  empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3 ;
        switch(empCheck){
            case IS_PARTTIME:
                empHrs = 4;
                break;
            case IS_FULLTIME:
                empHrs = 8;
                break;
            default:
                empHrs = 0
        }
        
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Emp Wage:- " + empWage)
}
 //uc3
{
const IS_PARTTIME = 1;  
const IS_FULLTIME = 2;
const IS_PARTTIME_HOURS = 4;
const IS_FULLTIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkingHours(empCheck)
{
    switch(empCheck)
   {
    case IS_PARTTIME:
        
        return IS_PARTTIME_HOURS;
       
    case IS_FULLTIME:
    
        return IS_FULLTIME_HOURS;
            
    default:
        return 0;    
        
    }
}
let empCheck = Math.floor(Math.random() * 10) % 3 ;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Hour:- "+ empHrs + "Emp Wage:- " + empWage)
}
    
//uc4
const IS_PARTTIME = 1;  
const IS_FULLTIME = 2;
const IS_PARTTIME_HOURS = 4;
const IS_FULLTIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM0F_WORKING_DAYS = 20;
function getWorkingHours(empCheck)
{
    switch(empCheck)
   {
        case IS_PARTTIME:
            return IS_PARTTIME_HOURS;
        case IS_FULLTIME:
            return IS_FULLTIME_HOURS;
        default:
            return 0;
        
    }
}
let totalempHrs = 0;
for (let day =0; day < NUM0F_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalempHrs += getWorkingHours(empCheck);
}
let empWage = totalempHrs * WAGE_PER_HOUR;
console.log("TotalHours:- "+ totalempHrs + "Emp Wage:- " + empWage);
//uc5
{
const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const IS_WAGE_PER_HOUR = 20;
const NUM_0F_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
function getWorkingHours(empCheck)
{
    switch(empCheck)
   {
        case IS_PARTTIME:
            return IS_PARTTIME_HOURS;
        case IS_FULLTIME:
            return IS_FULLTIME_HOURS;
        default:
            return 0;
        
    }
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_0F_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let totalempWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Totaldays:- " + totalWorkingDays + "Total Hrs:- " + totalEmpHrs + "Emp Wage:- " + totalempWage)
console.log("TotalHours:- "+ totalEmpHrs + "Emp Wage:- " + totalempWage);
}
 //uc-6 
 {  
 const PART_TIME = 1;  
 const FULL_TIME = 2;
 const PARTTIME_HOURS = 4;
 const FULLTIME_HOURS = 8;
 const WAGEPER_HOUR = 20;
 function getWorkingHours(empCheck)
 {
     switch(empCheck)
    {
     case PART_TIME:
         
         return PARTTIME_HOURS;
        
     case FULL_TIME:
     
         return FULLTIME_HOURS;
             
     default:
         return 0;    
         
    }
} 
function calDailyWage(empHrs) {
    return empHrs * WAGEPER_HOUR;
}
const NUM_0FWORKING_DAYS = 20;
const MAX_HRS_INMONTH = 160; 
let TotalEmpHrs = 0;
let TotalWorkingDays = 0;
let empDailyWageArr = new Array();
while (TotalEmpHrs <= MAX_HRS_INMONTH && TotalWorkingDays < NUM_0FWORKING_DAYS) {
    TotalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    TotalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
}
let empWages = calDailyWage(TotalEmpHrs);
console.log("Total Days:- " + TotalWorkingDays + "Total Hrs:- " + TotalEmpHrs + "Emp Wage:- " + empWages);
 }
//Array Helper Functions
//uc7A -cal total wage using Array forEach traversal or reduce method
const PART_TIME = 1;  
 const FULL_TIME = 2;
 const PARTTIME_HOURS = 4;
 const FULLTIME_HOURS = 8;
 const WAGEPER_HOUR = 20;
 let empDailyWageArr = new Array();
 function getWorkingHours(empCheck)
 {
     switch(empCheck)
    {
     case PARTTIME:
         
         return PARTTIME_HOURS;
        
     case FULL_TIME:
     
         return FULLTIME_HOURS;
             
     default:
         return 0;    
         
    }
} 
let totalEmpWage = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
const NUM_0FWORKING_DAYS = 20;
const MAX_HRS_INMONTH = 160; 
function sum (dailyWage){
    totalEmpWage += dailyWage;
}
while (totalEmpHrs <= MAX_HRS_INMONTH && totalWorkingDays < NUM_0FWORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
}
empDailyWageArr.forEach(sum);
console.log("Total Days:- " + totalWorkingDays + "Total Hrs:- " + totalEmpHrs + "Emp Wage:- " + totalEmpWage);
        

 

          