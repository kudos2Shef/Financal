

$(document).ready(function() {
    const myModal = $("#memoryModal");
    let money= $("#money");
    let type,name;
    const saveBtn = $("#saveMemory");

    let storedValues = JSON.parse(localStorage.getItem("memoryValues")) || [];

    // Focus input when modal opens
    myModal.on('shown.bs.modal', function() {
        money.focus();
    });

    $(".form-check-input").change(function(e){
        $("#error").text("").css("color","transparent");

        e.preventDefault();
        $(".form-check").css({"border":"1px solid black","background":"transparent"});
       
     // console.log(this.id);
    $("#"+this.id).parent().css({"border":"1px solid var(--hover)","background":"var(--hover1)"});
    //  type=$("#"+this.id).val();
    //  console.log(type);
    });
    $("#name").change(function(e){
        name = $(this).val();
    })
    $("#money").change(function(e){
        money = $(this).val();
    })

    
    saveBtn.on("click", function () {
        type = $("input[name='flexRadioDefault']:checked").next("label").text().trim();
        money = $("#money").val();
        name = $("#name").val();
    
        if (!type || !name || !money) {
            alert("Please fill in all fields before saving.");
            return;
        }
    
        let memoryData = {
            payType: type,
            name: name,
            amount: money
        };
    
        storedValues.push(memoryData);
        localStorage.setItem("memoryValues", JSON.stringify(storedValues));
    
        alert("Value saved in memory!");
    
        // Notify other pages (like history.html) about the change
        window.dispatchEvent(new Event("storage"));
    
        // Clear input fields
        $("#money").val("");
        $("#name").val("");
        $("input[name='flexRadioDefault']").prop("checked", false);
    
    });
});

















