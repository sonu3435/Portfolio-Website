function sendMail(){
    var params = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        phone: document.getElementById("Phone").value,
        subject: document.getElementById("Subject").value,
        // message: document.getElementById("message").value
    };
        // window.open("#contact", "_self");
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Phone").value = "";
        document.getElementById("Subject").value = "";

    const serviceID =  "service_8zyb07z";
    const templateID = "template_fse260c";

    emailjs
    .send(serviceID,templateID,params)
    .then(
        (res) =>{
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Phone").value = "";
        document.getElementById("Subject").value = "";
        // document.getElementById("message").value = "";

        console.log(res);
        alert('Your message send successfully')
     })
    .catch((err) =>{ console.log(err) 
        alert('not send')
    })
};


   let a = document.getElementById("navsearchs");
   a.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
    //    event.preventDefault();
       document.getElementById("navbtn").click();
    }
   });

    function land(){
        let a = document.getElementById('navsearchs').value;
        if(a === 'home'){
            document.getElementById("navsearchs").value = '';
            window.open("#header", "_self");
        }
        else{
            document.getElementById("navsearchs").value = '';
            window.open("#" + a, "_self");
        }
    }
