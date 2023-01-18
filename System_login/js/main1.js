// function checkbox is to give disabled
function updateTrashDropDown(e){

    var checked = e.target.checked;
    var checked_fee = e.target.nextElementSibling.nextElementSibling;

    if(checked){

        checked_fee.disabled = false;
    }

    else{
        checked_fee.disabled = true;
    }
}

// for function show about the result 1

function showFirstResult(){

    var result_cal = document.getElementById("result_cal")
    var form_1 = document.getElementById("form_1");
    var user_inputs = form_1.querySelectorAll("input:not([type=checkbox])");
    var label_all = ["Customer No", "Customer Name", "Old Number", "New Number"]
    var check_trash_fee = document.getElementById("txtCheckTrash").checked;
    var checked_fee = 0;
    var txt_result = "";
    var kwh; 
    var kwh_price;

    if(check_trash_fee){
        checked_fee = parseInt(document.getElementById("txtTrashFee").value);
    }

    for(let i = 0; i< user_inputs.length;i++){
        txt_result += label_all[i] + ":" + user_inputs[i].value + "<br/>";
    }
     
    
    // new number - old number 
    kwh = user_inputs[3].value - user_inputs[2].value;

    if(kwh <= 50){
        kwh_price = kwh * 500;
    }

    else if(kwh <= 100){
        kwh_price = kwh * 1000;
    }

    else if(kwh <= 150){
        kwh_price = kwh * 1500;
    }

    else if(kwh <= 200){
        kwh_price = kwh * 2000;
    }

    else{
        kwh_price = kwh * 2500;
    }

    txt_result += "Garbage Collection Fee: " + checked_fee + "R" + "<br/>";
    txt_result += "Electricity Fee: " + kwh_price + "R"

    result_cal.innerHTML = txt_result;

    for (let txt_input of user_inputs) {
        txt_input.value = "";
    }

}
// for function show about the result 2
function showSecondResult() {

    var result_cal1 = document.getElementById("result_cal1")
    var form_cal1 = document.getElementById("form_2");
    var user_inputs = form_cal1.querySelectorAll("input:not([type=checkbox])");
    var label_all = ["Customer No", "Customer Name", "Old Number", "New Number"]
    var check_trash_fee = document.getElementById("txtCheckTrash2").checked;
    var checked_fee = 0;
    var txt_result = "";
    var kwh;
    var kwh_price;

    if (check_trash_fee) {
        checked_fee = parseInt(document.getElementById("txtTrash_Fee2").value);
    }

    for (let i = 0; i < user_inputs.length; i++) {
        txt_result += label_all[i] + ":" + user_inputs[i].value + "<br/>";
    }

    kwh = user_inputs[3].value - user_inputs[2].value;

    if (kwh <= 50) {
        kwh_price = kwh * 500;
    }

    else if (kwh <= 100) {
        kwh_price = kwh * 1000;
    }

    else if (kwh <= 150) {
        kwh_price = kwh * 1500;
    }

    else if (kwh <= 200) {
        kwh_price = kwh * 2000;
    }

    else {
        kwh_price = kwh * 2500;
    }

    txt_result += "Garbage Collection Fee: " + checked_fee + "R" + "<br/>";
    txt_result += "Electricity Fee: " + kwh_price + "R"

    result_cal1.innerHTML = txt_result;

    for(let txt_input of user_inputs){
        txt_input.value = "";
    }

}
// for function clear
function ClearAll(){
    document.getElementById("txtNewMotor").value = '';
    document.getElementById("txtOldMotor").value = '';
    document.getElementById("txtNo").value = '';
    document.getElementById("txtName").value = '';
    document.getElementById('txtTrashFee').value = '';
    document.getElementById('result').value = '';
}