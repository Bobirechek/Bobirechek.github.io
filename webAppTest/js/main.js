let tg = window.Telegram.WebApp

tg.expand()

document.getElementById("nick").getElementsByTagName("span")[0].textContent = String(tg.initDataUnsafe.user.id)
document.getElementById("nick").getElementsByTagName("span")[0].textContent = tg.initDataUnsafe.user.username
document.getElementById("fname").getElementsByTagName("span")[0].textContent = tg.initDataUnsafe.user.first_name
document.getElementById("lname").getElementsByTagName("span")[0].textContent = tg.initDataUnsafe.user.last_name
