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

// let deferredPrompt;
// window.addEventListener("beforeinstallprompt", (e) => {
//   // Prevent from automatically showing the prompt
//   e.preventDefault();
//   deferredPrompt = e;

//   // Update UI notify the user they can add to home screen
//   btnAdd.style.display = "block";
//   btnAdd.addEventListener("click", () => {
//     deferredPrompt.prompt();
//     deferredPrompt.userChoice.then((choiceResult) => {
//       if (choiceResult.outcome === "accepted") {
//         console.log("User accepted the A2HS prompt");
//       }
//       deferredPrompt = null;
//     });
//   });
// });

// window.addEventListener("appinstalled", (evt) => {
//   app.logEvent("a2hs", "installed");
// });

// window.matchMedia("(display-mode: standalone)");
