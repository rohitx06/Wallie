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
        category: category,
        url: `https://picsum.photos/seed/${categoryKeywords[category]}${i}/300/200`
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
    alert("You clicked on " + image.category);
  };

  // ng-mouseover example
  $scope.showHoverMessage = function (image) {
    console.log("Hovered over " + image.category);
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
