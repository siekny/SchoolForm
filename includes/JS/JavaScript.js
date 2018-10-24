function add(){
	var total_student = document.getElementById("total-student").innerText;//Catch Value
	total_student = Number(total_student);
	total_student = total_student+1;
	document.getElementById("total-student").innerHTML = total_student;//Throw Value

	var  Total = total_student;
	var stu_id = document.getElementById("stu-id").value;
	var stu_name = document.getElementById("stu-name").value;
	var gender = document.getElementById("gender").value;
	var date = document.getElementById("date").value;
	var current_address = document.getElementById("current-address").value;
	var contact = document.getElementById("contact").value;
	var course = document.getElementById("course").value;
	var room_id = document.getElementById("room-id").value;
	var payment = document.getElementById("payment").value;

	var stu_info = [stu_id,stu_name,gender,date,current_address,contact,course,room_id,payment];
	var addRow = document.createElement("tr");// <tr></tr>

	for(var i=0; i<9; i++){
		var addCol = document.createElement("td");// <td></td>
		var text = document.createTextNode(stu_info[i]);

		addCol.appendChild(text); //<td>gender</td>
		addRow.appendChild(addCol); //<tr><td>gender</td></tr>
	}

	var list = document.getElementById("table");
	list.appendChild(addRow);
}
