	var map = L.map('map').setView([48.29569960648587, 25.933912477867402], 13);
	
	L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; OpenStreetMap & CartoDB'
	}).addTo(map);