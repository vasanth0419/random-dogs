document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".dogImage");

  function getRandomDog() {
    return new Promise((resolve, reject) => {
      fetch("https://random.dog/woof.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data.url);
        })
        .catch((error) => {
          reject("There was a problem with the fetch operation:", error);
        });
    });
  }

  async function updateDogImages() {
    try {
      const url = await getRandomDog();
      images.forEach((image) => {
        image.src = url;
      });
    } catch (error) {
      console.error("Error updating dog image:", error);
    }
  }

  // Initial loading of dog image
  updateDogImages();

  // Button click event to load new dog image
  const buttons = document.querySelectorAll(".searchBtn");
  buttons.forEach((button) => {
    button.addEventListener("click", updateDogImages);
  });
});
