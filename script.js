var boxElement = document.getElementsByClassName("pill");

boxElement.addEventListener("mouseover", function() {
  changeBackgroundColor(boxElement);
});

boxElement.addEventListener("mouseout", function() {
  resetBackgroundColor(boxElement);
});

function changeBackgroundColor(element) {
  var randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
}

function resetBackgroundColor(element) {
  element.style.backgroundColor = '#f0f0f0';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  var bgcolor = color;
  for (var i = 0; i < 6; i++) {
    bgcolor = bgcolor + letters[Math.floor(Math.random() * 16)];
  }
  return bgcolor;
}


const navLinks = document.querySelectorAll('.navlist a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});