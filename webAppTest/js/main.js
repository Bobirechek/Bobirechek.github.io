let tg = window.Telegram.WebApp

tg.expand()

let arr = [["id", tg.initDataUnsafe.user.id ],
["nick", tg.initDataUnsafe.user.username],
["fname", tg.initDataUnsafe.user.first_name],
["lname", tg.initDataUnsafe.user.last_name]]

arr.forEach((tag) => {
    let el = document.getElementById(tag[0]).getElementsByTagName("span")[0]
    el.textContent = tag[1]
})
