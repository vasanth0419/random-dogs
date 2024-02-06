# TASK RANDOM DOG'S IMAGES...

#### _CREATE A HTML FILE NAME_: `index.html`

#### CODES

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random dog's</title>
    <link rel="stylesheet" href="./css/style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <p
        class="display-5 m-5 rounded-circle p-3 bg-secondary text-white text-decoration-italic text-center"
      >
        Random Dog's
      </p>
    </div>
    <div class="text-center text-primary p-2">
      Click Here! For Random Dog's Images...
      <button type="button" class="searchBtn">search</button>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-5 col-lg-5 col-md-12 col-sm-12">
          <div class="dogs">
            <br />
            <p class="h5 dog">Dogs :</p>
            <p class="dog">
              A dog is a domestic mammal of the family Canidae and the order
              Carnivora. Its scientific name is Canis lupus familiaris. Dogs are
              a subspecies of the gray wolf, and they are also related to foxes
              and jackals. Dogs are one of the two most ubiquitous and most
              popular domestic animals in the world.
            </p>
          </div>
        </div>
        <div class="col-lg-7 image col-md-12 col-sm-12">
          <img
            class="dogImage"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
            alt=""
          />
        </div>
      </div>
    </div>

    <script src="./js/script.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
  </body>
</html>


```

#### _CREATE A CSS FILE NAME_: `style.css`

#### CODES

```
body {
  background-color: rgb(209, 208, 208) !important;
}
button {
  color: white;
  background-color: rgb(2, 163, 37);
  padding: 5px 20px;
  border-radius: 30px !important;
}
.dogs {
  width: 100%;
  height: fit-content;
  border: 2px grey solid;
  border-radius: 30px;
}
.image img {
  width: 100% !important;
  height: 60vh !important;
  object-fit: contain;
  border: 1px solid;
  padding: 5px;
  border-radius: 30px;
}
.dog {
  font-style: italic;
  text-align: center;
  justify-content: center;
}

```

#### _CREATE A JS FILE NAME_: `script.js`

#### CODES

```
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


```
