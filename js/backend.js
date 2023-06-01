//Function to update profile
fetch("https://locdoc-bknd.onrender.com/account/"+sessionStorage.getItem("user"))
    .then(response =>
    {
        return response.json();
    })
    .then(users=> {
        var patient_name = document.getElementById("patient_name");
        patient_name.value= users.name;
        var patient_email =document.getElementById("patient_email");
        patient_email.value = users.email;
        var patient_phone = document.getElementById("patient_phone");
        patient_phone.value= users.phone;
        var patient_blood_group =document.getElementById("patient_blood_group");
        patient_blood_group.value = users.blood_group;
        var patient_dob = document.getElementById("patient_dob");
        patient_dob.value= users.birth_date;
        var patient_aadhar =document.getElementById("patient_aadhar");
        patient_aadhar.value = users.aadhar;
        var patient_address = document.getElementById("patient_address");
        patient_address.value= users.address;
        console.log(users);
})

function updatePatientProfile(){
    var patient_name = document.getElementById("patient_name").value;
    var patient_email =document.getElementById("patient_email").value;
    var patient_phone = document.getElementById("patient_phone").value;
    var patient_blood_group =document.getElementById("patient_blood_group").value;
    var patient_dob = document.getElementById("patient_dob").value;
    var patient_aadhar =document.getElementById("patient_aadhar").value;
    var patient_address = document.getElementById("patient_address").value;

    var settings = {
        "url": "https://locdoc-bknd.onrender.com/account/add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Allow-Access-Control-Origin":"*"
        },
        "data": JSON.stringify({
            "name":patient_name,
            "phone":patient_phone,
            "email":patient_email,
            "address":patient_address,
            "birth_date":patient_dob,
            "blood_group":patient_blood_group,
            "aadhar":patient_aadhar
        }),
    };

    $.ajax(settings).done(function (response) {
        alert("Account Updated");
        location.reload();
        console.log(response);
    });


}

// Function to convert JSON data to HTML table

var appointmentURL = "https://locdoc-bknd.onrender.com/appointment/"+sessionStorage.getItem("user");
console.log(appointmentURL);
fetch(appointmentURL)
    .then(function(response){
        return response.json();
    })
    .then(function(apps){
        let placeholder = document.querySelector("#appointment-table");
        let out = "";
        for(let app of apps){
            out += `
         <tr>
             <tr>
                                         <td>
                                            <div class="user-info">
                                                <div class="user-info__basic">
                                                    <h5 id="app_p_name" class="mb-0" >${app.patient_name}</h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span id="app_status" class="btn btn-primary">Confirmed</span>
                                        </td>
                                        <td>
                                            <h6 id="app_time" class="mb-0">${app.appointment_time}</h6>
                                            <small id="app_date">${app.appointment_date}</small>
                                        </td>
                                        <td>
                                            <h6 class="mb-0">${app.patient_phone}</h6>
                                        </td>
                                        <td>
                                            <h6 id="app_d_name" class="mb-0">${app.appointment_doctor}</h6>
                                        </td>
                                        <td>
                                            <div class="dropdown open">
                                                <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false">
                                                    <i class="fa fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="triggerId1">
                                                    <a class="dropdown-item text-danger" ><i class="fa fa-trash mr-1"></i> Cancel</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
         </tr>
      `;
        }

        placeholder.innerHTML = out;
    });