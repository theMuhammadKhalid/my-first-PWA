if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        console.log("Registered! ", reg);
      })
      .catch((err) => {
        console.log("Registeration failed: ", err);
      });
  });
}

Notification.requestPermission().then((result) => {
  if (result === "granted") {
    randomNotification();
  }
});

function randomNotification() {
  new Notification("Hi, This is my first PWA");
}
