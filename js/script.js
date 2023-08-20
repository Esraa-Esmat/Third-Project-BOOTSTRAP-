

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// -----------------------------------------------------------
function myFunction(textareaId, tooltipId) {
    var textarea = document.getElementById(textareaId);
    var textValue = textarea.value;

    // Perform the desired action using the textarea value
    // For example, you can copy the text to the clipboard
    navigator.clipboard.writeText(textValue);

    // Update tooltip text
    var tooltip = document.getElementById(tooltipId);
    tooltip.innerHTML = "Copied: " + textValue;

    // Alert the copied text (optional)
    alert("Copied the text: " + textValue);
}

function outFunc() {
    var tooltips = document.querySelectorAll(".tooltiptext");
    tooltips.forEach(function (tooltip) {
        tooltip.innerHTML = "Copy to clipboard";
    });
}

    // ---------------------------------------------------------------------
