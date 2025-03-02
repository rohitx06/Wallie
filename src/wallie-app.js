var app = angular.module("wallieApp", []);

app.controller("GalleryController", function ($scope) {
  $scope.categories = {};
  $scope.selectedCategory = ""; // Default: Show all categories

  // Define categories
  const categoryKeywords = {
    Nature: "1001",
    Technology: "1021",
    Abstract: "1035",
    Animals: "1060",
    Urban: "1080"
  };

  function fetchImages() {
    Object.keys(categoryKeywords).forEach((category) => {
      $scope.categories[category] = Array.from({ length: 6 }, (_, i) => ({
        title: category + " Image " + (i + 1),
        category: category,
        url: `https://picsum.photos/seed/${categoryKeywords[category]}${i}/300/200`,
        rating: (Math.random() * 4 + 1).toFixed(1), // Random rating between 1.0 - 5.0
        uploaded: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toISOString()
      }));
    });
  }

  fetchImages();

  // Function to filter images based on category selection
  $scope.getFilteredImages = function () {
    if (!$scope.selectedCategory) {
      return Object.values($scope.categories).flat();
    }
    return $scope.categories[$scope.selectedCategory] || [];
  };

  // ng-click example: Select image
  $scope.selectImage = function (image) {
    alert("You clicked on " + image.title);
  };

  // ng-mouseover example
  $scope.showHoverMessage = function (image) {
    console.log("Hovered over " + image.title);
  };

  // ng-blur example
  $scope.onBlur = function () {
    console.log("Search input lost focus");
  };

  // ng-focus example
  $scope.onFocus = function () {
    console.log("Search input gained focus");
  };
});
