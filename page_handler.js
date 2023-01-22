const homePageEl = document.querySelector(".home-page");
const uploadSectionEl = document.querySelector(".upload-section");

function showUploadPage() {
  uploadSectionEl.classList.remove("hidden");
  homePageEl.classList.add("hidden");
}
function showHomePage() {
  uploadSectionEl.style.visibility = "hidden";
  homePageEl.classList.remove("hidden");
}
export { showUploadPage, showHomePage };
