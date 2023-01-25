const seeMoreButton = document.getElementById("see-more-button");
const moreContent = document.getElementById("more-content");

function toggleMoreContent() {
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
    seeMoreButton.innerHTML = "See Less";
  } else {
    moreContent.style.display = "none";
    seeMoreButton.innerHTML = "See More";
  }
}

seeMoreButton.addEventListener("click", toggleMoreContent);
