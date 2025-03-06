

$(document).ready(function() {
    function loadMemoryHistory() {
        let memoryCards = $("#memoryCards");
        let storedValues = JSON.parse(localStorage.getItem("memoryValues")) || [];

        memoryCards.empty(); // Clear previous cards before updating

        if (storedValues.length > 0) {
            storedValues.forEach((value, index) => {
                let card = `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Memory ${index + 1}</h5>
                                <p class="card-text"><strong>Type:</strong> ${value.payType}</p>
                                <p class="card-text"><strong>Name:</strong> ${value.name}</p>
                                <p class="card-text"><strong>Amount:</strong> ${value.amount}</p>
                                <button class="btn btn-danger delete-memory" data-index="${index}">Delete</button>
                            </div>
                        </div>
                    </div>`;
                memoryCards.append(card);
            });
        } else {
            memoryCards.html(`<p>No memory items found.</p>`);
        }
    }

    // Load history on page load
    loadMemoryHistory();

    // Listen for storage updates across tabs
    window.addEventListener("storage", function(event) {
        if (event.key === "updateMemory") {
            console.log("Detected update in storage!");
            loadMemoryHistory(); // Update cards without reload
        }
    });

    // Save button inside `history.html`
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
       
    $("#"+this.id).parent().css({"border":"1px solid var(--hover)","background":"var(--hover1)"});
    
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

    // Retrieve previous stored data
    let storedValues = JSON.parse(localStorage.getItem("memoryValues")) || [];
    storedValues.push(memoryData);

    // Save updated data in localStorage
    localStorage.setItem("memoryValues", JSON.stringify(storedValues));

    alert("Value saved in memory!");

    // Force update history **without page reload**
    loadMemoryHistory(); 

    // Clear input fields
    $("#money").val("");
    $("#name").val("");
    $("input[name='flexRadioDefault']").prop("checked", false);
});

    // Delete individual memory items
    $(document).on("click", ".delete-memory", function() {
        let index = $(this).data("index");
        let storedValues = JSON.parse(localStorage.getItem("memoryValues")) || [];

        storedValues.splice(index, 1);
        localStorage.setItem("memoryValues", JSON.stringify(storedValues));

        loadMemoryHistory(); // Update instantly
    });

    // Clear all memory when button is clicked
    $("#clr").click(function() {
        localStorage.removeItem("memoryValues");

        loadMemoryHistory(); // Refresh without reload
    });
});
