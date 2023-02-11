const container = document.querySelector(".container");
container.addEventListener("scroll", () => {
  const box_wrap = document.querySelector(".box_wrap");

  scrollTop_value = container.scrollTop;
  clientHeight = container.clientHeight;
  console.log(`scroll top ${scrollTop_value} - ${clientHeight}`);

  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");

  if (scrollTop_value < 10) {
    box2.classList.remove("slideIn");
    box3.classList.remove("slideIn");
  }
  if (scrollTop_value > 10) {
    console.log("slideIn 1");
    box2.classList.add("slideIn");
  }
  if (scrollTop_value > clientHeight) {
    console.log("slideIn 2");
    box3.classList.add("slideIn");
  }
});
