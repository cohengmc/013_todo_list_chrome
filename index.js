let items = []
listEl = document.querySelector("#list")
inputEl = document.querySelector("#text-input")
saveBtnEl = document.querySelector("#save-btn")

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

function remove(removeMe) {
    let clean = removeMe + ""
    clean = removeMe.substr(3, clean.length)
    items.splice(clean, 1)
    console.log(removeMe);
    render()
}

function render() {
    listEl.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        listEl.innerHTML += `
        <li id="btn${i}" onclick="remove(id)">${items[i]} <img class="trash" src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png" alt="trash can icon">
        </li>
        `
    }
}