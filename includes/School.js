
$(document).ready(function(){


	$("#schoolManagement").hide();
	$("#logIn").load("includes/FormLogin.html");
	$(document).on("click","#login",function(){
		// $("#logIn").hide();
		// $("#schoolManagement").slideDown();
		username =  $("#username").val();
		password = $("#password").val();

		correctUsername = "School";
		correctPassword = "Management";
		compareUsername = correctUsername.localeCompare(username);
		comparePassword = correctPassword.localeCompare(password);

		if (compareUsername == 0 && comparePassword == 0) {
			$(document).ready(function(){
				// alert("right");
				$("#logIn").hide();
				$("#schoolManagement").fadeIn(4000);
			});
			

		}
		else {
			alert("Your Username and Password are not Correct. Please Input again !");
		}
	});

	// $(document).on("click","#SIGNUP",function(){
		
		
	// 	$("#FORMSIGNUP").hide();
	// 	$("#FORMSCHOOL").load("includes/School.html");
	// 	$("#logIn").hide();
	// 	$("#schoolManagement").slideDown();
	// });
	// $(document).on("click","#CANCEL",function(){
	// 	$("#logIn").slideDown();
	// 	$("#FORMSIGNUP").hide();
	// 	$("#schoolManagement").hide();
	// });

	// $(".login").load("includes/FormLogin.html");

	$("#menuInHeadermaster").hide();
	$("#Headermaster").click(function(){
		$("#menuInHeadermaster").slideToggle();
	});

			$(".menuBar").hide();
			$(".style-bodyRight").load("includes/ContentRight/contentRight.html");

			$(".btnBar").click(function(){
				$(".menuBar").slideToggle();
				$(".style-bodyRight").show();
				$(".style-bodyRight").load("includes/ContentRight/contentRight.html");
				$(".style-bodyRight").slideDown();
				$("#inDashboard").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#ClassSection").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
				$("#inLibrary").hide();
				$("#inContact").hide();
				$("#inEventCalendar").hide();
			});
			
				
			$("#myDropdown-Academic").hide();
			$("#myDropdown-StudentParents").hide();
			$("#myDropdown-Teacher").hide();
			$("#myDropdown-HRM").hide();
			$("#myDropdown-Account").hide();
			$("#myDropdown-Library").hide();
			$("#myDropdown-Message").hide();
			$("#inContact").hide();
			$("#myDropdown-EventCalendar").hide();
			$("#myDropdown-Setting").hide();

			$("#inDashboard").hide();
			$("#inSubject").hide();
			$("#St-Register").hide();
			$("#St-Payment").hide();
			$("#ClassSection").hide();
			$("#inAccount").hide();
			$("#inEventCalendar").hide();

			// click dashboard
			$(document).on("click","#Dashboard",function(){
				$("#inDashboard").load("includes/Dashboard/Dashboard.html");
				$("#inDashboard").slideDown();
				$(".style-bodyRight").hide();
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
				$("#inLibrary").hide();
				$("#inContact").hide();
				$("#inEventCalendar").hide();
			});
			

			// click academic
			$("#Academic").click(function(){
				$("#myDropdown-Academic").slideToggle();
				$(".menuStudentParents").hide();
				$(".menuTeacher").hide();
				$(".menuHRM").hide();
				$(".menuAccount").hide();
				$(".menuLibrary").hide();
				$(".menuMessage").hide();
				$(".menuContact").hide();
				$(".menuEventCalendar").hide();
				$(".menuSetting").hide();
			});
			
			// click student parents
			$("#StudentParents").click(function(){
				$("#myDropdown-StudentParents").slideToggle();
				$(".menuAcademic").hide();
				$(".menuTeacher").hide();
				$(".menuHRM").hide();
				$(".menuAccount").hide();
				$(".menuLibrary").hide();
				$(".menuMessage").hide();
				$(".menuContact").hide();
				$(".menuEventCalendar").hide();
				$(".menuSetting").hide();
			});

			// click Teacher
			$(document).on("click","#Teachers",function(){
				$("#inTeacher").load("includes/Teacher/teacher.html");
				$("#inTeacher").slideDown();
				$(".style-bodyRight").hide();
				$("#inDashboard").hide();
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#inAccount").hide();
				$("#inLibrary").hide();
				$("#inContact").hide();
				$("#inEventCalendar").hide();
			});

			// click HRM
			$("#HRM").click(function(){
				$("#myDropdown-HRM").slideToggle();
				$(".menuAcademic").hide();
				$(".menuTeacher").hide();
				$(".menuStudentParents").hide();
				$(".menuAccount").hide();
				$(".menuLibrary").hide();
				$(".menuMessage").hide();
				$(".menuContact").hide();
				$(".menuEventCalendar").hide();
				$(".menuSetting").hide();
			});

			// click Account
			$("#Account").click(function(){
				$("#inAccount").load("includes/FormRegister.html");
				$("#inAccount").slideDown();
				$("#inLibrary").slideDown();
				$(".style-bodyRight").hide();
				$("#inContact").hide();
				$("#inDashboard").hide();
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#inTeacher").hide();
				$("#inLibrary").hide();
				$("#inEventCalendar").hide();
			});

			// click Library
			$(document).on("click","#Library",function(){

				$("#inLibrary").load("includes/Library/Library.html");
				$("#inLibrary").slideDown();
				$(".style-bodyRight").hide();
				$("#inContact").hide();
				$("#inDashboard").hide();
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
				$("#inEventCalendar").hide();
				
			});

			// click Message
			$("#Message").click(function(){
				$("#myDropdown-Message").slideToggle();
				$(".menuAcademic").hide();
				$(".menuHRM").hide();
				$(".menuStudentParents").hide();
				$(".menuAccount").hide();
				$(".menuLibrary").hide();
				$(".menuTeacher").hide();

				$(".menuContact").hide();
				$(".menuEventCalendar").hide();
				$(".menuSetting").hide();
			});

			// click Contact
			$(document).on("click","#Contact",function(){})
			$("#Contact").click(function(){

				$("#inContact").load("includes/Contact/Contact.html");
				$("#inContact").slideDown();
				$("#inDashboard").hide();
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#inTeacher").hide();
				$("#inLibrary").hide();
				$("#inAccount").hide();
				$("#inEventCalendar").hide();
				$(".style-bodyRight").hide();
			});

			// click Event Calendar
			$(document).on("click","#EventCalendar",function(){
				$("#inEventCalendar").load("includes/Event-Calendar/eventCalendar.html");
				$("#inEventCalendar").slideToggle();
				$(".style-bodyRight").hide();
				$("#inDashboard").hide();				
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
				$("#inLibrary").hide();
				$("#inContact").hide();
				
				

			});

			// click Setting
			$("#Setting").click(function(){

				
				$("#myDropdown-Academic").hide();
				$("#myDropdown-StudentParents").hide();
				$("#myDropdown-Teacher").hide();
				$("#myDropdown-HRM").hide();
				$("#myDropdown-Account").hide();
				$("#myDropdown-Library").hide();
				$("#myDropdown-Message").hide();
				$("#myDropdown-EventCalendar").hide();

				$("#inDashboard").hide();
				$(".style-bodyRight").hide();
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#inContact").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
				$("#inLibrary").hide();
				$("#inEventCalendar").hide();
			});

			// click here to show all menu 

			$(".showMenu").click(function(){
				$(".menuDashboard").show();
				$(".menuAcademic").show();
				$(".menuStudentParents").show();
				$(".menuTeacher").show();
				$(".menuHRM").show();
				$(".menuAccount").show();
				$(".menuLibrary").show();
				$(".menuMessage").show();
				$(".menuContact").show();
				$(".menuEventCalendar").show();
				$(".menuSetting").show();
				$("#myDropdown-Academic").hide();
				$("#myDropdown-StudentParents").hide();
				$("#myDropdown-Teacher").hide();
				$("#myDropdown-HRM").hide();
				$("#myDropdown-Account").hide();
				$("#myDropdown-Library").hide();
				$("#myDropdown-Message").hide();
				$("#myDropdown-Contact").hide();
				$("#myDropdown-EventCalendar").hide();
				$("#myDropdown-Setting").hide();
			});

			$(document).on("click","#CourseClass",function(){
				$("#ClassSection").load("includes/Academic/Course-Class/CourseClass.html");
				$("#ClassSection").slideDown();
				$(".style-bodyRight").hide();
				$("#inDashboard").hide();
				$("#inSubject").hide();
				$("#inContact").hide();
				$("#inEventCalendar").hide();
				$("#St-Register").hide();
				$("#St-Payment").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
				$("#inLibrary").hide();
			});

			// // subject
			$(document).on("click","#Subject",function(){
				$("#inSubject").load("includes/Academic/Subject/Subject.html");
				$("#inSubject").slideDown();
				$(".style-bodyRight").hide();
				$("#inDashboard").hide();
				$("#ClassSection").hide();
				$("#St-Payment").hide();
				$("#inLibrary").hide();
				$("#inContact").hide();
				$("#inEventCalendar").hide();
				$("#St-Register").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
			});

			$(document).on("click","#studentRegister",function(){
				$("#St-Register").load("includes/student/Register.html");
				$("#St-Register").slideDown();
				$(".style-bodyRight").hide();
				$("#inDashboard").hide();
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#St-Payment").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
				$("#inLibrary").hide();				
				$("#inContact").hide();
				$("#inEventCalendar").hide();

			});
			$(document).on("click","#studentPayment",function(){
				$("#St-Payment").load("includes/StudentPayment.html");
				$("#St-Payment").slideDown();
				$(".style-bodyRight").hide();
				$("#inDashboard").hide();
				$("#ClassSection").hide();
				$("#inSubject").hide();
				$("#St-Register").hide();
				$("#inTeacher").hide();
				$("#inAccount").hide();
				$("#inLibrary").hide();				
				$("#inContact").hide();
				$("#inEventCalendar").hide();

			});

			


});
	

// function resetClass() {
// 	$(document).ready(function(){
// 		$("#InvalidRoomname").hide();
// 		$("#InvalidRoomnumber").hide();
// 		$("#InvalidStudentlimit").hide();
// 		$("#InvalidHallcharge").hide();

// 	});
	
// 	document.getElementById("roomname").value = "";
// 	document.getElementById("roomnumber").value = "";
// 	document.getElementById("studentlimit").value = "";
// 	document.getElementById("hallcharge").value = "";

// }

//  code to add subject into table


