var counter = 1;

var tops;

function showPolity() {
	if (counter % 2 != 0) {
		var top1 = document.createElement("span");
		top1.innerHTML = "Salient Features of Constitution  ";
		document.getElementById("polityDiv").appendChild(top1);

		var top2 = document.createElement("span");
		top2.innerHTML = "Fundamental Rights  ";
		document.getElementById("polityDiv").appendChild(top2);

		var top3 = document.createElement("span");
		top3.innerHTML = "Fundamental Duties  ";
		document.getElementById("polityDiv").appendChild(top3);

		var top4 = document.createElement("span");
		top4.innerHTML = "Directive Principles of state policy  ";
		document.getElementById("polityDiv").appendChild(top4);

		var top5 = document.createElement("span");
		top5.innerHTML = "Judiciary  ";
		document.getElementById("polityDiv").appendChild(top5);
		showTask();
		//insert tasks

		counter++;
	} else {
		counter = 1;
		document.getElementById("polityDiv").innerHTML = "";
	}
}
tops = document.getElementsByTagName("span");

function showTask() {
	let polityCounter = 1;
	if (polityCounter % 2 != 0) {
		for (let top of tops) {
			top.onclick = tasks;
		}
		polityCounter++;
	} else {
		polityCounter = 1;
		top.onclick = (e) => {
			e.target.innerHTML = "";
		};
	}
}
function tasks(e) {
	// alert("Dmeo");
	var task1 = document.createElement("span");
	task1.innerHTML = "First reading";
	e.target.appendChild(task1);
	var task2 = document.createElement("span");
	task1.innerHTML = "Second reading";
	e.target.appendChild(task2);
	var task3 = document.createElement("span");
	task3.innerHTML = "notes";
	e.target.appendChild(task3);
	var task4 = document.createElement("span");
	task4.innerHTML = "Q & A";
	e.target.appendChild(task4);
}
