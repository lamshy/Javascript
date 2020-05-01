/** ///////// Custom Struct /////////
 */
 
 /** Gobal const
  */
 var Weekname=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

/** Course Data
* weekday :
* Sun - 0
* Sat - 6   
*/  
class CourseData {
    constructor(sMajor, sCourseID,sSectionID,sTitle){
        this._Major=sMajor;
        this._CourseID=sCourseID;
        this._SectionID=sSectionID;
        this._Title=sTitle;
        this._ClassesData=[];
    }
 
    set Major(sVal) {this._Major=sVal;}
    get Major() {return this._Major;}

    set CourseID(sVal) {this._CourseID=sVal;}
    get CourseID() {return this._CourseID;}

    set SectionID(sVal) {this._SectionID=sVal;}
    get SectionID() {return this._SectionID;}

    set Title(sVal) {this._Title=sVal;}
    get Title() {return this._Title;}

    set ClassesData(cVal) {this._ClassesData.push(cVal);}
    get ClassesData() {return this._ClassesData;}

    get ToString(){return (this._Major+" " +this._CourseID);}
}

/**  Class Data
* weekday :
* Sun - 0
* Sat - 6   
*/  
class ClassData{
    constructor(WeekDay, StartTime,EndTime){
        this._WeekDay=WeekDay;
        this._StartTime=new Date("1970/01/01 "+StartTime);
        this._EndTime=new Date("1970/01/01 "+EndTime);
    }

    set WeekDay(sVal) {this._WeekDay=sVal;}
    get WeekDay() {return this._WeekDay;}

    set StartTime(sVal) {this._StartTime=new Date("1970/01/01 "+sVal+":00");}
    get StartTime() {return this._StartTime.getHours().toString().padStart(2, '0')+":"+
                    this._StartTime.getMinutes().toString().padStart(2, '0');}

    set EndTime(sVal) {this._EndTime=new Date("1970/01/01 "+sVal+":00");}
    get EndTime()  {return this._EndTime.getHours().toString().padStart(2, '0')+":"+
                    this._EndTime.getMinutes().toString().padStart(2, '0');}

    get FullStartTime(){return this._StartTime;}
    get FullEndTime(){return this._EndTime;}
    get ClassSchedule(){return Weekname[this._WeekDay] + " "+
                    this._StartTime.getHours().toString().padStart(2, '0')+":"+
                    this._StartTime.getMinutes().toString().padStart(2, '0')+" - "+
                    this._EndTime.getHours().toString().padStart(2, '0')+":"+
                    this._EndTime.getMinutes().toString().padStart(2, '0');}
}

/** Cost of Courses
*/
class CourseCost{
    constructor(CoursePointer, TimeCost,DateCost){
        this._CoursePointer=CoursePointer;
        this._TimeCost=TimeCost;
        this._DateCost=DateCost;
    }

    set CoursePointer(sVal) {this._CoursePointer=sVal;}
    get CoursePointer() {return this._CoursePointer;}

    set TimeCost(sVal) {this._TimeCost=sVal;}
    get TimeCost() {return this._TimeCost;}

    set DateCost(sVal) {this._DateCost=sVal;}
    get DateCost() {return this._DateCost;}

}


/**  return the courses data - Main body 
 * 0 - by shortest time   
 * 1 - by shortest day
 */
function ListCourses(sortingby){
	//get MyCourse from importCourse.js
	
	let MyCourse=ImportMyCourses();
	let result=GetWorksSchedule(MyCourse);

	//sorting the result
	//0 - by shortest time   1 - by shortest day
	if (sortingby===0){  //by time
		result=bubbleSort(result,"ShortestTime");
	}
	else if (sortingby===1){ //by day
		result=bubbleSort(result,"ShortestDay");
	}
	/*
	for (let i=0; i<result.length;i++){
		console.log("Soultion ["+i+"]: ");
		console.log("Total day: "+result[i][1]);
		console.log("Total Time: "+result[i][0]);
		console.log();
	}*/

	//console.log(totalClass);
	return result;
	
}


/** /////////////// Custom function ////////////
*/

/** return all works schedule of courses
 * input like:
 * let MyCourse = [];
 * MyCourse[0]= new CourseData("CIS","1001","001","Java");
 * MyCourse[0].ClassesData=new ClassData("1","09:00","10:00");
 * MyCourse[0].ClassesData=new ClassData("2","10:00","12:00");
*/    
function GetWorksSchedule(MyCourse){
    let arrTmp= GetCoursesByType (MyCourse);    //return array with "CourseData" type
    let arr=doExchange(arrTmp);                  //get all combo of the courses whatever work or not

    let len = arr.length;
    let result=[];
    for (let j=0;j<len;j++){
        let itWorks=false;
        //subArray compare each two elements
        let subArr=arr[j];
        if (isWork(subArr)){
            result.push(subArr);
        }
    }

    //count Total school stay time and Day
    //First element - Total school stay time
    //Second element - Total school stay day
    for (let i=0; i<result.length;i++){
        result[i].splice( 0, 0, 0);
        result[i].splice( 0, 0, 0);
        //console.log(result[i]);
        //7 day per week, so it have 7 elements
        let tmpArray=new Array(7);
        for (let m=0; m<tmpArray.length;m++){
            tmpArray[m]=new Array();
        }

        for (let j=2; j<result[i].length;j++){
            for (let k=0; k<result[i][j].ClassesData.length;k++){
                let iId=result[i][j].ClassesData[k].WeekDay;
                //console.log(i+" "+iId);
                tmpArray[iId].push(result[i][j].ClassesData[k]);
                //totalClass++;
            }
        }

        //Count total day and Time for this schedule soultion
        let tmpTotalDay=0;  //Count total day
        let tmpTotalTime=0;  //Count total Time

        for (let n=0;n<tmpArray.length;n++){
            //Total school stay day
            if (tmpArray[n].length>0){
                tmpTotalDay++;  //Count Total day
                if (tmpArray[n].length>1){
                    tmpArray[n]=bubbleSort (tmpArray[n],"StartTime");
                    for (let p=tmpArray[n].length-1;p>0;p--){
                        //console.log(tmpArray[n][p].FullStartTime);
                        //console.log(tmpArray[n][p-1].FullEndTime);
                        tmpTotalTime=tmpTotalTime+
                                    tmpArray[n][p].FullStartTime.getTime()-
                                    tmpArray[n][p-1].FullEndTime.getTime();
                        //console.log(tmpTotalTime);
                        
                    }
                } 
            }
        }
        
        //Second element - Total school stay day
        result[i][1]=tmpTotalDay;
        result[i][0]=tmpTotalTime/(1000*60);

    /*
        console.log("Soultion ["+i+"]: ");
        console.log("Total day: "+result[i][1]);
        console.log("Total Time: "+result[i][0]);
        console.log();
    */
    }
    return result;
}

