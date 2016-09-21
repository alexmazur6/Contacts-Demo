$(document).ready(function() {
	
	var contacts = [];
	var contactCounter = 0;


	$('#add-contact').on('click', function(event) {
		event.preventDefault();

		resetPlaceholder();

		var newContact = Object.create(Contact);

		newContact.fname = $("input[name=fname").val();
		newContact.lname = $("input[name=lname").val();
		newContact.pnumber = $("input[name=pnumber").val();
		newContact.street = $("input[name=street").val();
		newContact.city = $("input[name=city").val();
		newContact.state = $("input[name=state").val();

		if (newContact.isValid() === false) {
			return false;
		}

		contacts.push(newContact);

		appendContactList();
		//console.log(contacts[contactCounter]);
		contactCounter++;

	});

	function displayContactInfo(contactNumber) {
		var thisContact = contacts[contactNumber]
		$('.contact-info').children('h1').text(thisContact.fname + " " + thisContact.lname);
		$('#fname').text("First Name: " + thisContact.fname);
		$('#lname').text("Last Name: " + thisContact.lname);
		$('#pnumber').text("Phone Number: " + thisContact.pnumber);
		$('#address').text("Addresses:")
		$('.address-list').css('list-style', 'disc');
		$('.address-list').children('li').text(thisContact.street + ", " + thisContact.city + ", " + thisContact.state)
	}

	function contactLinkListener() {
		$('.contact-link').on('click', function(event) {
			event.preventDefault();
			displayContactInfo($(this).attr('id'));
		});
	}

	function resetPlaceholder() {
		$("input").attr('placeholder', '');
	}

	function appendContactList() {
		$('#contact-list').append("<li id=\"" + contactCounter + "\"></li>");
		$('#' + contactCounter).append("<a href=\"\" class=\"contact-link\" id=\"" + contactCounter + "\" >" + contacts[contactCounter].fname + " " + contacts[contactCounter].lname + "</a>");
		contactLinkListener();
	}


	var Contact = {
		fname: "",
		lname: "",
		pnumber: "",
		street: "",
		city: "",
		state: "",

		isValid:function() {
			var invalidfname = false, invalidlname = false, invalidpnumber = false, invalidstreet = false, invalidcity = false, invalidstate = false;

			if (this.fname === "") {
				$("input[name=fname]").attr("placeholder", "Must enter a first name");
				invalidfname = true;
			}

			if (this.lname === "") {
				$("input[name=lname]").attr("placeholder", "Must enter a last name");
				invalidlname = true;
			}

			if (this.pnumber === "") {
				$("input[name=pnumber]").attr("placeholder", "Must enter a phone number");
				invalidpnumber = true;
			}

			if (this.street === "") {
				$("input[name=street]").attr("placeholder", "Must enter a street");
				invalidstreet = true;
			}

			if (this.state === "") {
				$("input[name=state]").attr("placeholder", "Must enter a state");
				invalidstate = true;
			}

			if (this.city === "") {
				$("input[name=city]").attr("placeholder", "Must enter a city");
				invalidcity = true;
			}

			if (invalidlname || invalidfname || invalidpnumber || invalidstreet || invalidcity || invalidstate) {
				invalidfname = false;
				invalidlname = false;
				invalidpnumber = false;
				invalidstate = false;
				invalidcity = false;
				invalidstreet = false;

				return false;
			}
			else {
				return true;
			}

		}
	};
});