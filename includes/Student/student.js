$(document).on("click","#btnAddSt",function(){

	stID = $("#stID").val();
	stName = $("#stName").val();
	gender = $("#gender").val();
	birthdate = $("#birthdate").val();
	address = $("#address").val();
	phonenumber = $("#phonenumber").val();
	Mail = $("#Mail").val();

	var string = "";
	var compareStId = string.localeCompare(stID);
	var compareStName = string.localeCompare(stName);
	var compareBirthDate = string.localeCompare(birthdate);
	var compareAddress = string.localeCompare(address);
	var comparePhoneNumber = string.localeCompare(phonenumber);
	var compareMail = string.localeCompare(Mail);

	$("#stID").keypress(function(){
		$("#invalidStID").hide();
	});
	$("#stName").keypress(function(){
		$("#invalidStName").hide();
	});
	// $("#birthdate").keypress(function(){
	// 	$("#invalidStBirthDate").hide();
	// });
	if(compareBirthDate != 0) {
		$(document).ready(function(){
			$("#invalidStBirthDate").hide();
		});	
	}
	$("#address").keypress(function(){
		$("#invalidStAddress").hide();
	});
	$("#phonenumber").keypress(function(){
		$("#invalidStPhoneNumber").hide();
	});
	$("#Mail").keypress(function(){
		$("#invalidStMail").hide();
	});

	if(compareStId == 0){
		$(document).ready(function(){
			$("#invalidStID").show();
			$("#invalidStName").hide();
			$("#invalidStBirthDate").hide();
			$("#invalidStAddress").hide();
			$("#invalidStPhoneNumber").hide();
			$("#invalidStMail").hide();
			// $(".borderInvalid").show();
		});
	}
	else if(compareStName == 0) {
		$(document).ready(function(){
			$("#invalidStName").show();
			$("#invalidStID").hide();
			$("#invalidStBirthDate").hide();
			$("#invalidStAddress").hide();
			$("#invalidStPhoneNumber").hide();
			$("#invalidStMail").hide();
		});
	}
	else if(compareBirthDate == 0) {
		$(document).ready(function(){
			$("#invalidStBirthDate").show();
			$("#invalidStName").hide();
			$("#invalidStID").hide();
			$("#invalidStAddress").hide();
			$("#invalidStPhoneNumber").hide();
			$("#invalidStMail").hide();
		});
	}
	// else if(compareBirthDate != 0) {
	// 	$(document).ready(function(){
	// 		$("#invalidStBirthDate").hide();
	// 	});	
	// }
	else if(compareAddress == 0) {
		$(document).ready(function(){
			$("#invalidStAddress").show();
			$("#invalidStName").hide();
			$("#invalidStBirthDate").hide();
			$("#invalidStID").hide();
			$("#invalidStPhoneNumber").hide();
			$("#invalidStMail").hide();
		});
	}
	else if(comparePhoneNumber == 0) {
		$(document).ready(function(){
			$("#invalidStPhoneNumber").show();
			$("#invalidStName").hide();
			$("#invalidStBirthDate").hide();
			$("#invalidStAddress").hide();
			$("#invalidStID").hide();
			$("#invalidStMail").hide();
		});
	}
	else if(compareMail == 0) {
		$(document).ready(function(){
			$("#invalidStMail").show();
			$("#invalidStName").hide();
			$("#invalidStBirthDate").hide();
			$("#invalidStAddress").hide();
			$("#invalidStPhoneNumber").hide();
			$("#invalidStID").hide();
		});
	}
	else {
		numberOfRow = document.getElementById("NumberOfRow").innerText;
		numberOfRow = Number(numberOfRow);

		numberOfRow = numberOfRow + 1;
		No = numberOfRow;
		document.getElementById("NumberOfRow").innerHTML = numberOfRow;
		 // No=0;

		tr = "<tr><td>"+No+"</td><td>"+stID+"</td><td>"+stName+"</td><td>"+gender+"</td><td>"+birthdate+"</td><td>"+address+"</td><td>"+phonenumber+"</td><td>"+Mail+"</td><td><input type='checkbox' title='Please check it to remove its column' name='record'></td></tr>";
		$("tbody").append(tr);

		document.getElementById("totalstudent").classList.add("show");

		document.getElementById("stID").value = "";
		document.getElementById("stName").value = "";
		document.getElementById("birthdate").value = "";
		document.getElementById("address").value = "";
		document.getElementById("phonenumber").value = "";
		document.getElementById("Mail").value = "";
	}

	
});



$(document).on("click","#removeStu",function(){
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
					numberOfRow = numberOfRow - 1;
					document.getElementById("NumberOfRow").innerHTML = numberOfRow;
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
swal({
  title: "Are you sure?",
  text: "Your will not be able to recover this imaginary file!",
  type: "warning",
  showCancelButton: true,
  confirmButtonClass: "btn-danger",
  confirmButtonText: "Yes, delete it!",
  closeOnConfirm: false
},
function(){
  swal("Deleted!", "Your imaginary file has been deleted.", "success");

});