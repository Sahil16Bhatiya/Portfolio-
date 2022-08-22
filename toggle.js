

function togglemMenu() {
	const menuToggle = document.querySelector('.toggle');
	const sideBar = document.querySelector('.slidebar');
    menuToggle.classList.toggle('active');
    sideBar.classList.toggle('active');
}

//click to show intro

document.querySelector(".btn").addEventListener("click",function(){
	document.querySelector(".banner .contentBox p").style.display = "flex";
	document.querySelector(".cross").style.display = "flex";
})


document.querySelector(".cross").addEventListener("click",function(){
	document.querySelector(".banner .contentBox p").style.display = "none";
	document.querySelector(".cross").style.display = "none";
})



 