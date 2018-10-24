
// button save class
$(document).on("click","#saveClass",function(){
	roomname = $("#roomname").val();
	roomnumber = $("#roomnumber").val();
	studentlimit = $("#studentlimit").val();
	hallcharge = $("#hallcharge").val();
	
	var string = "";
	var compareRoomname = string.localeCompare(roomname);
	var compareRoomnumber = string.localeCompare(roomnumber);
	var compareStudentlimit = string.localeCompare(studentlimit);
	var compareHallcharge = string.localeCompare(hallcharge);

	$("#roomname").keypress(function(){
		$("#InvalidRoomname").hide();
	});
	$("#roomnumber").keypress(function(){
		$("#InvalidRoomnumber").hide();
	});
	$("#studentlimit").keypress(function(){
		$("#InvalidStudentlimit").hide();
	});
	$("#hallcharge").keypress(function(){
		$("#InvalidHallcharge").hide();
	});

	if(compareRoomname == 0){
		$(document).ready(function(){
			$("#InvalidRoomname").show();
			$(".borderInvalid").show();
		});
	}
	else if(compareRoomnumber == 0) {
		$(document).ready(function(){
			$("#InvalidRoomnumber").show();
		});
	}
	else if(compareStudentlimit == 0) {
		$(document).ready(function(){
			$("#InvalidStudentlimit").show();
		});
	}
	else if(compareHallcharge == 0) {
		$(document).ready(function(){
			$("#InvalidHallcharge").show();
		});
	}
	else {
		numberOfStudent = document.getElementById("NumberOfStudent").innerText;
		numberOfStudent = Number(numberOfStudent);

		numberOfStudent = numberOfStudent + 1;
		id = numberOfStudent;
		document.getElementById("NumberOfStudent").innerHTML = numberOfStudent;

		tr = "<tr><td>"+id+"</td><td>"+roomname+"</td><td>"+roomnumber+"</td><td>"+studentlimit+"</td><td>"+hallcharge+"</td><td><input type='checkbox' title='Please check it to remove its column' name='record'></td></tr>";
		$("tbody").append(tr);

		document.getElementById("totalclass").classList.add("show");

		document.getElementById("roomname").value = "";
		document.getElementById("roomnumber").value = "";
		document.getElementById("studentlimit").value = "";
		document.getElementById("hallcharge").value = "";
	}

	
});

$(document).on("click","#remove",function(){
	$("table tbody").find('input[name="record"]').each(function(){ 
		if($(this).is(":checked")){
		swal({
			  title: "Are you sure?",
			  text: "Once deleted, you will not be able to recover this data file!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
			    swal("Poof! Your data file has been deleted!", {
			      icon: "success",
			    });
			    $(this).parents("tr").remove();
				numberOfStudent = numberOfStudent - 1;
				document.getElementById("NumberOfStudent").innerHTML = numberOfStudent;
			  } else {
			    swal("Your data file is safe!");
			  }
			});
		}
		
		// else {
		// 	swal("Please Check the box before clicking Button Delete !")
		// }
	});
	
});


$(document).on("click","#btnAddSubject",function(){

	subjectName = $("#subjectName").val();
	subjectCode = $("#subjectCode").val();
	year = $("#year").val();
	semester = $("#semester").val();
	faculty = $("#faculty").val();
	department = $("#department").val();
	TeacherName = $("#TeacherName").val();
	

	var string = "";
	var compareSubjectName = string.localeCompare(subjectName);
	var compareSubjectCode = string.localeCompare(subjectCode);
	var compareTeacherName = string.localeCompare(TeacherName);

	$("#subjectName").keypress(function(){
		$("#invalidSubjectName").hide();
	});
	$("#subjectCode").keypress(function(){
		$("#invalidSubjectCode").hide();
	});
	$("#TeacherName").keypress(function(){
		$("#invalidSubjectTeacher").hide();
	});

	if(compareSubjectName == 0){
		$(document).ready(function(){
			$("#invalidSubjectName").show();
			$("#invalidSubjectCode").hide();
			$("#invalidSubjectTeacher").hide();
		});
	}
	else if(compareSubjectCode == 0) {
		$(document).ready(function(){
			$("#invalidSubjectCode").show();
			$("#invalidSubjectName").hide();
			$("#invalidSubjectTeacher").hide();
		});
	}
	else if(compareTeacherName == 0) {
		$(document).ready(function(){
			$("#invalidSubjectTeacher").show();
			$("#invalidSubjectCode").hide();
			$("#invalidSubjectName").hide();
		});
	}
	
	else {
		numberOfSubject = document.getElementById("NumberOfSubject").innerText;
		numberOfSubject = Number(numberOfSubject);

		numberOfSubject = numberOfSubject + 1;
		No = numberOfSubject;
		document.getElementById("NumberOfSubject").innerHTML = numberOfSubject;
		 
		tr = "<tr><td>"+No+"</td><td>"+subjectName+"</td><td>"+subjectCode+"</td><td>"+year+"</td><td>"+semester+"</td><td>"+faculty+"</td><td>"+department+"</td><td>"+TeacherName+"</td><td><input type='checkbox' title='Please check it to remove its column' name='record'></td></tr>";
		$("tbody").append(tr);

		document.getElementById("totalSubject").classList.add("show");

		document.getElementById("subjectName").value = "";
		document.getElementById("subjectCode").value = "";
		document.getElementById("TeacherName").value = "";
	}

	
});


$(document).on("click","#removeSubject",function(){
	$("table tbody").find('input[name="record"]').each(function(){
		if($(this).is(":checked")){
			
			swal({
				  title: "Are you sure?",
				  text: "Once deleted, you will not be able to recover this data file!",
				  icon: "warning",
				  buttons: true,
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {
				    swal("Poof! Your data file has been deleted!", {
				      icon: "success",
				    });
				    $(this).parents("tr").remove();
					numberOfSubject = numberOfSubject - 1;
					document.getElementById("NumberOfSubject").innerHTML = numberOfSubject;
				  } else {
				    swal("Your data file is safe!");
				  }
				});
		}
		// else {
		// 	swal("Please Check the box before clicking Button Delete !")
		// }
	});
	
});

