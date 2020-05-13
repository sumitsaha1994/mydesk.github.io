(() => {

    let elemsselect = document.querySelectorAll('select');
    let instancesSelect = M.FormSelect.init(elemsselect);

    let formElem = document.getElementById("create-ticket-form");

    formElem.onsubmit = async (event) => {
        event.preventDefault();
        let formData = new FormData(formElem);
        let object = {};
        formData.forEach(function (value, key) {
            if (key == 'priority' || key == 'status') {
                value = Number(value);
            }
            object[key] = value;
        });

        await asyncPostFetchRequest("/tickets", JSON.stringify(object));
    }

})();