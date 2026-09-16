import { createPlayerClient } from "@reveldigital/client-sdk";

/*
 * Create ONE PlayerClient instance and reuse it.
 */
const client = createPlayerClient();


const backButton = document.getElementById("backButton");
const homeButton = document.getElementById("homeButton");


/*
 * Button feedback
 */
function showButtonState(button, text) {

    const originalText = button.textContent;

    button.textContent = text;

    window.setTimeout(() => {
        button.textContent = originalText;
    }, 1000);
}


/*
 * BACK
 *
 * Sends a command to the Revel Digital player.
 */
backButton.addEventListener("click", () => {

    showButtonState(backButton, "Back");

    client.sendCommand(
        "navigator.back",
        ""
    );

});


/*
 * HOME
 *
 * The Home URL will be supplied through the Revel
 * Webapp/Gadget preference mechanism later.
 *
 * For now the command is deliberately sent without
 * a hard-coded ReadyOp URL.
 */
homeButton.addEventListener("click", () => {

    showButtonState(homeButton, "Home");

    client.sendCommand(
        "navigator.home",
        ""
    );

});
