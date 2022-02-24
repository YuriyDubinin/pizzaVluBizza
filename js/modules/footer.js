import { postData } from "../services/services";

function footer() {
    //collecting & transforming data to send to the server
    function bindPostData(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

            //sending data
            postData("http://localhost:3000/requests", jsonData).then((data) => {
                console.log(data);
            });
        });
    }

    //execution
    const forms = document.querySelectorAll("form");

    forms.forEach((item) => {
        bindPostData(item);
    });
}

export default footer;
