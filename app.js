const wrapper = document.querySelector(".wrapper"),
  itemShape = wrapper.querySelector(".item .shape"),
  contextMenu = wrapper.querySelector(".context_menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let x = e.x,
    y = e.y;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const wrapperWidth = wrapper.offsetWidth;
  const wrapperHeight = wrapper.offsetHeight;
  const contextMenuWidth = contextMenu.offsetWidth;
  // console.log(windowWidth, windowHeight);
  // console.log(wrapperWidth, contextMenuWidth);
  console.log(x, windowWidth);
  x = x > windowWidth - wrapperWidth ? windowWidth - wrapperWidth : x;
  y = y > windowHeight - wrapperHeight ? windowHeight - wrapperHeight : y;

  if (x > windowWidth - (wrapperWidth + contextMenuWidth)) {
    contextMenu.style.left = `-165px`;
  } else {
    contextMenu.style.left = ``;
  }

  wrapper.style.left = `${x}px`;
  wrapper.style.top = `${y}px`;
  wrapper.style.visibility = "visible";
});

document.addEventListener("click", () => (wrapper.style.visibility = "hidden"));
