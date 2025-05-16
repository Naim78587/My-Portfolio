 const phrases = [
    "Frontend Developer |",
    "UI/UX Designer |",
    "Shopify Developer |"
  ];

  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;
  const speed = 100;
  const eraseSpeed = 50;
  const delayBetween = 1000;

  function typeLoop() {
    const textElement = document.getElementById("typing-text");
    const currentText = phrases[currentPhrase];
    
    if (isDeleting) {
      currentChar--;
      textElement.innerHTML = currentText.substring(0, currentChar);
    } else {
      currentChar++;
      textElement.innerHTML = currentText.substring(0, currentChar);
    }

    if (!isDeleting && currentChar === currentText.length) {
      // Done typing, wait then start deleting
      isDeleting = true;
      setTimeout(typeLoop, delayBetween);
    } else if (isDeleting && currentChar === 0) {
      // Done deleting, move to next phrase
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(typeLoop, 500);
    } else {
      setTimeout(typeLoop, isDeleting ? eraseSpeed : speed);
    }
  }
  window.onload = typeLoop;
//code for about sections
  var tablinks = document.getElementsByClassName("tab-link");
    var tabContents = document.getElementsByClassName("tab-content");

    function opentab(element, tabName) {
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
        tabContents[i].classList.remove("active-content");
      }

      element.classList.add("active-link");
      document.getElementById(tabName).classList.add("active-content");
    }

    //bar chart effect
  function animateSkillBars() {
    const bars = document.querySelectorAll('.bar');
    const triggerBottom = window.innerHeight;

    bars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < triggerBottom;

      if (isVisible && !bar.classList.contains('animated')) {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
        bar.classList.add('animated');
      }
    });
  }

  window.addEventListener('scroll', animateSkillBars);
  window.addEventListener('load', animateSkillBars);

  //round shape
  function animateCircularBars() {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
      const rect = circle.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible && !circle.classList.contains('animated')) {
        const percent = parseInt(circle.getAttribute('data-percent'));
        const progressCircle = circle.querySelector('.progress');
        const percentageText = circle.querySelector('.percentage');

        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        progressCircle.style.strokeDashoffset = offset;
        circle.classList.add('animated');

        // Animate number
        let count = 0;
        const step = () => {
          if (count <= percent) {
            percentageText.textContent = count + "%";
            count++;
            requestAnimationFrame(step);
          }
        };
        step();
      }
    });
  }

  window.addEventListener('scroll', animateCircularBars);
  window.addEventListener('load', animateCircularBars);