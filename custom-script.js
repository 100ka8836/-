// チャット送信時のイベント
document.addEventListener("DOMContentLoaded", function () {
  const chatInput = document.querySelector(".chat-input");

  if (chatInput) {
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        // メッセージを取得
        const message = this.value;

        // ポップアップを取得
        const popup = document.querySelector(".MuiPaper-root.sc-hLiSuG");

        // メッセージに基づいてクラスを追加
        if (
          message.includes("決定的成功") ||
          message.includes("決定的成功/スペシャル")
        ) {
          popup.classList.add("background-success"); // 背景画像を設定するクラスを追加
          popup.style.backgroundImage =
            "url('https://drive.google.com/uc?id=1I_bhymDVoo_8W71T9UghwESL2VU6S2XO')"; // 成功の画像
          popup.style.backgroundColor = "transparent"; // 背景色を透明に設定
        } else if (message.includes("致命的失敗")) {
          popup.classList.add("background-failure"); // 背景画像を設定するクラスを追加
          popup.style.backgroundImage =
            "url('https://drive.google.com/uc?id=1z-A52XMHZ2GKhf-76ML6wPS5Ht0Rekor')"; // 失敗の画像
          popup.style.backgroundColor = "transparent"; // 背景色を透明に設定
        } else {
          popup.classList.remove("background-success", "background-failure"); // クラスを削除
          popup.style.backgroundImage = ""; // 背景画像をリセット
          popup.style.backgroundColor = ""; // 元の背景色に戻す（必要に応じて調整）
        }
      }
    });
  }
});
