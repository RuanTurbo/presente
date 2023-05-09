var motivos = [
	"Sempre me ajudou",
	"Sempre me apoiou",
	"Joga e se diverte comigo",
	"Sempre me defendi",
	"E acima de tudo sempre me amou",
	];
	
	
	
	var images = [
	  "7beee90e-20d6-45c7-9037-5d42ada020fe.jpg",
	  "9bb20817-c23d-49c0-a1f4-69b094f1dc80.jpg",
	  "43313e5c-6d1e-4d44-b647-3bd852ad2643.jpg",
	  "Screenshot_20210328-170705_Gallery.jpg",
	  "cebf66bd-81ad-4aa5-8bdf-30901e50b57b.jpg"
	];
	
	var i = 0;
	function proximoslide() {
	document.getElementById("textomotivos").innerHTML = motivos [i];
	document.getElementById("album").src = images [i];
	i++;
	document.getElementById("audio").play () ;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var i = 0;
	function proximoslide() {  
		document.getElementById("textomotivos").innerHTML = motivos[i];
		document.getElementById("album").src = images[i];
		i++;
		document.getElementById("audio").play();
	  
	}
	