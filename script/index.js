const animeContainer = document.querySelector(".anime-container");

const emojiList = ["🥰", "😘", "😁", "😆", "🎁", "🎈", "🎊", "🎉", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "😀", "😃", "😄", "😊", "🥰", "😘", "😗", "😙", "😚", "🤩", "🥳", "😻", "😼", "😽", "👻"];

emojiList.forEach(emoji => {
    const div = document.createElement("div");
    div.innerHTML = emoji;
    div.classList.add("emoji");
    animeContainer.appendChild(div);
});

function RunAnime() {
	anime({
		targets: ".emoji",
		translateX: () => {
			return anime.random(-750, 750);
		},
		translateY: () => {
			return anime.random(-300, 300);
		},
		scale: () => {
			return anime.random(1, 3);
		},
		duration: 800,
		complete: RunAnime,
	});
}

RunAnime();