(() => {
    let elemsGropdown = document.querySelectorAll('.dropdown-trigger');
    let instancesDropdown = M.Dropdown.init(elemsGropdown);

    let elemsTooltip = document.querySelectorAll('.tooltipped');
    let instancesTooltip = M.Tooltip.init(elemsTooltip);

    //add event listener to all the delete links
    let delLinks = document.querySelectorAll("ul[id^='card-options-'] a[id^='d-ticket-']");

    delLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let ticketId = this.getAttribute("id").replace('d-ticket-', '');
        }, false);
    });
    

    //add event listener to all the update links
    let updateLinks = document.querySelectorAll("ul[id^='card-options-'] a[id^='u-ticket-']");
    
    updateLinks.forEach(link => {
        link.addEventListener("click", async function(event){
            event.preventDefault();
            let ticketId = this.getAttribute("id").replace('u-ticket-', '');
            let res = await asyncPutFetchRequest('tickets/' + ticketId, JSON.stringify({"priority":1, "status":4 }));
            if (Object.keys(res).length === 0 && res.con.constructor === Object) {
                console.log(JSON.stringify(res.error));
            } else {
                console.log(JSON.stringify(res.data));
                routeToLink("/tickets");
            }
            
        }, false);
    });
    
})();
