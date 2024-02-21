let items = []
let listEl = document.querySelector("#list")
let inputEl = document.querySelector("#text-input")
let saveBtnEl = document.querySelector("#save-btn")
let trashEls = document.querySelectorAll(".trash")

inputEl.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        saveItem()
    }
})

saveBtnEl.addEventListener("click", function () {
    saveItem()
})

function saveItem() {
    if (inputEl.value == "" || inputEl.value == " ") {
        return
    }
    items.push(inputEl.value)
    inputEl.value = ""
    render()
}

function remover(removeMe) {
    let clean = removeMe + ""
    clean = removeMe.substr(3, clean.length)
    items.splice(clean, 1)
    render()
}

function checkRemoval() {
    trashEls = document.querySelectorAll(".item")
    for(let i = 0; i < trashEls.length; i++) {
        trashEls[i].addEventListener("click", function() {
            remover(trashEls[i].getAttribute("id"));
        })
    }
}

function render() {
    listEl.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        listEl.innerHTML += `
        <li id="btn${i}" class="item">${items[i]} <img class="trash" src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png" alt="trash can icon">
        </li>
        `
    }

    checkRemoval()
}