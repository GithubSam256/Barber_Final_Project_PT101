document
  .getElementById("Savess")
  .addEventListener("click", function () {
    const statusElement = document.getElementById("status");

    // Take the screenshot
    html2canvas(document.documentElement).then(function (canvas) {
      // Convert the canvas to a data URL
      const imgData = canvas.toDataURL("image/png");

      // Create a link element to download the image
      const link = document.createElement("a");

      // file name
      const date = new Date();
      const filename =
        "screenshot-" +
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2) +
        "-" +
        ("0" + date.getHours()).slice(-2) +
        "-" +
        ("0" + date.getMinutes()).slice(-2) +
        "-" +
        ("0" + date.getSeconds()).slice(-2) +
        ".png";

      link.download = filename;
      link.href = imgData;

      link.click();
    });
  });