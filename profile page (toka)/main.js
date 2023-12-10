function myfun(){
    var txt;
    if (confirm("save password? ")){
        txt="password saved";}
        else{
            txt="password not saved";
    }
    document.getElementById("demo").innerHTML=txt;
}
function fun(){
    var message;
    var x =prompt("enter your number to contact you ")
       if(x==123){
          message= alert("you'll be contacted in minutes" );
       }
    else{
       message= alert("wrong number ,please try again");
    }
    document.getElementById("forgot").innerHTML=message;
}