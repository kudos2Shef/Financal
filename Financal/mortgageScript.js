let amount;
let term  ;
let rate  ;
let t = 0;
let type;
let show=false;

$(document).ready(function () {
    
   
    $(".form-check-input").change(function(e){
        $("#error").text("").css("color","transparent");

        e.preventDefault();
        $(".form-check").css({"border":"1px solid black","background":"transparent"});
       
     // console.log(this.id);
    $("#"+this.id).parent().css({"border":"1px solid var(--hover)","background":"var(--hover1)"});
     t=1;
     type="#"+this.id;
    });

    $("#clr").click(function(e){
        e.preventDefault();
        $("#mortgage_amount").val("");
        $("#mortgage_term").val("");
        $("#interest_rate").val("");
        $("#interest_rate").val("");
        $(".form-check-input").removeAttr(checked);

        t=0;




    });
    $("#calculation").click(function(){
     amount = $("#mortgage_amount").val();
    term  =  $("#mortgage_term").val();
    rate  =  $("#interest_rate").val();
        console.log("calculate");
        $("#basic-addon1").css({"background-color":"var(--Slate100)" });
        $("#basic-addon2").css({"background-color":"var(--Slate100)"});
        $("#mortgage_amount").css("border-color","var(--bs-border-color)");
        $("#mortgage_term").css("border-color","var(--bs-border-color)");
        $("#interest_rate").css("border-color","var(--bs-border-color)");
        
        if(t==0){
            // console.log("enter plsss");
            $("#error").text("This field is required ").css("color","var(--Red)");

        }
       
        if(amount =="" && term =="" && rate == ""){
            console.log("amount , term,rate");
            const temp = $("#interest_rate").parent();
            temp.children("#basic-addon2").css({"background-color":"var(--Red)"});
            $("#interest_rate").css("border-color","var(--Red)");
            // $("#error2").text("This field is required ").css("color","var(--Red)");
            

            
            const temp1 = $("#mortgage_amount").parent();
            temp1.children("#basic-addon1").css({"background-color":"var(--Red)"});
            $("#mortgage_amount").css("border-color","var(--Red)");
            // $("#error1").text("This field is required ").css("color","var(--Red)");

        
            const temp2 = $("#mortgage_term").parent();
            temp2.children("#basic-addon2").css({"background-color":"var(--Red)"});
            $("#mortgage_term").css("border-color","var(--Red)");
            // $("#error3").text("This field is required ").css("color","var(--Red)");
            show=false;


        }
        else if(amount=="" && term==""){
            console.log("amount , term");
            const temp1 = $("#mortgage_amount").parent();
            temp1.children("#basic-addon1").css({"background-color":"var(--Red)"});
            $("#mortgage_amount").css("border-color","var(--Red)");
            // $("#error1").text("This field is required ").css("color","var(--Red)");

                const temp2 = $("#mortgage_term").parent();
                temp2.children("#basic-addon2").css({"background-color":"var(--Red)"});
                $("#mortgage_term").css("border-color","var(--Red)");
                // $("#error2").text("This field is required ").css("color","var(--Red)");
                show=false;

        }
        else if(rate=="" && term==""){
            const temp1 = $("#interest_rate").parent();
            temp1.children("#basic-addon2").css({"background-color":"var(--Red)"});
            $("#interest_rate").css("border-color","var(--Red)");
            // $("#error3").text("This field is required ").css("color","var(--Red)");

            const temp2 = $("#mortgage_term").parent();
            temp2.children("#basic-addon2").css({"background-color":"var(--Red)"});
            $("#mortgage_term").css("border-color","var(--Red)");
            // $("#error2").text("This field is required ").css("color","var(--Red)");
            show=false;

        }
        else if(rate=="" && amount==""){
            const temp1 = $("#interest_rate").parent();
            temp1.children("#basic-addon2").css({"background-color":"var(--Red)"});
            $("#interest_rate").css("border-color","var(--Red)");
            // $("#error3").text("This field is required ").css("color","var(--Red)");

            const temp2 = $("#mortgage_amount").parent();
            temp2.children("#basic-addon1").css({"background-color":"var(--Red)"});
            $("#mortgage_amount").css("border-color","var(--Red)");
            // $("#error1").text("This field is required ").css("color","var(--Red)");
            show=false;

        }

        
        else if(amount=="")
        {
            console.log("amount");

            const temp = $("#mortgage_amount").parent();
            temp.children("#basic-addon1").css({"background-color":"var(--Red)"});
            $("#mortgage_amount").css("border-color","var(--Red)");
            // $("#error1").text("This field is required ").css("color","var(--Red)");
            show=false;

        }
        else if(term=="")
            {
                console.log(" term");

                const temp = $("#mortgage_term").parent();
                temp.children("#basic-addon2").css({"background-color":"var(--Red)"});
                $("#mortgage_term").css("border-color","var(--Red)");
                // $("#error2").text("This field is required ").css("color","var(--Red)");
                show=false;

            }

        else if(rate=="")
            {
                console.log("rate");

                const temp = $("#interest_rate").parent();
                temp.children("#basic-addon2").css({"background-color":"var(--Red)"});
                $("#interest_rate").css("border-color","var(--Red)");
                // $("#error3").text("This field is required ").css("color","var(--Red)");
                show=false;

            }
            if(show==false){
                $(".empty").removeClass("d-none");
                $(".result").addClass("d-none");    
                }
            


    });

    $("#mortgageForm").submit(function(e){
        e.preventDefault();
    console.log("form submitted");
    amount = $("#mortgage_amount").val();
    term  =  $("#mortgage_term").val();
    rate  =  $("#interest_rate").val();
    rate = rate/100;
    if (!this.checkValidity()) {
        e.preventDefault(); // Prevent submission if invalid
        e.stopPropagation();
    }
    // $(this).addClass("was-validated"); // Adds Bootstrap validation styling adds green or check

    if(this.checkValidity()){
        console.log("hgvghf",amount,rate,term);
        show=true;
        if($("#flexRadioDefault1").is(":checked")){
            let temp = Math.pow((1+rate/12),term*12);
            let monthly = eval(Math.ceil((amount*(rate/12)*temp)/(temp-1)));
            console.log(monthly);
            if(show){
                $(".result").removeClass("d-none");
                $(".empty").addClass("d-none");
                $("#repayMonth").html(`<i class="fa fa-inr" aria-hidden="true"></i> ${monthly}`);
                $("#repayTerm").html(`<i class="fa fa-inr" aria-hidden="true"></i> ${monthly*12}`)
                

            }
        }
        else if($("#flexRadioDefault2").is(":checked")){
            let monthly = eval(Math.ceil(amount*(rate/12)));
            console.log(monthly);
            if(show){
                $(".result").removeClass("d-none");
                $(".empty").addClass("d-none");
                $("#repayMonth").html(`<i class="fa fa-inr" aria-hidden="true"></i> ${monthly}`);
                $("#repayTerm").html(`<i class="fa fa-inr" aria-hidden="true"></i> ${monthly*12}`)
                

            }
        }

   
    }
    });

    

});