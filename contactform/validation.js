function validate(){
    var fullname=$("#name").val().trim()
    var youremail=$("#email").val().trim()
    var mobilenumber=$("#mobile").val().trim()
    var yourmessage=$("#message").val().trim()
    let a=0

    var regexname = /^[a-z ,.'-]+$/i
    var regexemail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var regexnumber = /^(\+\d{1,3}[- ]?)?\d{10}$/
    var regexmessage = /^[A-Za-z ]+$/

    namevalidation()
    emailvalidation()
    mobilevalidation()
    messagevalidation()
    
    function namevalidation()
    {
        if(fullname == "")
        {
            $("#error1").show()
            $("#error1").text("This field is required")
        }
        else if(fullname.length<4 || fullname.length>15)
        {
            $("#error1").show()
            $("#error1").text("Required 5-15 characters")
        }
        else if(!regexname.test(fullname))
        {
            $("#error1").show()
            $("#error1").text("Enter a valid name")
        }
        else
        {
            $("#error1").hide()
            a+=1
        }
    }

    function emailvalidation()
    {
        if(youremail == "")
        {
            $("#error2").show()
            $("#error2").text("This field is required")
        }
        else if(!regexemail.test(youremail))
        {
            $("#error2").show()
            $("#error2").text("Enter a valid email")
        }
        else
        {
            $("#error2").hide()
            a+=1
        }
    }

    function mobilevalidation()
    {
        if(mobilenumber == "")
        {
            $("#error3").show()
            $("#error3").text("This field is required")
        }
        else if(!regexnumber.test(mobilenumber))
        {
            $("#error3").show()
            $("#error3").text("Enter a valid mobile number")
        }
        else
        {
            $("#error3").hide()
            a+=1
        }
    }
    
    function messagevalidation()
    {
        if(yourmessage == "")
        {
            $("#error4").show()
            $("#error4").text("This field is required")
        }
        else if(!regexmessage.test(yourmessage))
        {
            $("#error4").show()
            $("#error4").text("Enter a valid message")
        }
        else
        {
            $("#error4").hide()
            a+=1
        }
    }

    if(a == 4)
    {
        return true
    }
    else
    {
        return false
    }
}

function check(){
    if(1<2){
       value=true; 
    }else{
        value=false;
    }
}

$("#submit-form").submit((e)=>{
    e.preventDefault()
    if(value==true){
        value=false;
    
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwSlWLuO2ZA-OtkB_o3_d-sTGzjQuTgMkqQSgthH-BHp23zfUX1vB0iHxTOUMHnbrGZ/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }
})
