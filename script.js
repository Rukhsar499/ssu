
const urlParams = new URLSearchParams(window.location.search);
const utmsrc = urlParams.get("utm_source");

function openCenteredWindow(url, title, width, height) {
    // Calculate screen position to center the window
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    
    // Open the new window with calculated position
    const newWindow = window.open(
      url,
      title,
      `width=${width},height=${height},left=${left},top=${top}`
    );
    
    // Focus the new window (optional)
    if (newWindow) {
      newWindow.focus();
    }
    
    return newWindow;
  }

document.querySelectorAll('form').forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('sname');
        const phone = formData.get('sphone');
        const email = formData.get('semail');
        const qualification = formData.get('qualification');
        const city = formData.get('city');
        const message = formData.get('message');

        const submitButton = form.querySelector('button[type="submit"]');

        // Show submitting message and disable the button
        submitButton.disabled = true;
        submitButton.style.opacity = 0.6;
        submitButton.textContent = "Submitting...";

        const handleSubmitForm = async () => {
            try {
                const res = await fetch("/api/submit", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify([
                        {
                            "candidate_name": name,
                            "candidate_number": phone,
                            "alternative_number": "",
                            "email_id": email,
                            "class_name": qualification,
                            "college_id": 3,
                            "college_name": "Sri Sri University",
                            "location": message || "",
                            "postal_code": "",
                            "query": city,
                            "source": "Google Search",
                            "enquiry_type": "",
                            "utm_Source": utmsrc || "",
                            "data_provider": "DW",
                            "entry_by": "9998887771"
                        }
                    ])
                });

                const data = await res.json();

                if (!res.ok) {
                    throw new Error("Something went wrong");
                }

                openCenteredWindow('thankyou.html', '_blank', 600, 400);

                form.reset();
            } catch (error) {
                console.error("Submission error:", error);
            } finally {
                // Re-enable the button
                submitButton.disabled = false;
                submitButton.style.opacity = 1;
                submitButton.textContent = "Enrol Now!";
            }
        };

        handleSubmitForm();
    });
});