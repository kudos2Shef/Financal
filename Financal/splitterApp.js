let bill;
let gstTax=0;
let custTax=0;
let people;
let result1= 0;
let result2=0;
let amountPerson=document.getElementById('amountPerPerson')
let totalPerson=document.getElementById('totalPerPerson')
$(document).ready(function () {
    $(".gst").click(function (e) { 
        e.preventDefault();
       
        gstTax = $(this).text().replace('%', '').trim();
        console.log(gstTax);

        calculate();

    });
    $("#custom").on('input',function (e) { 
        e.preventDefault();
        custTax =  $("#custom").val();
        
        console.log("custom",custTax);
        calculate();


        
    });
    $("#people").on("input",function (e) { 
        e.preventDefault();
        $("#basic-addon3").css("background-color", "transparent");
        $("#error").text("").css("color","transparent");


        people=$("#people").val();
        if(people==0 || !people){
            $("#error").text("Can't be zero ").css({"color":"var(--Red)","float":"right"});
            $("#basic-addon3").css("background-color", "var(--Red)");

            }
            
        
            // console.log(typeof(people));
            calculate();


        
    });
    $("#bill").on('input',function (e) { 
        e.preventDefault();
        console.log("bill");

        bill= $("#bill").val();
        if(bill==0||!bill){
            $("#basic-addon1").css("background-color", "var(--Red)");
        }
        
        else{
            $("#basic-addon1").css("background-color", "transparent");

        }

        
        // console.log(bill);
        calculate();


    });

    
    $("#reset").click(function (e) { 
        e.preventDefault();
        $(".gst").val("");
        $("#custom").val("");
        $("#people").val("");
        $("#bill").val("");
        gstTax=0
        custTax=0;
        bill=''
        people=''
        console.log(bill);
        amountPerson.innerHTML="";
        totalPerson.innerHTML="";



        calculate();


        
    });
    calculate();

    function calculate(){
       
      
        if(!people && !bill  ){
            // console.log(result1,' ',result2);

            // console.log("yes");
            $("#basic-addon1").css("background-color", "var(--Red)");
            $("#basic-addon3").css("background-color", "var(--Red)");
            amountPerson.innerHTML=`<i class="fa fa-inr" aria-hidden="true"></i> 0.00`
            totalPerson.innerHTML = `<i class="fa fa-inr" aria-hidden="true"></i> 0.00`



        }
      
        
       else if(people && bill){
                bill = parseFloat(bill);
                gstTax= parseFloat(gstTax)/100;
                people = parseInt(people);
                custTax = parseFloat(custTax)/100;
                result1 = ((bill*gstTax)/people+(bill*custTax)/people);
                result2 = (bill+parseFloat(result1))/people;
                // console.log(result1,' ',result2);
                // console.log('no',custTax);
                $("#basic-addon1").css("background-color", "transparent");
                $("#basic-addon3").css("background-color", "transparent");
                amountPerson.innerHTML=`<i class="fa fa-inr" aria-hidden="true"></i> ${result1.toFixed(2)}`
                totalPerson.innerHTML = `<i class="fa fa-inr" aria-hidden="true"></i> ${result2.toFixed(2)}`
    
       }
            


    }
    
});
