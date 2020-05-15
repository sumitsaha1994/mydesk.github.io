(() => {
    let elemsGropdown = document.querySelectorAll('.dropdown-trigger');
    let instancesDropdown = M.Dropdown.init(elemsGropdown);

    //delete existing tooltips
    document.body.querySelectorAll(".material-tooltip").forEach(ele => {
        document.body.removeChild(ele);
    });
    let elemsTooltip = document.querySelectorAll('.tooltipped');
    let instancesTooltip = M.Tooltip.init(elemsTooltip);

    //init modals
    let deleteModals = document.querySelectorAll('.modal');
    let instances = M.Modal.init(deleteModals);

    //add event listener to all the update links
    let updateLinks = document.querySelectorAll("ul[id^='card-options-'] a[id^='u-ticket-']");

    updateLinks.forEach(link => {
        link.addEventListener("click", async function (event) {
            event.preventDefault();
            let ticketId = this.getAttribute("id").replace('u-ticket-', '');
            routeToLink(`/updateticket/${ticketId}`)
        }, false);
    });

    let deleteLinks = document.querySelectorAll("ul[id^='card-options-'] a[id^='d-ticket-']");

    deleteLinks.forEach(link => {
        link.addEventListener("click", async function () {
            //event.preventDefault();
            
            let ticketId = this.getAttribute("id").replace('d-ticket-', '');
            let deleteModal = document.getElementById("ticket-delete");
            M.Modal.getInstance(deleteModal).open();
            document.getElementById("btn-delete-tkt").addEventListener("click", async function (event) {
                
                let error = await asyncDeleteRequest('tickets/' + ticketId);
                M.Toast._toasts = [];
                if (error) {
                    M.toast({ html: error, completeCallback: () => M.Toast.dismissAll() });
                } else {
                    M.toast({ html: "Ticket # " + ticketId + " has been deleted" });
                    routeToLink('/tickets');
                }
            });

        }, false);
    });

})();
