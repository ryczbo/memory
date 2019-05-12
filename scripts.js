
	let pictures = [];
	let guesses = [];
	let attempts = 0;
	let score = 0;
	let count = 0;
	let board = '';
	let innerSrc = '';
	let hasChecked = false;
	let picturesImgs = [
  "http://img5.uploadhouse.com/fileuploads/17699/176992640c06707c66a5c0b08a2549c69745dc2c.png",
  "http://img6.uploadhouse.com/fileuploads/17699/17699263b01721074bf094aa3bc695aa19c8d573.png",
  "http://img6.uploadhouse.com/fileuploads/17699/17699262833250fa3063b708c41042005fda437d.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992615db99bb0fd652a2e6041388b2839a634.png",
  "http://img4.uploadhouse.com/fileuploads/17699/176992601ca0f28ba4a8f7b41f99ee026d7aaed8.png",
  "http://img3.uploadhouse.com/fileuploads/17699/17699259cb2d70c6882adc285ab8d519658b5dd7.png",
  "http://img2.uploadhouse.com/fileuploads/17699/1769925824ea93cbb77ba9e95c1a4cec7f89b80c.png",
  "http://img7.uploadhouse.com/fileuploads/17699/1769925708af4fb3c954b1d856da1f4d4dcd548a.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992568b759acd78f7cbe98b6e4a7baa90e717.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992554c2ca340cc2ea8c0606ecd320824756e.png",
  "http://img5.uploadhouse.com/fileuploads/17699/176992640c06707c66a5c0b08a2549c69745dc2c.png",
  "http://img6.uploadhouse.com/fileuploads/17699/17699263b01721074bf094aa3bc695aa19c8d573.png",
  "http://img6.uploadhouse.com/fileuploads/17699/17699262833250fa3063b708c41042005fda437d.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992615db99bb0fd652a2e6041388b2839a634.png",
  "http://img4.uploadhouse.com/fileuploads/17699/176992601ca0f28ba4a8f7b41f99ee026d7aaed8.png",
  "http://img3.uploadhouse.com/fileuploads/17699/17699259cb2d70c6882adc285ab8d519658b5dd7.png",
  "http://img2.uploadhouse.com/fileuploads/17699/1769925824ea93cbb77ba9e95c1a4cec7f89b80c.png",
  "http://img7.uploadhouse.com/fileuploads/17699/1769925708af4fb3c954b1d856da1f4d4dcd548a.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992568b759acd78f7cbe98b6e4a7baa90e717.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992554c2ca340cc2ea8c0606ecd320824756e.png"
	];

// tutaj przypisuję funkcję startującą do buttona

document.querySelector(".start").addEventListener('click', function () {
    start();
    teraz();
});

function teraz() {
document.querySelectorAll('.card').forEach(card => card.addEventListener('click', playerAction))};

// funkcja startująca grę
//========================

	function start() {

// czyszczenie tablicy
		
		board = document.querySelector('.board');
		board.innerHTML = '';
        pictures = [];
        guesses = [];
		
// tutaj do tablicy pictures wrzucam linki do obrazków

		for (let i=0; i < picturesImgs.length; i++) {
			pictures.push(picturesImgs[i]);	
		};

// tutaj mieszam tablicę z obrazkami

		for (var i = pictures.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = pictures[i];
			pictures[i] = pictures[j];
			pictures[j] = temp;
		};

// tutaj wrzucam obrazki do nowo utworzonych divów, żeby je wyświetlić

		for (let i=0; i < pictures.length; i++) {
			const card = document.createElement('div');
			card.classList.add('card');
			board.appendChild(card);
			innerSrc = "<img src = '" + pictures[i] + "'/>";
			card.innerHTML = innerSrc
		}
		};



function playerAction() {
	

	if(guesses.length<2){
        this.classList.add('rear');
		guesses.push(this.innerHTML);
		console.log(guesses);
        console.log(guesses.length);
        checkMatch();
    }

};


function checkMatch() {
	if (guesses[0] === guesses[1]){
        console.log('bend');
		guesses = [];
    }
    else if (guesses.length === 2 && guesses[0] !== guesses[1]){
        guesses = [];
    }
};




		






