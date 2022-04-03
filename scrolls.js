const onScroll = document.querySelectorAll(".scroll");

const scrolled = (elem, div = 1) => {
   const topElem = elem.getBoundingClientRect().top;

   return (topElem <= (window.innerHeight || document.documentElement.clientHeight) / div);
}

const scrolledOut = (elem) => {
   const topElem = elem.getBoundingClientRect().top;

   return (topElem < (window.innerHeight || document.documentElement.clientHeight));
}

const appearElem = (elem) => {
   elem.classList.add("scrolled");
}

const hideElem = (elem) => {
   elem.classList.remove("scrolled");
}

const scrollAnimate = () => {
   onScroll.forEach((elem) => {
      if (scrolled(elem, 1.25)) {
         appearElem(elem);
      } else if (scrolledOut(elem)) {
         hideElem(elem)
      }
   })
}

window.addEventListener("scroll", () => {
   scrollAnimate();
})