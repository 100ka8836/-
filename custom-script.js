document.addEventListener("DOMContentLoaded", function () {
  // 特定のウェブページのURLを確認
  if (window.location.href === "https://ccfolia.com/rooms/zCR99IzEo") {
    const chatInput = document.querySelector(".chat-input");

    if (chatInput) {
      chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          const message = this.value;

          const popup = document.querySelector(".MuiPaper-root");

          if (
            message.includes("決定的成功") ||
            message.includes("決定的成功/スペシャル")
          ) {
            popup.classList.add("background-success");
            popup.style.backgroundColor = "transparent";
          } else if (message.includes("致命的失敗")) {
            popup.classList.add("background-failure");
            popup.style.backgroundColor = "transparent";
          } else {
            popup.classList.remove("background-success", "background-failure");
            popup.style.backgroundImage = "";
            popup.style.backgroundColor = "";
          }
        }
      });
    }
  }
});
