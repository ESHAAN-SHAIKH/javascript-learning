let count = 0;

const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.onclick = () => {
    count++;
    counter.textContent = count;
};

decrease.onclick = () => {
    count--;
    counter.textContent = count;
};

reset.onclick = () => {
    count = 0;
    counter.textContent = count;
};
