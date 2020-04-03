let modal = document.getElementById("template-modal");
let modalBtn = document.getElementById("previewModal1");

modalBtn.onClick = () => {
	modal.style.display = "block";
	console.log('hello')
}

window.onClick = e => {
	if(e.target == modal) {
		modal.style.display = "none";
	}
}

console.log(modal)
console.log(modalBtn)