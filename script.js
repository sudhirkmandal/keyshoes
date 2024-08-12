function page1Animation() {
  var tl = gsap.timeline();
  var video = document.querySelector(".video");
  var videoVideo = document.querySelector(".video video");
  var icon = document.querySelector(".video .icon");

  var flag = 0;
  video.addEventListener("click", function () {
    if (flag === 0) {
      videoVideo.play();
      icon.innerHTML = '<i class="ri-pause-line"></i>';
      flag = 1;
    } else {
      videoVideo.pause();
      icon.innerHTML = '<i class="ri-play-fill"></i>';
      flag = 0;
    }
  });

  tl.from(
    "#nav",
    {
      y: -200,
      duration: 1,
    },
    "a"
  );

  tl.from(
    ".hero h1,.hero h2,.hero h3",
    {
      y: 200,
      stagger: {
        amount: 0.2,
      },
      duration: 1,
    },
    "a"
  );
  tl.from(".video", {
    y: 200,
    x: -100,
    scale: 0,
    opacity: 0,
    duration: 1,
  });
  tl.from(
    ".octa",
    {
      opacity: 0,
      duration: 1,
    },
    "b"
  );
  tl.from(
    ".octatext h5",
    {
      opacity: 0,
      duration: 1,
    },
    "b"
  );
}
page1Animation();

function page2Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 40%",
    },
  });

  tl.from(
    "#page2 .elem h1,#page2 .elem h2",
    {
      y: 160,
      stagger: 0.2,
    },
    "a"
  );

  tl.from(
    "#page2 .img",
    {
      y: 400,
      duration: 1,
      opacity: 0,
    },
    "a"
  );

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2-center",
      scroller: "body",
      start: "top 50%",
      end: "top -100%",
    },
  });
  tl2.from(
    ".page2-center .img1,.page2-center .text, .page2-center .img2",
    {
      y: 300,
      stagger: 0.2,
      duration: 1,
    },
    "b"
  );
  tl2.from(
    "#small",
    {
      y: 400,
      duration: 1,
      opacity: 0,
    },
    "b"
  );
}
page2Animation();

function page3Animation() {
//   var crsr = document.querySelector(".cursor");
  var page3 = document.querySelector("#page3");
  var page3Img1 = document.querySelector(".page3-img1");
  var page3Img2 = document.querySelector(".page3-img2");
  var page3Img3 = document.querySelector(".page3-img3");

  var page3One = document.querySelectorAll(".page3-one");
  page3One.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      val.childNodes[1].style.transform = "rotate(10deg)";
    });

    val.addEventListener("mouseleave", function () {
      val.childNodes[1].style.transform = "rotate(0deg)";
    });
  });

//   page3.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x + "px";
//     crsr.style.top = dets.y + "px";
//   });
//   page3.addEventListener("mouseenter", function () {
//     crsr.style.opacity = 1;
//   });
//   page3.addEventListener("mouseleave", function () {
//     crsr.style.opacity = 0;
//   });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 40%",
      end: "top 0",
    },
  });
  tl.from(
    "#page3 .page3-elem h3",
    {
      y: 140,
      duration: 0.7,
    },
    "a"
  );
  tl.from(
    "#page3 .page3-elem h1",
    {
      y: 140,
      duration: 0.7,
      delay: 0.5,
    },
    "a"
  );

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 20%",
      end: "top 0",
    },
  });

  tl2.from(
    page3Img1,
    {
      x: 1500,
      duration: 1,
    },
    "b"
  );
  tl2.from(
    page3Img2,
    {
      y: 1000,
      duration: 1,
    },
    "b"
  );
  tl2.from(
    page3Img3,
    {
      x: -1500,
      duration: 1,
    },
    "b"
  );
}
page3Animation();

function page4Animation() {
  var page4Elems = document.querySelectorAll(".page4-elems");

  page4Elems.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      val.childNodes[1].style.fontFamily = "A";
      val.childNodes[1].style.fontWeight = "100";
      val.childNodes[1].style.color = "#019C63";
      val.childNodes[3].style.display = "block";
    });
    val.addEventListener("mouseleave", function () {
      val.childNodes[1].style.fontFamily = "E";
      val.childNodes[1].style.color = "#ffffff";
      val.childNodes[3].style.display = "none";
    });
    val.addEventListener("mousemove", function (dets) {
      val.childNodes[3].style.transform = "translate(-50%,-50%) rotate(15deg)";
      gsap.to(val.childNodes[3], {
        left: dets.x - 300,
      });
    });
  });
}
page4Animation();

