const scrollContainer = document.scrollingElement || document.documentElement;

let currentScroll = scrollContainer.scrollTop;
let targetScroll = currentScroll;
let scrolling = false;

window.addEventListener("wheel", (event) => {
    event.preventDefault();

    targetScroll += event.deltaY;
    targetScroll = Math.max(0, Math.min(targetScroll, scrollContainer.scrollHeight - window.innerHeight));

    if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(smoothScrollAnimation);
    }

}, { passive: false });

function smoothScrollAnimation() {
    scrolling = true;

    currentScroll += (targetScroll - currentScroll) * 0.050;
    scrollContainer.scrollTop = currentScroll;

    if (Math.abs(targetScroll - currentScroll) > 0.2) {
        requestAnimationFrame(smoothScrollAnimation);
    } else {
        scrolling = false;
    }
}