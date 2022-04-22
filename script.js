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
            document.getElementById('form').reset();
        }
    });
    $('#close').click(function () {
        document.getElementById('form').reset();
     });
};