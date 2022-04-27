window.onload = function () {

    var form = document.getElementById("form");

    // create the pristine instance
    var pristine = new Pristine(form);

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       
       // check if the form is valid
       var valid = pristine.validate(); // returns true or false
       if (valid == true){
            $("#myModal").modal('toggle');
            const name = document.querySelector('[name="name"]').value;
            const email = document.querySelector('[name="email"]').value;
            const phoneNumber = document.querySelector('[name="phoneNumber"]').value;
            
            console.log("Запрос обработан");
            const data = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
            };
            console.log(data);
            document.getElementById("nameEdit").innerHTML = "Ваша заявка успешно отправлена, " + data["name"];
            $("#myModalSuccess").modal('show');
            document.getElementById('form').reset();
        }
    });
    $('#close').click(function () {
        document.getElementById('form').reset();
    });
    $('[data-toggle="tooltip"]').tooltip();
};