function valid(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	var cpass = document.getElementById('cpass').value;

	if(name == ""){
		alert('name is required');
	}

	if(email == ""){
		alert('email is required');
	}

	if(pass == ""){
		alert('pass is required');
	}

	if(pass.length <=8){
		alert('pass is too short');
	}

	if(pass != cpass){
		alert('pass is not match');
	}
}