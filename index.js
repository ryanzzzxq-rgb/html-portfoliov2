document.addEventListener("DOMContentLoaded", function () {

  const text =
    "Graphic Designer | Full-Stack Web Developer | DevOps Engineer | Cybersecurity Enthusiast\nHelping brands grow, stay secure, and stand out online.";

  const el = document.getElementById("typing-text");

  let i = 0;
  let deleting = false;

  function loopType() {

    let current = text.substring(0, i);
    el.innerHTML = current.replace(/\n/g, "<br>");

    if (!deleting) {
      i++;
    } else {
      i--;
    }

    // finished typing
    if (i === text.length) {
      deleting = true;
      setTimeout(loopType, 1500); // pause before deleting
      return;
    }

    // finished deleting
    if (i === 0) {
      deleting = false;
    }

    setTimeout(loopType, deleting ? 30 : 60);
  }

  loopType();
});


document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.querySelector(".close-popup");

  const buttons = document.querySelectorAll(".view-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

      const card = e.target.closest(".project-card");
      const img = card.querySelector("img");

      popup.classList.add("show");
      popupImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });

});

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ef4444" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      color: "#ef4444"
    },
    move: { enable: true, speed: 3 }
  }
});

function animateNumber(id, target, speed = 20) {
  const el = document.getElementById(id);
  if (!el) return;

  let current = 0;

  clearInterval(el._timer); // stop previous animation if any

  el._timer = setInterval(() => {
    current++;
    el.textContent = current;

    if (current >= target) {
      clearInterval(el._timer);
    }
  }, speed);
}

// RUN COUNTERS
function runCounters() {
  animateNumber("projects", 50, 25);
  animateNumber("skills", 80, 25);
  animateNumber("quality", 100, 20);
}

// OBSERVER (REPEAT ENABLED)
function setupObserver() {
  const section = document.querySelector(".work-process");

  if (!section) return;

  let visible = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !visible) {
          visible = true;
          runCounters();
        }

        if (!entry.isIntersecting) {
          visible = false; // reset when leaving section
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(section);
}

window.addEventListener("load", setupObserver);

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const elements = document.querySelectorAll(
  "section, .card, .project-card, .testimonial-card, .skill-box"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

elements.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

const cursorCircle = document.querySelector(".cursor-circle");

// follow mouse everywhere
document.addEventListener("mousemove", (e) => {
  cursorCircle.style.left = e.clientX + "px";
  cursorCircle.style.top = e.clientY + "px";
});

// elements that should trigger hover effect
const hoverTargets = document.querySelectorAll(
  "a, button, .card, .project-card, img, li, input, textarea"
);

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorCircle.style.width = "90px";
    cursorCircle.style.height = "90px";
    cursorCircle.style.background = "#00ffae";
  });

  el.addEventListener("mouseleave", () => {
    cursorCircle.style.width = "50px";
    cursorCircle.style.height = "50px";
    cursorCircle.style.background = "white";
  });
});

const percentText = document.getElementById("percent");
const progressBar = document.querySelector(".progress");
const loader = document.querySelector(".intro-loader");

let percent = 0;

const loading = setInterval(() => {
  percent++;

  percentText.textContent = percent;
  progressBar.style.width = percent + "%";

  if (percent >= 100) {
    clearInterval(loading);

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      document.body.style.overflowY = "auto";
    }, 400);
  }
}, 20);

const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav-links");

btn.addEventListener("click", () => {
  nav.classList.toggle("show");
});