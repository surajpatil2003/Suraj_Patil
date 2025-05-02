<script>
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const data = new FormData(form);
    const statusMsg = document.getElementById("formSuccess");

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset();
            statusMsg.style.display = "block";
        } else {
            statusMsg.textContent = "Oops! Something went wrong. Please try again.";
            statusMsg.style.color = "red";
            statusMsg.style.display = "block";
        }
    } catch (error) {
        statusMsg.textContent = "Error sending message.";
        statusMsg.style.color = "red";
        statusMsg.style.display = "block";
    }
});
</script>
