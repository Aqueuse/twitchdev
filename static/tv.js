    var twitchLogoPurpleParts = document.getElementsByClassName("logoPurple");
    var twitchLogoWhiteParts = document.getElementsByClassName("logoWhite");

   if (localStorage.getItem("backgroundActivated") == null) {
        localStorage.setItem("backgroundActivated", "True");
   }

   function showHideBackground() {
        if (localStorage.getItem("backgroundActivated") === "True") {
            localStorage.setItem("backgroundActivated", "False");
            document.body.style.backgroundColor = "transparent";

            // twitch logo ninjafication
            for (var i = 0; i < twitchLogoPurpleParts.length; i++) {
                twitchLogoPurpleParts.item(i).style.fill = "#9146ff2b";
            }
            twitchLogoWhiteParts.item(0).style.fill = "#ffffff57";
            return;
        }
        if (localStorage.getItem("backgroundActivated") === "False") {
            localStorage.setItem("backgroundActivated", "True");
            document.body.style.backgroundColor = "#1B1D48";

            // twitch logo uninjafication
            for (var i = 0; i < twitchLogoPurpleParts.length; i++) {
                twitchLogoPurpleParts.item(i).style.fill = "#9146FF";
            }
            twitchLogoWhiteParts.item(0).style.fill = "#ffffff";
            return;
        }
   }

   window.onload = function() {
     let backgroundActivated = localStorage.getItem("backgroundActivated");
     if (localStorage.getItem("backgroundActivated") === "True") {
        document.body.style.backgroundColor = "#1B1D48";

       // twitch logo uninjafication
        for (var i = 0; i < twitchLogoPurpleParts.length; i++) {
            twitchLogoPurpleParts.item(i).style.fill = "#9146FF";
        }
        twitchLogoWhiteParts.item(0).style.fill = "#ffffff";
        return;
     }
     if (localStorage.getItem("backgroundActivated") === "False") {
        document.body.style.backgroundColor = "transparent";

        // twitch logo ninjafication
        for (var i = 0; i < twitchLogoPurpleParts.length; i++) {
            twitchLogoPurpleParts.item(i).style.fill = "#9146ff2b";
        }
        twitchLogoWhiteParts.item(0).style.fill = "#ffffff";
        return;
     }
  }
