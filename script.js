function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        alert("Пожалуйста, введите ваше имя.");
        return false;
    }

    if (!email) {
        alert("Пожалуйста, введите ваш email.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Пожалуйста, введите корректный email.");
        return false;
    }

    alert("Спасибо, " + name + "! Ваше сообщение отправлено.");
    return true;
}