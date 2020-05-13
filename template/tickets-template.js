var loadTickets = async () => {
    let resourceName = "tickets";
    let statusTexts = { 2: 'Open', 3: 'Pending', 4: 'Resolved', 5: 'Closed'};
    let priorityTexts = {1: 'Low', 2: 'Medium', 3: 'High', 4: 'Urgent'};
    let priorityColors = {1: 'green accent-4', 2: 'indigo accent-4', 3: 'yellow darken-4', 4: 'red accent-4'};
    let queryParams = encodeQueryData({
        include: ["requester", "stats"],
        page: 1
    });
    
    let tickets = await asyncGetFetchRequest(resourceName, queryParams);
    let html = ''; 
    html = `<div id="tickets-list">
                <div class="container">`;

    html = tickets.reduce((accum, ticket) => {
        return accum + `<div class="col s12">
                            <div class="card horizontal">
                                <div class="card-stacked">
                                    <div class="card-content grey lighten-4">
                                        <span class="card-title grey-text text-darken-4">
                                            ${ticket.subject}
                                            <i class="material-icons dropdown-trigger right" data-target="card-options-${ticket.id}" id="more">more_vert</i>
                                        </span>
                                        
                                        <div class="valign-wrapper">
                                            <i class="material-icons prefix">person</i>${ticket.requester.name}
                                        </div>
                                        
                                        <p>ticket id: ${ticket.id}</p>
                                    </div>
                                    <div class="card-action">
                                        <!--<a href="#">${ticket.type}</a>-->
                                        <p>
                                            <span class="chip pink accent-3 white-text tooltipped" 
                                                data-position="bottom" 
                                                data-tooltip="Status">${statusTexts[ticket.status]}
                                            </span>
                                            <span class="chip ${priorityColors[ticket.priority]} white-text tooltipped"
                                                data-position="bottom"
                                                data-tooltip="Priotiry">${priorityTexts[ticket.priority]}</span>
                                            <span>created on : ${ticket.created_at}</span>
                                        </p>
                                    </div>

                                    <!-- Dropdown Structure -->
                                    <ul id='card-options-${ticket.id}' class='dropdown-content'>
                                        <li><a href="" id="u-ticket-${ticket.id}"><i class="material-icons">update</i>Update</a></li>
                                        <li class="divider" tabindex="-1"></li>
                                        <li><a href="" id="d-ticket-${ticket.id}"><i class="material-icons">delete</i>Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>`;
    }, html);

    html += `</div>
        </div>`;
    return html;
}