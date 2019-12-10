// javascript

function submitFnc(event) {
    var fields = [
        document.getElementById("firstName").value,
        document.getElementById('emailId').value,
        document.getElementById('phoneNumber').value

    ];
    console.log(fields);
    var emailValidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var mobileValidation = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
  
    if (fields[0] == '' && fields[0].length <6) {
        document.getElementById("firstName").style.background = "red";
        
    } else if (emailValidation.test(fields[1]) == false) {
        document.getElementById("emailId").style.background = "red";
        
    } else if (mobileValidation.test(fields[2]) == false) {
        document.getElementById("phoneNumber").style.background = "red";
         
    } else if(document.getElementById('disclaimer').checked == false){
        document.getElementById('checkboxId').style.color = 'red';
    }else{
        window.location = 'home.html';
    } 
}
function logout(){
    window.location = 'index.html';
    localStorage.clear();
}

function searchKeyWordFnc() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}