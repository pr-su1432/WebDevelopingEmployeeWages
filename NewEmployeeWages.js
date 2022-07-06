///uc7
const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_0F_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
function getWorkingHours(empCheck)
{
    switch(empCheck)
   {
        case IS_PART_TIME:
            return IS_PART_TIME_HOURS;
        case IS_FULL_TIME:
            return IS_FULL_TIME_HOURS;
        default:
            return 0;
        
    }
}
function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
 }
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArry = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_0F_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, calDailyWage(empHrs));
    empDailyHrsAndWageArry.push(
   {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage: calDailyWage(empHrs),
            toString(){
                return '\nDay' + this.dayNum + '=> Working Hours is ' +" "+ this.dailyHours + " "+'And Wage Earned=> ' + " "+ this.dailyWage
            },
    });
    
}
let empWage = calDailyWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("Total Days:- " + totalWorkingDays  + ", Total Working Hours:- " + totalEmpHrs + ", Employee Wage:- " + empWage);
//Array Helper Functions
//UC 7A  Calc total Wage using Array forEach traversal or reduce method

let totalEmpWage = 0;
function sum (dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days:- " +  totalWorkingDays + " " + "Total Hrs:- " +  totalEmpHrs + " " + "Emp Wage:- " +  totalEmpWage );
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log(" Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));
//7B show the Day along with Daily Wage using ArrayMap
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    //return dailyCounter + " = " + dailyWage;
    return "Day" + dailyCounter + " = " + "wage" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log(" Daily wage using map :- " + mapDayWithWageArr);
//7C Show Days when Full time wage of 160 were earned using filter
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log(" Daily wage filter when fulltime wage is 160 earned:- " + fullDayWageArr);
//7D  Find the first occurence when Full Time Wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log(" First full time wage using find function " + mapDayWithWageArr.find(findFullTimeWage));
//7E -  Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log(" Check all elment having full time wage using every function : " + fullDayWageArr.every(isAllFullTimeWage));
//7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("7F Check if any part time wage using some function : " + mapDayWithWageArr.some(isAnyPartTimeWage));
//7G - Find the number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Total number of days employee worked :- " + empDailyWageArr.reduce(totalDaysWorked, 0));
//uc8  Map Functions
console.log("Employee Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
//UC9: Arrow Funtions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).filter(dailyHours => dailyHours > 0).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9: Emp Wage with Arrow: " + "Total Hours: " + totalHours + " Total Wage: " + totalSalary);

let nonWorkingDays = new Array();
let parttimeWorkingDays = new Array();
let fulltimeWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if (value == 8) fulltimeWorkingDays.push(key);
    else if (value == 4) parttimeWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Fulltime Working Days: "+ fulltimeWorkingDays);
console.log("Parttime Working Days: "+ parttimeWorkingDays);
console.log("Non Working Days: "+ nonWorkingDays);
//uc-10
console.log("Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArry);