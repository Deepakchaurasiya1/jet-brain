// Video Section Start Here

const video = document.getElementById("videoPlayer");
const button = document.getElementById("toggleButton");

button.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    button.textContent = "Pause"; // Update button text
  } else {
    video.pause();
    button.textContent = "Play"; // Update button text
  }
});

// Hide the button when the video is playing
video.addEventListener("play", function () {
  button.style.display = "none";
});

// Show the button when the video is paused
video.addEventListener("pause", function () {
  button.style.display = "block";
});
// Video Section End Here

// Spot Light Section Start Here

const updateCursor = ({ x, y }) => {
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--y", y);
};
document.body.addEventListener("pointermove", updateCursor);
// Spot Light Section End Here


// Tab Section Start Here Change on this click button to content & Images section
var tabButtons = document.querySelectorAll(".tab-btn");
var tabContent = document.getElementById("tab-content");
setDefaultContent("web-inspector");
tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var contentId = button.getAttribute("content-id");
    setActiveButton(button);
    replaceContent(contentId);
  });
});
function setDefaultContent(defaultContentId) {
  replaceContent(defaultContentId);
}
function setActiveButton(clickedButton) {
  tabButtons.forEach(function (button) {
    button.classList.remove("active");
  });
  clickedButton.classList.add("active");
}
function replaceContent(contentId) {
  tabContent.innerHTML = "";
  switch (contentId) {
    case "web-inspector":
      tabContent.innerHTML = `
    <div class="col-lg-8 content-info">
      <img src="https://www.jetbrains.com/aqua/img/screenshots/web-inspector.png" alt="" class="img-fluid">
    </div>
    <div class="col-lg-4">
      <h3 class="content-title fs-1 mt-4">Web Inspector</h3>
      <p class="fs-5">Aqua’s embedded Web Inspector generates a unique CSS or XPath locator for a selected element on a web page and adds it to the source code. When Web Inspector is active, CSS and XPath code completion suggests and highlights locators for the most important web page elements.</p>
    </div>
  `;
      break;
    case "http-client":
      tabContent.innerHTML = `
    <div class="col-lg-8 content-info">
      <img src="https://www.jetbrains.com/aqua/img/screenshots/http-client.png" alt="" class="img-fluid">
    </div>
    <div class="col-lg-4">
      <h3 class="content-title fs-1 mt-4">HTTP client</h3>
      <p class="fs-5">You can easily create and edit requests in Aqua’s built-in HTTP client and receive extensive code assistance, including code completion, highlighting, refactoring, and more.</p>
    </div>
  `;
      break;
    case "docker":
      tabContent.innerHTML = `
    <div class="col-lg-8 content-info">
      <img src="https://www.jetbrains.com/aqua/img/screenshots/docker.png" alt="" class="img-fluid">
    </div>
    <div class="col-lg-4">
      <h3 class="content-title fs-1 mt-4">Docker</h3>
      <p class="fs-5">With Aqua, you get access to your Docker containers, allowing you to run and debug them, download and build images, and run multi-container applications.</p>
    </div>
  `;
      break;
    case "database":
      tabContent.innerHTML = `
    <div class="col-lg-8 content-info">
      <img src="https://www.jetbrains.com/aqua/img/screenshots/db-screenshot.png" alt="" class="img-fluid">
    </div>
    <div class="col-lg-4">
      <h3 class="content-title fs-1 mt-4">Database Support</h3>
      <p class="fs-5">You can seamlessly handle multiple databases, develop SQL scripts, and perform low-level data assertions in the IDE. Aqua provides connections to live databases, runs queries, exports data, and allows you to manage schemes in a visual interface. This means you can access Oracle, SQL Server, PostgreSQL, MySQL, and other databases directly from the IDE.</p>
    </div>
  `;
      break;
    case "test-management":
      tabContent.innerHTML = `
    <div class="col-lg-8 content-info">
      <img src="https://www.jetbrains.com/aqua/img/screenshots/tms.png" alt="" class="img-fluid">
    </div>
    <div class="col-lg-4">
      <h3 class="content-title fs-1 mt-4">Test Management Systems</h3>
      <p class="fs-5">We have added annotations to support test report tools, such as Allure Framework, or built-in test framework mechanisms, such as Serenity BDD. The IDE allows you to open issues or test management system cases in a web browser by clicking on the issue IDs.</p>
    </div>
  `;
      break;
    default:
      break;
  }
}
