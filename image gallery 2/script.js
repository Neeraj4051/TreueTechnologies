document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.querySelector(".thumbnails");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const caption = document.querySelector(".caption");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
    const images = [
        { src: "coffee1.JPEG", caption: "A day starts with the coffee" },
        { src: "coffee2.JPEG", caption: "coffee is the most tastiest " },
        { src: "coffee3.JPEG", caption: "Coffee contains caffeene" },
        { src: "coffee4.JPEG", caption: "it grows in araku" },
        { src: "github.PNG", caption:  "git is most happening app in now a days" },
        { src: "instagram.PNG", caption: "it is more famous for reels" },
        { src: "Linkedin.PNG`", caption: "linked in is used for job purpose" },
        // Add more image objects here
    ];

    images.forEach((image, index) => {
        const thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");
        thumbnail.innerHTML = `<img src="${image.src}" alt="Thumbnail ${index + 1}">`;
        thumbnail.addEventListener("click", () => openLightbox(index));
        thumbnailsContainer.appendChild(thumbnail);
    });

    let currentImageIndex = 0;

    function openLightbox(index) {
        currentImageIndex = index;
        const currentImage = images[index];
        lightboxImg.src = currentImage.src;
        caption.textContent = currentImage.caption;
        lightbox.style.display = "block";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        openLightbox(currentImageIndex);
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        openLightbox(currentImageIndex);
    }

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);
});
