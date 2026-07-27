// COACHsir Digital Flip Card JS


const card = document.getElementById("card");


// FRONT BUTTON

function showFront(){

    card.style.transform = "rotateY(0deg)";

}


// BACK BUTTON

function showBack(){

    card.style.transform = "rotateY(180deg)";

}




// DEMO STUDENT DATA

const student = {

    name:"Rahul Sharma",

    id:"S001",

    program:"NEET Biology",

    expiry:"31-03-2027",

    paymentStatus:"approved"

};



// LOAD STUDENT DATA

document.getElementById("studentName").innerHTML =
student.name;


document.getElementById("studentId").innerHTML =
student.id;


document.getElementById("program").innerHTML =
student.program;


document.getElementById("expiry").innerHTML =
student.expiry;



// PAYMENT STATUS


const status =
document.getElementById("paymentStatus");



if(student.paymentStatus==="approved"){


    status.innerHTML="🟢 ACTIVE";


}

else{


    status.innerHTML="🟡 PAYMENT PENDING";


    status.style.background="#ffd700";

}
