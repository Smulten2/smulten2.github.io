
function AddOne(){    

    var myInputElement = document.getElementById("myinput");
    var txtVerdi = myInputElement.value;
    
    console.log(txtVerdi);

    var nrVerdi = parseInt(txtVerdi);
    myInputElement.value = nrVerdi + 1;

}


