function validateInfo(){
	var b = true;
	// GET VALUE FROM TEXT BOX
	var name    = document.getElementById("Tname").value;
	var birthdate = document.getElementById("birthdate").value;
	var phone = document.getElementById("phone").value;
	var position= document.getElementById("position").value;
	var salary  = document.getElementById("salary").value;
	var datejoin = document.getElementById("datejoin").value;
	var address = document.getElementById("address").value;
	

	var letter = /[a-z]/g;
	var space = /[ ]/g;
	var num   = /[0-9]/g;
	var patt = new RegExp("([0-9]{3})[ \s\.]?[0-9]{3}[ \s\.]?([0-9]{4}|[0-9]{3})$");



	var checkLetterAtSalary = salary.match(letter);
	var validateName = name.match(space);
	var checkNumberAtNameBox  = name.match(num);
	var resultCheckPhoneNumber = patt.test(phone);




		// VALIDATE STUDENT NAME
		if(validateName != null || name == "" || checkNumberAtNameBox != null){
			document.getElementById("errorName").innerHTML ="* Your name is not valid! Only Charactor!";
			b = false;
		}
		else {
			document.getElementById("errorName").innerHTML = "";	
		}

		//VALIDATE DATE OF BIRTH
		if(birthdate == ""){
			document.getElementById("errorBirthdate").innerHTML = "* choose the Date!";
			b = false;
		}else{
			document.getElementById("errorBirthdate").innerHTML = "";
		}

		// VALIDATE PHONE NUMBER
		if(phone == "" || resultCheckPhoneNumber == false ){
			document.getElementById("errorPhone").innerHTML ="* Invalid Phone Number! At least 9 numbers!";
			b = false;
		}else {
			document.getElementById("errorPhone").innerHTML = "";	
		}

		//VALIDATE POSITION
		if(position == "" ){
			document.getElementById("errorPosition").innerHTML = "* This is not allow to be empty!";
			b = false;
		}else{
			document.getElementById("errorPosition").innerHTML = "";
		}

		//VALIDATE DATE JOINED
		if(datejoin == ""){
			document.getElementById("errorDatejoin").innerHTML = "* choose the Date!";
			b = false;
		}else{
			document.getElementById("errorDatejoin").innerHTML = "";	
		}

		//VALIDATE SALARY
		if (checkLetterAtSalary != null  ) {
			document.getElementById("errorSalary").innerHTML = "* Salary is not valid! Only Number!";
			b = false;
		}else if(salary == ""){
			document.getElementById("errorSalary").innerHTML = "* Please Input Salary!";
			b = false;
		}else{
			document.getElementById("errorSalary").innerHTML = "" ;	
		}

		//VALIDATE ADDRESS
		if(address == "" ){
			document.getElementById("errorAddress").innerHTML = "* City is required";
			b = false;
		}else{
			document.getElementById("errorAddress").innerHTML = "";	
		}

	return b;
}

function run(){
		if(validateInfo() == true) {
			addRows();
		}
	}


function addRows(){

		var numberOfRow = document.getElementById("numberOfRow").innerText;
		var plusOneRow = 1 + Number(numberOfRow);
		document.getElementById("numberOfRow").innerHTML = plusOneRow;


		var id = plusOneRow;
		var name      = document.getElementById("Tname").value;
		var gender    = document.getElementById("gender").value;
		var birthdate = document.getElementById("birthdate").value;
		var phone     = document.getElementById("phone").value;
		var position  = document.getElementById("position").value;
		var datejoin  = document.getElementById("datejoin").value;
		var salary    = document.getElementById("salary").value;
		var address   = document.getElementById("address").value;

		var info = [id,name,gender,birthdate,phone,position,datejoin,salary,address]
		var newtr = document.createElement("tr");
		// newtr.setAttribute('class','styleRow');
		newtr.setAttribute('onclick','selectRow(this)');

		for(var i=0; i<9; i++){

			var newtd = document.createElement("td");
			var text = document.createTextNode(info[i]);

			newtd.appendChild(text);
			newtr.appendChild(newtd);

		}

		var list = document.getElementById("table");
		list.appendChild(newtr);
	}

	storeIndex=0;
	selectToDelete = false;

function selectRow(event){
	iSelectRow = event;
	var table   = document.getElementById('table');
	var countTr = table.getElementsByTagName('tr');	
	for(var i = 1 ; i < countTr.length; i++){
		if(iSelectRow == countTr[i]){						
			event.setAttribute('class','selected');
			storeIndex = countTr[i].rowIndex;
			selectToDelete = true;
		}
		else {
			countTr[i].classList.remove('selected');
		}		
	}	
}

function deleteRecord(){
	if(storeIndex == 0 || selectToDelete == false ){
		alert("Please select one row to delete.");
	}
	else if(confirm("Do you want to delete this information ?") == true ){
		var list = document.getElementById("table");
		list.deleteRow(storeIndex);
		selectToDelete = false;

		var getCountRow = document.getElementById("numberOfRow").innerText;
		var subOneRow = getCountRow - 1;
		document.getElementById('numberOfRow').innerHTML = subOneRow;

		var getRow = document.getElementsByName('tr').innerText;
		var subMore = getRow +1;
		document.getElementsByName('tr').innerHTML = subMore;
			
	}
}
