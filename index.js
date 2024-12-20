//                DARK MODE

let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme")
    if(document.body.classList.contains("light-theme")){
        icon.src = "image/icons8-sun-50 (1).png";
    }else{
        icon.src = "image/icons8-moon-50 (2).png";
    }
}

//             PROJECT IMAGE


const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  const slider = card.querySelector('.slider');
  const images = slider.querySelectorAll('img');
  const totalImages = images.length;

  const prevBtn = card.querySelector('.prev-btn');
  const nextBtn = card.querySelector('.next-btn');

  let currentIndex = 0;

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
});
