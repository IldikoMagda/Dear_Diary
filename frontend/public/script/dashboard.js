const entryList = document.querySelector("#entries ul")
console.log(entryList)
console.log(entryList.lastChild)

entryList.lastElementChild.addEventListener("click", getModal)

function getModal() {
    alert("a")
}