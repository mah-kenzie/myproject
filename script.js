document.addEventListener("DOMContentLoaded", function () {
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const submitBtn = document.getElementById("submit-btn");

    // Fields in Step 2
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("date");

    // Next button: Enable Step 2 fields
    nextBtn.addEventListener("click", function () {
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (firstName && lastName && email) {
            phoneInput.disabled = false;
            dateInput.disabled = false;
            submitBtn.disabled = false;
            nextBtn.disabled = true; // Disable "Next" after proceeding
        } else {
            alert("Please fill in all fields in Step 1.");
        }
    });

    // Previous button: Disable Step 2 fields
    prevBtn.addEventListener("click", function () {
        phoneInput.disabled = true;
        dateInput.disabled = true;
        submitBtn.disabled = true;
        nextBtn.disabled = false; // Re-enable "Next"
    });

    // Prevent form submission if any required fields are empty
    const form = document.getElementById("booking-form");
    form.addEventListener("submit", function (event) {
        const phone = phoneInput.value.trim();
        const date = dateInput.value;

        if (!phone || !date) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill in all fields in Step 2.");
        }
    });
});