/** Return Courses array by type
* return array with "CourseData" type
*/
function GetCoursesByType (arrCourses){
    let OrzCoursesByType = [];

    for (let i = 0; i < arrCourses.length; i++) {
        //console.log(arrCourses[i].ToString);
        let needAdd=true;
        let j=0;
        while (j<OrzCoursesByType.length){
            if (OrzCoursesByType[j].length>0){
                if (OrzCoursesByType[j][0].ToString===arrCourses[i].ToString){
                    OrzCoursesByType[j].push(arrCourses[i]);
                    needAdd=false;
                    break;
                }
            }
            j++;
        }
        if (needAdd){
            OrzCoursesByType[j] = new Array();
            OrzCoursesByType[j].push(arrCourses[i]);
        }
    }
    return OrzCoursesByType;
}

/** make all the combo of the array
* no matter work or not, just list all combo
* Input array like :
* arr = [['a', 'b', 'c'], [1, 2], ['x', 'y', 'z','w']];
*/
function doExchange(arr){
    let len = arr.length;
    // 当数组大于等于2个的时候
    if(len >= 2){
        // 第一个数组的长度
        let len1 = arr[0].length;
        // 第二个数组的长度
        let len2 = arr[1].length;
        // 2个数组产生的组合数
        let lenBoth = len1 * len2;
        //  申明一个新数组
        let items = new Array(lenBoth);
        // 申明新数组的索引
        let index = 0;
        for(let i=0; i<len1; i++){
            for(let j=0; j<len2; j++){
                if(arr[0][i] instanceof Array){
                    items[index] = arr[0][i].concat(arr[1][j]);
                }else{
                    items[index] = [arr[0][i]].concat(arr[1][j]);
                }
                index++;
            }
        }
        let newArr = new Array(len -1);
        for(let i=2;i<arr.length;i++){
            newArr[i-1] = arr[i];
        }
        newArr[0] = items;
        return doExchange(newArr);
    }else{
        return arr[0];
    }
}

/** Check a sub array  have no TimeConflict. 
*/
function isWork(subArr){
    for (let m = 0; m < subArr.length; m++){
        let a = subArr[m]; 
        //检查这一行的值                 
        for (let k = 0; k < subArr.length - 1 - m; k++){
            let b = subArr[m + 1 + k];  
            if (IsTimeConflict(a,b)) {
                return false;}
        }
    }
    return true;
}

/** Check if two class have time conflict. 
*/
function IsTimeConflict(a,b){
    for (let i=0; i<a.ClassesData.length;i++){
        for (let j=0; j<b.ClassesData.length;j++){
            //if two courses not in a same day, they will not Conflict
            //console.log(a);
            if (a.ClassesData[i].WeekDay!=b.ClassesData[j].WeekDay){
                continue;}

            // at same day, check time conflict
            if (((a.ClassesData[i].StartTime>=b.ClassesData[j].StartTime) && (a.ClassesData[i].StartTime<=b.ClassesData[j].EndTime)) || 
                ((a.ClassesData[i].EndTime>=b.ClassesData[j].StartTime) && (a.ClassesData[i].EndTime<=b.ClassesData[j].EndTime))){
                //if A and B intersect
                return true;}
            else if ((a.ClassesData[i].StartTime<=b.ClassesData[j].StartTime) && (a.ClassesData[i].EndTime>=b.ClassesData[j].EndTime)){ 
                //if A include B
                return true;}
        }
    }
    return false;
}

/**  sort function
 * a - Array for sorting
 * sortWhat 
 *      StartTime - Sorting the class schedule  
 *      ShortestDay - Sorting the soultion order by shortest weekday in school 
 *      ShortestTime - Sorting the soultion order by shortest time in school
 */
function bubbleSort(a,sortWhat) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            let cpA,cpB;
            if (sortWhat==="StartTime"){
                cpA= a[i].StartTime;
                cpB= a[i+1].StartTime;
            }
            else if (sortWhat==="ShortestDay"){
                cpA= a[i][1];
                cpB= a[i+1][1]; 
            }
            else if (sortWhat==="ShortestTime"){
                cpA= a[i][0];
                cpB= a[i+1][0]; 
            }
            else {return a;}

            if (cpA > cpB) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return a;
}