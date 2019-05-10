// tworzę obiekt ze zmiennymi pilnującymi gry

const memoGame = {
	pictures: [],
	pickedPictures: [],
	attempts: 0,
	score: 0,
	board: '',
	picturesImgs: [
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
	],



// funkcja startująca grę

	start: function() {
		this.board = document.querySelector('.board');
		console.log("działa");

// tutaj do tablicy pictures wrzucam linki do obrazków

		for (let i=0; i < this.picturesImgs.length; i++) {
			this.pictures.push(this.picturesImgs[i]);
			
		}

// tutaj mieszam tablicę z obrazkami

		for (var i = this.pictures.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = this.pictures[i];
			this.pictures[i] = this.pictures[j];
			this.pictures[j] = temp;
		}

// tutaj wrzucam obrazki do nowo utworzonych divów, żeby je wyświetlić

		for (let i=0; i < this.pictures.length; i++) {
			const card = document.createElement('div');
			card.classList.add('card');
			this.board.appendChild(card);
			let innerSrc = "<img src = '" + this.pictures[i] + "'/>";
			card.innerHTML = innerSrc;
		}

	},

};

// tutaj przypisuję funkcję startującą do buttona

document.querySelector(".start").addEventListener('click', function () {
		memoGame.start();
	});

