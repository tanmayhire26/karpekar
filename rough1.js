window.onload = () => {
	var subjects = document.getElementsByClassName("vishay");

	subjects[0].onclick = polity.showTask;
};

var pcount = 0;
var topicDOMs = [];
var taskCounter = 0;
var tasksSpans = [];
function Revise(subject, topics, tasks, divId) {
	this.subject = subject;
	this.topics = topics;
	this.tasks = tasks; //["Casual Reading","Detailed Reading","Making Notes","Answer Writing"];
	this.divId = divId;
}
let polity = new Revise(
	"Polity",
	[
		"Salient Features of Constitution",
		"Fundamental Rights",
		"Fundamental duties",
		"DPSP",
		"Writs",
	],
	["Casual Reading", "Detailed Reading", "Making Notes", "Answer Writing"],
	"pcontainer"
);

Revise.prototype.showTask = function () {
	// var topicsDOM = document.getElementsByClassName("topic");
	var count = 0;

	if (count % 2 == 0) {
		let k = 0;

		for (let topic of this.topics) {
			topicDOMs[k] = document.createElement("div");
			topicDOMs[k].innerHTML = topic;
			document.getElementById(this.divId).appendChild(topicDOMs[k]);
			// topicDOMs[k].setAttribute("class", "ptask");
			k++;
			count++;
			this.showTasks();
		}
	} else {
		document.getElementById(this.divId).innerHTML = "";
		count = 0;
	}
};

Revise.prototype.showTasks = function () {
	for (let item of topicDOMs) {
		item.onclick = this.thoseTasks;
	}
};
Revise.prototype.thoseTasks = function (e) {
	for (let i = 0; i < 5; i++) {
		let ptaskspan = document.createElement("span");

		ptaskspan.innerHTML = this.tasks[i];

		e.target.appendChild(ptaskspan);
		ptaskspan.onclick = this.changeColor;
		document.getElementById("statusButton").onclick = getStatus;
	}
	e.target.onclick = () => {
		document.getElementsByTagName("span").innerHTML = "";
	};
};
function changeColor(e) {
	alert("task completed");
	e.target.setAttribute("class", "done");
	e.target.onclick = this.removeColor;
}
function removeColor(e) {
	e.target.removeAttribute("class");
	alert("not completed !!?");
	e.target.onclick = this.changeColor;
}

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
