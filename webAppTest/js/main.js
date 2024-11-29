let tg = window.Telegram.WebApp

tg.expand()

// tg.initDataUnsafe.id

let arr = [["id", tg.initDataUnsafe.id],
["nick", tg.initDataUnsafe.user_name],
["fname", tg.initDataUnsafe.first_name],
["lname", tg.initDataUnsafe.last_name]]

arr.forEach((tag) => {
    let el = document.getElementById(tag[0]).getElementsByTagName("span")[0]
    el.textContent = tag[1]
})


