function shadow1811(options) {
  let images = document.querySelectorAll(".demo");
  if (options.demo_type === "hard") {
    options.demo_type = "0px";
  } else {
    options.demo_type = "20px";
  }

  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${options.demo_type} 1px rgba(0,0,0,0.12)`;
    if (options.padding) {
      image.style.padding = `1em`;
    }
  });
}

module.exports.shadow1811 = shadow1811;
