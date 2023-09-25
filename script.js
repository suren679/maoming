window.addEventListener('load', function () {
  // ... Your existing carousel code ...

  // Get the list of images in the carousel
  var imageList = document.querySelectorAll('#focus_image li');

  // Add click event listener to each image
  imageList.forEach(function (image) {
      image.addEventListener('click', function () {
          // Get the link from the image's parent anchor element
          var link = image.querySelector('a');

          // Get the href attribute of the link
          var href = link.getAttribute('href');

          // Open the link in a new tab/window
          window.open(href, '_blank');
      });
  });
});
