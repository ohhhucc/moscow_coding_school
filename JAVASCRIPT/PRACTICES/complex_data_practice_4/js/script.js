let newSchool = [
  [
 	['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert', 'Rae Sremmurd'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna', 'Timbaland']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
];

for(var i = 0; i < newSchool.length; i++) {
	for(var j = 0; j < newSchool[i].length; j++) {
		for(var n = 0; n < newSchool[i][j].length; n++) {
			console.log(newSchool[i][j][n]);
		}
	}
}