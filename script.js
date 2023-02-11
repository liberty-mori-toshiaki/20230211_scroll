
const container = document.querySelector(".container");
container.addEventListener("scroll", () => {
    const box_wrap = document.querySelector(".box_wrap");
    scrollTop_value = container.scrollTop;
    clientHeight = container.clientHeight;
    console.log(`scroll top ${scrollTop_value} - ${clientHeight}`);
    if (scrollTop_value == 850) {
        alert("in!!!");
        box_wrap.innerHTML += `
                                <div class="box"></div>
    `;
    }
});
