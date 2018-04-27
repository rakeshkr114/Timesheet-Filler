//Written By: Rakesh Yadav
//Created on: April 25th, 2018


window.onload = function() {

function fill(){

hrs_value=document.getElementById("hrs_value").value;

chrome.tabs.query({ "url": "https://essapps.mindtree.com/sites/TimeSheet*" }, function (tabs) {

	// if no utube url, return
	if(tabs.length==0)
		return;

	if(hrs_value==null){
		alert("Please enter a value (e.g, 8.5)");
		return;
	}		

	tab=tabs[0];
	
	chrome.tabs.executeScript(tab.id, {
            		code: `	var hrs_value='`+hrs_value+`';
				var day1_el=document.getElementById("ctl00_PlaceHolderMain_gvUsers_ctl02_txtEffortDay1");
				var day2_el=document.getElementById("ctl00_PlaceHolderMain_gvUsers_ctl02_txtEffortDay2");
				var day3_el=document.getElementById("ctl00_PlaceHolderMain_gvUsers_ctl02_txtEffortDay3");
				var day4_el=document.getElementById("ctl00_PlaceHolderMain_gvUsers_ctl02_txtEffortDay4");
				var day5_el=document.getElementById("ctl00_PlaceHolderMain_gvUsers_ctl02_txtEffortDay5");

				if(day1_el.readOnly == false)
					day1_el.value =hrs_value ;
				if(day2_el.readOnly == false)
					day2_el.value =hrs_value ;
				if(day3_el.readOnly == false)
					day3_el.value =hrs_value ;
				if(day4_el.readOnly == false)
					day4_el.value =hrs_value ;
				if(day5_el.readOnly == false)
					day5_el.value =hrs_value ;`
	},function (attr_value) { // Execute your code
	}); // end of chrome executescript for next btn title and play/pause btn attribute
});  // tabs query end

};

document.getElementById('fill_btn').onclick = fill;

// link input text field with "Enter" button
	document.getElementById("hrs_value")
		.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("fill_btn").click();
		}
	});  // end of linking Enter btn


}  //window load end



