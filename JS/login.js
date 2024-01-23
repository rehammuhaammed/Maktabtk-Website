function validate()
{
var box1=document.getElementById("box1").value;
var box2=document.getElementById("box2").value;
if(box1=="admin"&&box2=="user")
{
alert("login succesfully")
return false;
}

else
{

    alert("login failed");
    return 0;
}
}
