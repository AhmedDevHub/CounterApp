let count = 0;

document.getElementById("increment").addEventListener("click", function() {
    count++;
    updateCount();
});

document.getElementById("decrement").addEventListener("click", function() {
    count--;
    updateCount();
});

document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    updateCount();
});

function updateCount() {
    document.getElementById("count").textContent = count;
}
