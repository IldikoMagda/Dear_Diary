const entryList = document.querySelector("#entries ul")
const modal = document.getElementById("full-entry")
const exitModal = document.getElementById("close")

// entryList.lastElementChild.addEventListener("click", getModal)
exitModal.addEventListener("click", closeModal)
// window.addEventListener("click", closeModal)

function getModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}

function creationModal() {

}
function submitCreationModal() {
    let data = "x"
    addEntry(data)
}
function fetchModal(e){
    let target = e.target
    if(target.classList != "entry"){
        target = target.parentElement
    }
    let entry = JSON.parse(target.getAttribute('data'))
    const content = modal.getElementsByClassName("modal-content")[0]
    content.getElementsByClassName("timestamp")[0].textContent = entry.time_of_entry
    content.getElementsByClassName("title")[0].textContent = entry.title
    content.getElementsByClassName("category")[0].textContent = entry.category
    content.getElementsByClassName("content")[0].textContent = entry.content
    getModal()
}

async function loadEntries() {
    const response = await fetch("http://localhost:3000/entries")
    const entries = await response.json()
    entries.forEach(entry => {
        const div = document.createElement("div")
        div.classList.add("entry")
        div.setAttribute('data',JSON.stringify(entry))
        console.log(div.getAttribute('data'))
        const timestamp = document.createElement("h5")
        timestamp.textContent = entry.time_of_entry
        timestamp.classList.add("timestamp")
        const title = document.createElement("h2")
        title.textContent = entry.title
        title.classList.add("title")
        const category = document.createElement("h4")
        category.textContent = entry.category
        category.classList.add("category")
        div.appendChild(timestamp)
        div.appendChild(title)
        div.appendChild(category)
// '<div class="entry" value="text-content"><h5>timestamp</h5><h2>TITLE</h2><h4>category</h4></div>'
        div.addEventListener("click",fetchModal)
        entryList.appendChild(div)
    });
}
function addEntry(data) {

    entryList.prepend()
}

loadEntries()