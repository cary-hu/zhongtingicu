const emojiElements = ["😅", "🥲", "🙂", "🙃", "😏", "👻", "💀", "☠️", "🈚️", "🛑", "⛔️", "📛", "🚫", "⚠️"];
const emojiContainer = document.querySelector(".emoji-container");

emojiElements.forEach(element => {
    const div = document.createElement("div");
    div.innerHTML = element;
    div.classList.add("emoji");
    emojiContainer.appendChild(div);
});
function emojiAnime() {
    anime({
        targets: '.emoji',
        translateX: () => {
            return anime.random(-270, 270);
        },
        translateY: () => {
            return anime.random(-270, 270);
        },
        scale: () => {
            return anime.random(1, 2);
        },
        duration: 800,
        complete: emojiAnime,
    });
}
emojiAnime();