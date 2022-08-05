var topics = document.getElementsByClassName("topic");
var count = 0;
var pcount = 0;
var ptask = [
	"1st Reading",
	"2nd Reading",
	"Notes Making",
	"analysis",
	"Answer writing",
];
var taskCounter = 0;
var tasksSpans = [];

//------------------------Know more function------------------------------------------------------------

function showKnowMore() {
	document.getElementById("knowMore").removeAttribute("hidden");
	document.getElementById(
		"knowMore"
	).innerHTML = `<b> 1st Reading</b>: read every word of the content without thinking much to get the basic idea of the topic<br><b>2nd Reading</b>: This is a thorough reading of the topic where you take intermittent pauses to make sense of the content and relate it to your core learning <br><b>Notes Making</b>: Make detailed notes of the topic preferrably in your own language so that you won't need to refer the book right before exams<br><b>Analysis</b>: Here you do though experiments, do analogies, make some diagrams to draw pattens and conclusions. At this stage you should be able to speak on the topic in front of an audience without looking in the book or notes<br><b>Answer writing</b>: Find MCQs and mains questions from previous years or from our portal and write them in UPSC specific format`;
	document.getElementById("knowMore").onclick = removeknowmore;
}
function removeknowmore(e) {
	e.target.setAttribute("style.display", "none");
	e.target.onclick = showKnowMore;
}

//---------------------------------Fucntion for Polity-------------------------------------------------
function showTopics() {
	if (count % 2 == 0) {
		let ptopic1 = document.createElement("div");
		ptopic1.innerHTML = "State Executive";
		document.getElementById("pcontainer").appendChild(ptopic1);
		ptopic1.setAttribute("class", "ptask");

		let ptopic2 = document.createElement("div");
		ptopic2.innerHTML = "State Legislative";
		document.getElementById("pcontainer").appendChild(ptopic2);
		ptopic2.setAttribute("class", "ptask");

		let ptopic3 = document.createElement("div");
		ptopic3.innerHTML = "Union Executive";
		document.getElementById("pcontainer").appendChild(ptopic3);
		ptopic3.setAttribute("class", "ptask");

		let ptopic4 = document.createElement("div");
		ptopic4.innerHTML = "Union Legislative";
		document.getElementById("pcontainer").appendChild(ptopic4);
		ptopic4.setAttribute("class", "ptask");
		count++;
		showTasks();
	} else {
		document.getElementById("pcontainer").innerHTML = "";
		count = 0;
	}
}

function showTasks() {
	let topics = document.getElementsByClassName("ptask");
	for (let topic of topics) {
		topic.onclick = tasks;
	}
}

function tasks(e) {
	for (let i = 0; i < 5; i++) {
		let ptaskspan = document.createElement("span");

		ptaskspan.innerHTML = ptask[i];

		e.target.appendChild(ptaskspan);
		ptaskspan.onclick = changeColor;
		document.getElementById("statusButton").onclick = getStatus;
	}
	e.target.onclick = () => {
		document.getElementsByTagName("span").innerHTML = "";
	};
}
// function tickTasks() {
// 	var allTasks = document.getElementsByTagName("span");
// 	for (task of allTasks) {
// 		task.onclick = changeColor;
// 	}
// }

function changeColor(e) {
	alert("task completed");
	e.target.setAttribute("class", "done");
	e.target.onclick = removeColor;
}
function getStatus() {
	tasksSpans = document.getElementsByTagName("span");
	console.log(tasksSpans.length);
	for (let element of tasksSpans) {
		let temp = element.getAttribute("class");
		console.log(temp);
		if (temp == "done") {
			taskCounter++;
		}
	}
	document.getElementById("status").innerHTML =
		taskCounter +
		" tasks completed out of 20, <br> Completion rate : " +
		(taskCounter / 20) * 100 +
		" %";
}

function removeColor(e) {
	e.target.removeAttribute("class");
	alert("not completed !!?");
	e.target.onclick = changeColor;
}

//---------------------------------------For History-----------------------------------------
// var topics = document.getElementsByClassName("topic");
// var count = 0;
// var pcount = 0;
// var ptask = [
// 	"1st Reading",
// 	"2nd Reading",
// 	"Notes Making",
// 	"analysis",
// 	"Answer writing",
// ];
// var taskCounter = 0;
// var tasksSpans = [];
// function showTopics() {
// 	if (count % 2 == 0) {
// 		let ptopic1 = document.createElement("div");
// 		ptopic1.innerHTML = "State Executive";
// 		document.getElementById("pcontainer").appendChild(ptopic1);
// 		ptopic1.setAttribute("class", "ptask");

// 		let ptopic2 = document.createElement("div");
// 		ptopic2.innerHTML = "State Legislative";
// 		document.getElementById("pcontainer").appendChild(ptopic2);
// 		ptopic2.setAttribute("class", "ptask");

// 		let ptopic3 = document.createElement("div");
// 		ptopic3.innerHTML = "Union Executive";
// 		document.getElementById("pcontainer").appendChild(ptopic3);
// 		ptopic3.setAttribute("class", "ptask");

// 		let ptopic4 = document.createElement("div");
// 		ptopic4.innerHTML = "Union Legislative";
// 		document.getElementById("pcontainer").appendChild(ptopic4);
// 		ptopic4.setAttribute("class", "ptask");
// 		count++;
// 		showTasks();
// 	} else {
// 		document.getElementById("pcontainer").innerHTML = "";
// 		count = 0;
// 	}
// }

// function showTasks() {
// 	let topics = document.getElementsByClassName("ptask");
// 	for (let topic of topics) {
// 		topic.onclick = tasks;
// 	}
// }

// function tasks(e) {
// 	for (let i = 0; i < 5; i++) {
// 		let ptaskspan = document.createElement("span");

// 		ptaskspan.innerHTML = ptask[i];

// 		e.target.appendChild(ptaskspan);
// 		ptaskspan.onclick = changeColor;
// 		document.getElementById("statusButton").onclick = getStatus;
// 	}
// 	e.target.onclick = () => {
// 		document.getElementsByTagName("span").innerHTML = "";
// 	};
// }
// // function tickTasks() {
// // 	var allTasks = document.getElementsByTagName("span");
// // 	for (task of allTasks) {
// // 		task.onclick = changeColor;
// // 	}
// // }

// function changeColor(e) {
// 	alert("task completed");
// 	e.target.setAttribute("class", "done");
// 	e.target.onclick = removeColor;
// }
// function getStatus() {
// 	tasksSpans = document.getElementsByTagName("span");
// 	console.log(tasksSpans.length);
// 	for (let element of tasksSpans) {
// 		let temp = element.getAttribute("class");
// 		console.log(temp);
// 		if (temp == "done") {
// 			taskCounter++;
// 		}
// 	}
// 	document.getElementById("status").innerHTML =
// 		taskCounter +
// 		" tasks completed out of 20, <br> Completion rate : " +
// 		(taskCounter / 20) * 100 +
// 		" %";
// }

// function removeColor(e) {
// 	e.target.removeAttribute("class");
// 	alert("not completed !!?");
// 	e.target.onclick = changeColor;
// }
