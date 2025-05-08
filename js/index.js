function
loadHTML(id, file)
{
	fetch(file)
		.then((res) => {
			if (!res.ok) throw new Error('[ERROR]: Failure in resolution');
			return res.text();
		})
		.then((data) =>{
			document.getElementById(id).innerHTML = data;
		})
		.catch((e) => console.error("[ERROR]: Could not open HTML: ", e));
};

loadHTML("navbar", "html/navbar.html");
loadHTML("header", "html/header.html");
loadHTML("footer", "html/footer.html");

