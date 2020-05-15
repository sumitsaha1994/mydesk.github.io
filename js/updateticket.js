(() => {
    //init select drop downs
    let elemsselect = document.querySelectorAll('select');
    let instancesSelect = M.FormSelect.init(elemsselect);


    let formElem = document.getElementById("update-ticket-form");

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
        let ticketId = document.getElementById("tkt-id-h").innerHTML;
        let res = await asyncPutFetchRequest("tickets/" + ticketId, JSON.stringify(object));
        M.Toast._toasts = [];
        if (Object.keys(res.error).length === 0) {
            M.toast({ html: "Ticket has been updated" });
            window.history.back();
        } else {
            M.toast({ html: "Error Occurred" });
        }
    }
})();