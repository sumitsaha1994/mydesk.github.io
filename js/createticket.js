(() => {

    //init select drop downs
    let elemsselect = document.querySelectorAll('select');
    let instancesSelect = M.FormSelect.init(elemsselect);

    //init modals
    var elemsModal = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elemsModal);

    let formElem = document.getElementById("create-ticket-form");

    formElem.onsubmit = async function(event) {
        event.preventDefault();
        let formData = new FormData(formElem);
        let object = {};
        formData.forEach(function (value, key) {
            if (key == 'priority' || key == 'status') {
                value = Number(value);
            }
            object[key] = value;
        });

        let res = await asyncPostFetchRequest("/tickets", JSON.stringify(object));
        if (Object.keys(res.error).length === 0) {
            let successModal = document.getElementById("ticket-info-success");
            let message = `Ticket <span 
                                    class="mdl-tkt-lnk indigo-text" 
                                    onclick="M.Modal.getInstance(document.getElementById('ticket-info-success')).close(); 
                                        routeToLink('/tickets');">
                                        # ${res.data.id}
                                </span> has been created`;
            successModal.querySelector("div[class='modal-content'] > p").innerHTML = message;
            M.Modal.getInstance(successModal).open();
        } else {
            let errorModal = document.getElementById("ticket-info-error");
            errorModal.querySelector("div[class='modal-content'] > p").innerHTML = JSON.stringify(res.error);
            M.Modal.getInstance(errorModal).open();
        }
        
        console.log("abc")
        
    }

})();