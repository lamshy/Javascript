/** Enter or import your courses schedule here 
 *    
 * 
 */
function ImportMyCourses(){
	let MyCourse = [];

	//  !!! Enter or import your courses schedule below !!!
	
	MyCourse[0]= new CourseData("CIS","3223","001","Data Structures and Algorithms");
	MyCourse[0].ClassesData=new ClassData("1","16:00","16:50");
	MyCourse[0].ClassesData=new ClassData("3","16:00","16:50");
	MyCourse[0].ClassesData=new ClassData("5","16:00","16:50");

	MyCourse[2]=new CourseData("CIS","3223","002","Data Structures and Algorithms");
	MyCourse[2].ClassesData=new ClassData("2","12:30","13:50");
	MyCourse[2].ClassesData=new ClassData("4","12:30","13:50");

	//
	MyCourse[1]=new CourseData("CIS","3207","001"," Introduction to Systems Programming and Operating Systems");
	MyCourse[1].ClassesData=new ClassData("2","12:30","13:50");
	MyCourse[1].ClassesData=new ClassData("4","12:30","13:50");
	MyCourse[1].ClassesData=new ClassData("3","09:30","10:50");

	MyCourse[3]=new CourseData("CIS","3207","002"," Introduction to Systems Programming and Operating Systems");
	MyCourse[3].ClassesData=new ClassData("2","12:30","13:50");
	MyCourse[3].ClassesData=new ClassData("4","12:30","13:50");
	MyCourse[3].ClassesData=new ClassData("3","09:30","10:50");

	MyCourse[4]=new CourseData("CIS","3207","003"," Introduction to Systems Programming and Operating Systems");
	MyCourse[4].ClassesData=new ClassData("2","15:30","16:50");
	MyCourse[4].ClassesData=new ClassData("4","15:30","16:50");
	MyCourse[4].ClassesData=new ClassData("3","13:00","14:50");


	MyCourse[5]=new CourseData("CIS","3207","004"," Introduction to Systems Programming and Operating Systems");
	MyCourse[5].ClassesData=new ClassData("2","12:30","13:50");
	MyCourse[5].ClassesData=new ClassData("4","12:30","13:50");
	MyCourse[5].ClassesData=new ClassData("3","13:00","14:50");
	//

	MyCourse[6]=new CourseData("CIS","3308","001","Web Application Programming");
	MyCourse[6].ClassesData=new ClassData("2","15:30","16:50");
	MyCourse[6].ClassesData=new ClassData("4","15:30","16:50");
	MyCourse[6].ClassesData=new ClassData("3","13:00","14:50");

	//
	MyCourse[7]=new CourseData("PHYS","1061","001","Elementary Classical Physics I");
	MyCourse[7].ClassesData=new ClassData("1","8:00","09:10");
	MyCourse[7].ClassesData=new ClassData("3","8:00","09:10");
	MyCourse[7].ClassesData=new ClassData("5","8:00","09:10");

	MyCourse[8]=new CourseData("PHYS","1061","003","Elementary Classical Physics I");
	MyCourse[8].ClassesData=new ClassData("1","17:30","19:10");
	MyCourse[8].ClassesData=new ClassData("3","17:30","19:10");

	MyCourse[9]=new CourseData("PHYS","1061","004","Elementary Classical Physics I");
	MyCourse[9].ClassesData=new ClassData("1","13:20","14:30");
	MyCourse[9].ClassesData=new ClassData("3","13:20","14:30");
	MyCourse[9].ClassesData=new ClassData("5","13:20","14:30");

	MyCourse[10]=new CourseData("PHYS","1061","006","Elementary Classical Physics I");
	MyCourse[10].ClassesData=new ClassData("2","11:40","13:20");
	MyCourse[10].ClassesData=new ClassData("4","11:40","13:20");

	//
	MyCourse[11]=new CourseData("PHYS","1061LAB","043"," Physics LAB");
	MyCourse[11].ClassesData=new ClassData("1","13:20","15:10");

	MyCourse[12]=new CourseData("PHYS","1061LAB","044"," Physics LAB");
	MyCourse[12].ClassesData=new ClassData("2","9:00","10:50");

	MyCourse[13]=new CourseData("PHYS","1061LAB","045"," Physics LAB");
	MyCourse[13].ClassesData=new ClassData("2","11:00","12:50");

	MyCourse[14]=new CourseData("PHYS","1061LAB","046"," Physics LAB");
	MyCourse[14].ClassesData=new ClassData("2","13:00","14:50");

	MyCourse[15]=new CourseData("PHYS","1061LAB","047"," Physics LAB");
	MyCourse[15].ClassesData=new ClassData("3","09:20","11:10");

	MyCourse[16]=new CourseData("PHYS","1061LAB","048"," Physics LAB");
	MyCourse[16].ClassesData=new ClassData("3","11:20","13:10");

	MyCourse[17]=new CourseData("PHYS","1061LAB","050"," Physics LAB");
	MyCourse[17].ClassesData=new ClassData("4","11:00","12:50");

	MyCourse[18]=new CourseData("PHYS","1061LAB","051"," Physics LAB");
	MyCourse[18].ClassesData=new ClassData("4","13:00","14:50");

	MyCourse[19]=new CourseData("PHYS","1061LAB","052"," Physics LAB");
	MyCourse[19].ClassesData=new ClassData("3","15:20","17:10");

	MyCourse[20]=new CourseData("PHYS","1061LAB","053"," Physics LAB");
	MyCourse[20].ClassesData=new ClassData("4","09:00","10:50");

	MyCourse[21]=new CourseData("PHYS","1061LAB","054"," Physics LAB");
	MyCourse[21].ClassesData=new ClassData("2","15:00","16:50");

	MyCourse[22]=new CourseData("PHYS","1061LAB","056"," Physics LAB");
	MyCourse[22].ClassesData=new ClassData("1","15:30","17:20");

	
	// !!! Do Not enter anything below  !!!
	return MyCourse;
}
