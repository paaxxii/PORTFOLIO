document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Back to top
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Contact form
    const submitBtn = document.getElementById("submitBtn");
    const successAlert = document.getElementById("successAlert");

    if (submitBtn) {
        submitBtn.addEventListener("click", function () {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill all fields.");
                return;
            }

            successAlert.style.display = "block";

            setTimeout(() => {
                successAlert.style.display = "none";
            }, 3000);

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        });
    }
});
