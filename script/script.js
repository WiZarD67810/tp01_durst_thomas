/*(function () {
    
    var forms = document.querySelector(".needs-validation")

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener("submit", function (event) {
            // Si les champs sont pas vide on stop
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } 

            form.classList.add("was-validated")

        }, false)
    });
})()*/

function onChecking(event) {

    let form = document.querySelector(".needs-validation");

    if(!form.checkValidity()) {
        form.classList.add("was-validated");

        event.preventDefault();
        event.stopPropagation();
    }

    let pwd1 = document.getElementById("password").value;
    let pwd2 = document.getElementById("password2").value;

    if (pwd1 != pwd2 || pwd1 === "" || pwd2 === "") {
        event.preventDefault();
        event.stopPropagation();

        form.classList.add("was-validated");
        document.getElementById("password2").setCustomValidity(":invalid");
    } else {
        alert("Le formulaire a bien été envoyé !");

        return true;
    }
}