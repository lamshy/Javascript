// Alex -  - JS
'use strict';



$(document).ready(function() {
	
	
	
	//first
	let clicker1 = $('#SortTime');
	clicker1.on('click', clickHandler1);

	function clickHandler1() {
		console.log("Button pressed!");
		ListContent(0);
	}

	//second
	let clicker2 = $('#SortDay');
	clicker2.on('click', clickHandler2);

	function clickHandler2() {
		ListContent(1);
	}
	
	function ListContent(sortType){
		let result=ListCourses(sortType);
		
		let sContent="<tr><th>SN</th><th>Time(min.)</th><th>Day</th>";
		for (let k=2;k<result[0].length;k++){
			sContent=sContent+
					"<th>"+result[0][k].ToString+"</th>";
			
		}
		sContent=sContent+"</tr>";

		for (let i=0;i<result.length;i++){
			sContent=sContent+"<tr><td>"+(i+1)+"</td><td>"+result[i][0]+"</td><td>"+result[i][1]+"</td>";
			for (let j=2;j<result[i].length;j++){
				sContent=sContent+
					"<td>"+result[i][j].SectionID+"</td>"
			}
			sContent=sContent+"</tr>";
		}
		
		$('#TableListContent').html(sContent);
		
	}
	
});












