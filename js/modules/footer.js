import { postData } from "../services/services";
import { showBlock, hideBlock } from "./modal";

function footer() {
    const footerForm = document.querySelector(".footer__form"),
        footerItem = document.querySelector(".footer__item");

    //message for different outcomes of query execution events
    const message = {
        success: `Thanks! We will contact you shortly!`,
        failure: `Something went wrong...`,
        loading: `loading...`,
    };

    //collecting & transforming data to send to the server
    function bindPostData(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            hideBlock(footerItem);

            //creating message block
            const statusMessageWindow = document.createElement("div");

            statusMessageWindow.textContent = message.loading;
            statusMessageWindow.classList.add("footer-modal-feedback");

            footerForm.append(statusMessageWindow);

            showBlock(statusMessageWindow);

            //collecting & transform data
            const formData = new FormData(form);

            const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

            //sending data
            postData("http://localhost:3000/requests", jsonData)
                .then((data) => {
                    console.log(data);
                    statusMessageWindow.textContent = message.success;

                    setTimeout(() => {
                        statusMessageWindow.remove();
                        showBlock(footerItem);
                    }, 3000);
                })
                .catch(() => {
                    statusMessageWindow.textContent = message.failure;

                    setTimeout(() => {
                        statusMessageWindow.remove();
                        showBlock(footerItem);
                    }, 6000);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    //execution
    bindPostData(footerForm);
}

export default footer;
