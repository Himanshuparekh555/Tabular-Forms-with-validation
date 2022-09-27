jQuery(function () {

    //  Promo code Toggle Hide/Show 
    $(".promo-code-toggle").click(function(){
        $(".promo-code").toggle("slow");
      });


    // Tab
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    // Country Code Initialise
    $(".countrycode").intlTelInput();
});


// Form Validation 

// Defining a function to display error message
function printdeliveredError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to delivered validate form 
function deliveredForm() {
    // Retrieving the values of form elements 
    var firstname = document.deliverForm.firstname.value;
    var lastname = document.deliverForm.lastname.value;
    var area = document.deliverForm.area.value;
    var address = document.deliverForm.address.value;
    var landmark = document.deliverForm.landmark.value;
    var email = document.deliverForm.email.value;
    var number = document.deliverForm.number.value;
    var country = document.deliverForm.country.value;
    var state = document.deliverForm.state.value;
    var city = document.deliverForm.city.value;
    var zipcode = document.deliverForm.zipcode.value;
    var company = document.deliverForm.company.value;
    var vatnumber = document.deliverForm.vatnumber.value;
    
	// Defining error variables with a default value
    var firstnameErr = lastnameErr = areaErr = addressErr = landmarkErr = emailErr = numberErr = countryErr = stateErr = cityErr = zipcodeErr = companyErr = vatnumberErr = true;
    
    // Validate First name
    if(firstname == "") {
        printdeliveredError("firstnameErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            printdeliveredError("firstnameErr", "Please enter a valid first name");
        } else {
            printdeliveredError("firstnameErr", "");
            firstnameErr = false;
        }
    }

    // Validate Last name 
    if(lastname == "") {
        printdeliveredError("lastnameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            printdeliveredError("lastnameErr", "Please enter a valid last name");
        } else {
            printdeliveredError("lastnameErr", "");
            lastnameErr = false;
        }
    }

    // Validate Area
    if(area == "") {
        printdeliveredError("areaErr", "Please enter your field");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(area) === false) {
            printdeliveredError("areaErr", "Please enter a valid field");
        } else {
            printdeliveredError("areaErr", "");
            areaErr = false;
        }
    }

     // Validate Address
     if(address == "") {
        printdeliveredError("addressErr", "Please enter your adddress");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(address) === false) {
            printdeliveredError("addressErr", "Please enter a valid adddress");
        } else {
            printdeliveredError("addressErr", "");
            addressErr = false;
        }
    }

     // Validate landmark
     if(landmark == "") {
        printdeliveredError("landmarkErr", "Please enter your landmark");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(landmark) === false) {
            printdeliveredError("landmarkErr", "Please enter a valid landmark");
        } else {
            printdeliveredError("landmarkErr", "");
            landmarkErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printdeliveredError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printdeliveredError("emailErr", "Please enter a valid email address");
        } else{
            printdeliveredError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate country
    if(country == "Country") {
        printdeliveredError("countryErr", "Please select your country");
    } else {
        printdeliveredError("countryErr", "");
        countryErr = false;
    }
    
     // Validate state
     if(state == "State/Province") {
        printdeliveredError("stateErr", "Please select your state");
    } else {
        printdeliveredError("stateErr", "");
        stateErr = false;
    }

      // Validate city
      if(city == "") {
        printdeliveredError("cityErr", "Please select your city");
    } else {
        printdeliveredError("cityErr", "");
        cityErr = false;
    }

    // Validate Zipcode
    if(zipcode == "") {
        printdeliveredError("zipcodeErr", "Please select your zip/postal code");
    } else {
        printdeliveredError("zipcodeErr", "");
        zipcodeErr = false;
    }
    
     // Validate company
     if(company == "") {
        printdeliveredError("companyErr", "Please select your company");
    } else {
        printdeliveredError("companyErr", "");
        companyErr = false;
    }

    // Validate mobile number
    if(number == "") {
        printdeliveredError("numberErr", "Please enter your number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(number) === false) {
            printdeliveredError("numberErr", "Please enter a valid 10 digit number");
        } else{
            printdeliveredError("numberErr", "");
            numberErr = false;
        }
    }
    
     // Validate vat number
     if(vatnumber == "") {
        printdeliveredError("vatnumberErr", "Please select your vat number");
    } else {
        printdeliveredError("vatnumberErr", "");
        vatnumberErr = false;
    }


    // Prevent the form from being submitted if there are any errors
    if((firstnameErr || lastnameErr || emailErr || areaErr || addressErr || numberErr || countryErr || stateErr || cityErr || zipcodeErr || companyErr || vatnumberErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Email Address: " + email + "\n" +
                          "First Name: " + firstname + "\n" +
                          "Last Name: " + lastname + "\n" +
                          "Apartment/Suite/Building: " + area + "\n" +
                          "Street Address: " + address + "\n" +
                          "Landmark: " + landmark + "\n" +
                          "Country: " + country + "\n" +
                          "State/Province: " + state + "\n" +
                          "City: " + city + "\n" +
                          "Zip/Postal Code: " + zipcode + "\n" +
                          "Company: " + company + "\n" +
                          "Phone Number: " + number + "\n" +
                          "Vat Number: " + vatnumber + "\n";
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};

// Defining a function to display error message
function printpickupError(pickupId, pickuphintMsg) {
    document.getElementById(pickupId).innerHTML = pickuphintMsg;
}
// Defining a function to Pick it up validate form
function pickupedForm() {
    var emailpickup = document.pickupForm.emailpickup.value;
    var firstnamepickup = document.pickupForm.firstnamepickup.value;
    var lastnamepickup = document.pickupForm.lastnamepickup.value;
    var numberpickup = document.pickupForm.numberpickup.value;

    // Defining error variables with a default value
    var emailpickupErr  = firstnamepickupErr = lastnamepickupErr = numberpickupErr = true;


       // Validate email address
       if(emailpickup == "") {
        printpickupError("emailpickupErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(emailpickup) === false) {
            printpickupError("emailpickupErr", "Please enter a valid email address");
        } else{
            printpickupError("emailpickuprr", "");
            emailpickupErr = false;
        }
    }

     // Validate First name
     if(firstnamepickup == "") {
        printpickupError("firstnamepickupErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstnamepickup) === false) {
            printpickupError("firstnamepickupErr", "Please enter a valid first name");
        } else {
            printpickupError("firstnamepickupErr", "");
            firstnamepickupErr = false;
        }
    }

    // Validate Last name 
    if(lastnamepickup == "") {
        printpickupError("lastnamepickupErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastnamepickup) === false) {
            printpickupError("lastnamepickupErr", "Please enter a valid last name");
        } else {
            printpickupError("lastnamepickupErr", "");
            lastnamepickupErr = false;
        }
    }

     // Validate mobile number
     if(numberpickup == "") {
        printpickupError("numberpickupErr", "Please enter your number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(numberpickup) === false) {
            printpickupError("numberpickupErr", "Please enter a valid 10 digit number");
        } else{
            printpickupError("numberpickupErr", "");
            numberpickupErr = false;
        }
    }
}