function page5Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "top 25%",
      end: "top 0",
    },
  });
  tl.from(
    "#page5 .page5-inner h1",
    {
      x: 400,
      stagger: 0.2,
      opacity: 0,
      duration: 0.5,
    },
    "a"
  );
  tl.from(
    "#page5 .page5-inner h2",
    {
      x: -400,
      opacity: 0,
      duration: 0.5,
    },
    "a"
  );
  tl.from(
    "#page5-img1",
    {
      y: 600,
      opacity: 0,
      duration: 0.5,
    },
    "a"
  );
  tl.from(
    "#page5-img2",
    {
      y: 600,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    },
    "a"
  );

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "45%  -50%",
      end: "top -100%",
    },
  });

  tl2.from(".page5-inner2 h1", {
    y: 200,
    stagger: 0.2,
    opacity: 0,
  });

  tl2.from(
    "#page5-img3",
    {
      y: 400,
      opacity: 0,
      duration: 0.5,
    },
    "b"
  );
  tl2.from(
    "#page5-img4",
    {
      y: 400,
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
    },
    "b"
  );

  var page5Img1 = document.querySelector("#page5-img1");
  var page5Img2 = document.querySelector("#page5-img2");

  var page5Img1OriginalSrc = page5Img1.getAttribute("src");
  var page5Img2OriginalSrc = page5Img2.getAttribute("src");

  page5Img1.addEventListener("mouseenter", function () {
    var page5Img2Src = page5Img2.getAttribute("src");
    page5Img1.setAttribute("src", page5Img2Src);
    page5Img2.setAttribute("src", page5Img1OriginalSrc);
  });

  page5Img1.addEventListener("mouseleave", function () {
    page5Img1.setAttribute("src", page5Img1OriginalSrc);
    page5Img2.setAttribute("src", page5Img2OriginalSrc);
  });

  page5Img2.addEventListener("mouseenter", function () {
    var page5Img1Src = page5Img1.getAttribute("src");
    page5Img2.setAttribute("src", page5Img1Src);
    page5Img1.setAttribute("src", page5Img2OriginalSrc);
  });

  page5Img2.addEventListener("mouseleave", function () {
    page5Img2.setAttribute("src", page5Img2OriginalSrc);
    page5Img1.setAttribute("src", page5Img1OriginalSrc);
  });
}

page5Animation();

function page6Animation() {
  var page6H1 = document.querySelector("#page6 h1");
  var text = page6H1.textContent;
  var splitted = text.split("");
  var clutter = "";
  splitted.forEach(function (val) {
    clutter += `<span>${val}</sapn>`;
  });
  page6H1.innerHTML = clutter;
  var page6H2 = document.querySelector("#page6 h2");
  var text2 = page6H2.textContent;
  var splitted2 = text2.split("");
  var clutter2 = "";
  splitted.forEach(function (val2) {
    clutter2 += `<span>${val2}</sapn>`;
  });
  page6H2.innerHTML = clutter2;
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      start: "top 40%",
      end: "top 0",
    },
  });
  tl.from(
    "#page6 h1 span",
    {
      y: 100,
      duration: 0.5,
      stagger: {
        amount: 0.2,
      },
    },
    "a"
  );
  tl.from(
    "#page6 h2 span",
    {
      y: 100,
      duration: 0.5,
      stagger: {
        amount: 0.2,
      },
      delay: 0.5,
    },
    "a"
  );
  tl.from(
    "#page6 button",
    {
      opacity: 0,
      delay: 0.85,
    },
    "a"
  );

  var page6Center = document.querySelector("#page6-center");
  page6Center.addEventListener("mouseenter", function () {
    page6Center.style.transform = "translate(-50%,-50%)rotate(0deg)";
  });
  page6Center.addEventListener("mouseleave", function () {
    page6Center.style.transform = "translate(-50%,-50%)rotate(7deg)";
  });
  var page6Right = document.querySelector("#page6-right");
  page6Right.addEventListener("mouseenter", function () {
    page6Right.style.transform = "translate(50%,-50%)rotate(0deg)";
  });
  page6Right.addEventListener("mouseleave", function () {
    page6Right.style.transform = "translate(50%,-50%)rotate(-7deg)";
  });
}
page6Animation();
