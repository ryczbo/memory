
	let pictures = [ "http://img5.uploadhouse.com/fileuploads/17699/176992640c06707c66a5c0b08a2549c69745dc2c.png",
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
	"http://img9.uploadhouse.com/fileuploads/17699/176992554c2ca340cc2ea8c0606ecd320824756e.png"];
	let attempts = document.getElementById('counter');
	let firstCard;
	let secondCard;
	let board = '';
	let innerSrc = '';
	let hasChecked = false;


// assigning a button to the starting function

document.querySelector(".start").addEventListener('click', function () {
    start();
	listenImgs();
});

// listening for image clicks
function listenImgs() {
document.querySelectorAll('img').forEach(image => image.addEventListener('click', playerAction))
};

// starting function
//========================

	function start() {

// cleaning up the board
		
		board = document.querySelector('.board');
		board.innerHTML = '';
		attempts.innerHTML = 0;
		hasChecked = false;

// shuffling the array of pictures

		for (var i = pictures.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = pictures[i];
			pictures[i] = pictures[j];
			pictures[j] = temp;
		};

// displaying the pictures on the board

		for (let i=0; i < pictures.length; i++) {
			const card = document.createElement('div');
			card.classList.add('card');
			board.appendChild(card);
			innerSrc = "<img src = '" + pictures[i] + "'/>";
			card.innerHTML = innerSrc;
		}
		};

//===========================

function playerAction() {
	

		this.style.opacity = 1;

		   if (!hasChecked){
			   hasChecked = true;
			   firstCard = this;
		   }

		   else if (hasChecked){
		   hasChecked = false;
		   secondCard = this; 
		   attempts.innerHTML++;
		   checkMatch();}
	
};
	
	function checkMatch() {
		if (firstCard.src === secondCard.src){
			console.log('bend');

		}
		else {
			setTimeout(() => {
			firstCard.style.opacity = 0;
			secondCard.style.opacity = 0;
			}, 1000);
			
		}

};


