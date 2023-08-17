document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".social-icons a");

  socialIcons.forEach(icon => {
    const social = icon.getAttribute("data-social");
    const img = icon.querySelector("img");

    switch (social) {
      case "linkedin":
        img.src = "linkedin-icon.png";
        icon.href = "www.linkedin.com/in/neerajkumar-chalavadi-9b7944214";
        break;
      case "github":
        img.src = "github-icon.png";
        icon.href = "https://github.com/your-username";
        break;
      case "instagram":
        img.src = "instagram-icon.png";
        icon.href = "https://www.instagram.com/your-profile";
        break;
      case "twitter":
        img.src = "twitter-icon.png";
        icon.href = "https://twitter.com/your-handle";
        break;
    }
  });
});
