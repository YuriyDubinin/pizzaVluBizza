function showBlock(modalSelector) {
    modalSelector.classList.add("show", "fade");
    modalSelector.classList.remove("hide");
}

function hideBlock(modalSelector) {
    modalSelector.classList.add("hide");
    modalSelector.classList.remove("show", "fade");
}

export { showBlock, hideBlock };
