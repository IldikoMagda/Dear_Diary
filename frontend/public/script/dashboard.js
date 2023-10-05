const entryList = document.querySelector("#entries ul")
const modal = document.getElementById("full-entry")
const exitModal = document.getElementById("close")
console.log(entryList)
console.log(entryList.lastChild)

entryList.lastElementChild.addEventListener("click", getModal)
exitModal.addEventListener("click", closeModal)
// window.addEventListener("click", closeModal)

function getModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}