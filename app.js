let users = [];

fetch("users.json")
  .then((response) => response.json())
  .then((data) => {
    users = data;
  })
  .catch((error) => {
    console.error("Kullanıcı verisi yüklenemedi:", error);
  });

function registerUser() {
  const email = document
    .getElementById("emailInput")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("passwordInput").value.trim();
  const message = document.getElementById("message");

  const emailkontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailkontrol.test(email)) {
    message.textContent = "Geçerli bir e-posta adresi giriniz.";
    return;
  }

  if (!email || !password) {
    message.textContent = "Lütfen e-posta ve şifre girin.";

    return;
  }

  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    message.textContent = "Bu e-posta zaten kayıtlı.";
  } else {
    users.push({ email, password });
    message.textContent = "Kayıt başarılı!";
    console.log("Yeni kullanıcı eklendi:", { email, password });
  }
}
