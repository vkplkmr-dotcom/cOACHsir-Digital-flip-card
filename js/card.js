// COACHsir Digital Flip Card


const card = document.getElementById("card");


// FRONT / BACK BUTTON

function showFront(){

    card.style.transform = "rotateY(0deg)";

}


function showBack(){

    card.style.transform = "rotateY(180deg)";

}



// Get Student ID from URL

const urlParams = new URLSearchParams(window.location.search);

const studentId = urlParams.get("id") || "CSA2026001";




// Load Student From Firebase

async function loadStudent(){


    try{


        const doc = await db
        .collection("students")
        .doc(studentId)
        .get();



        if(doc.exists){


            const data = doc.data();


            // Name

            document.getElementById("studentName").innerHTML =
            data.name;



            // ID

            document.getElementById("studentId").innerHTML =
            data.studentId;



            // Program

            document.getElementById("program").innerHTML =
            data.program;



            // Valid Till

            document.getElementById("expiry").innerHTML =
            data.validTill;



            // Photo

            // Photo Test

console.log("PHOTO URL =", data.photoURL);

const photo = document.getElementById("studentPhoto");

photo.src = data.photoURL;

photo.onload = function(){

    console.log("PHOTO LOADED");

};


photo.onerror = function(){

    console.log("PHOTO ERROR");

};


            // Payment Status

            const status =
            document.getElementById("paymentStatus");



           if(data.paymentStatus === "approved"){

    status.innerHTML = "🟢 ACTIVE";

    document.getElementById("examBtn").style.display = "inline-block";

}
else{

    status.innerHTML = "🟡 PAYMENT PENDING";

    document.getElementById("examBtn").style.display = "none";

}


        }

        else{


            console.log("Student not found");


        }



    }

    catch(error){


        console.log(error);


    }


}




loadStudent();
function openExam(){

    window.open(
    "https://cbtexam.onlinetestpanel.com",
    "_blank"
    );

}
