document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".gallery-filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-filter");

      galleryItems.forEach(function (item) {
        const itemCategory = item.getAttribute("data-category");

        if (selectedCategory === "all" || selectedCategory === itemCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

    });
  });

});