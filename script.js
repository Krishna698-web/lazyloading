const card = document.querySelector(".container");
const loading = document.querySelector(".load_animation");

const randomIMages = () => {
  for (let i = 0; i < 10; i++) {
    fetch("https://source.unsplash.com/random").then((res) => {
      // console.log(res);
      let image = document.createElement("img");
      image.src = res.url;
      card.appendChild(image);
    });
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loading.classList.toggle("show", entry.isIntersecting);
        randomIMages();
      }
    });
  },
  { threshold: 1 }
);

observer.observe(loading);
