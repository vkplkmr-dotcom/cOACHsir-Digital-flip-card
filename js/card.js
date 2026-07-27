// COACHsir Digital Flip Card


const card = document.getElementById("card");


// Flip Buttons

function showFront(){

    card.style.transform="rotateY(0deg)";

}


function showBack(){

    card.style.transform="rotateY(180deg)";

}



// Get Student ID from URL

const params = new URLSearchParams(window.location.search);

const studentId = params.get("id") || "CSA2026001";



// Load Student Data

async function loadStudent(){


    try{


        const doc = await db
        .collection("students")
        .doc(studentId)
        .get();



        if(doc.exists){


            const data = doc.data();



            document.getElementById("studentName").innerHTML =
            data.name;



            document.getElementById("studentId").innerHTML =
            data.studentId;



            document.getElementById("program").innerHTML =
            data.program;



            document.getElementById("expiry").innerHTML =
            data.validTill;



           document.getElementById("studentPhoto").src = data.photoURL;


            const status =
            document.getElementById("paymentStatus");



            if(data.paymentStatus=="approved"){


                status.innerHTML="🟢 ACTIVE";


            }
            else{


                status.innerHTML="🟡 PAYMENT PENDING";


            }



        }

        else{


            alert("Student not found");


        }


    }

    catch(error){

        console.log(error);

    }


}



loadStudent();
