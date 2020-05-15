var ticketdetails = async (ticketId) => {

    let resourceName = "tickets/" + ticketId;
    let statusTexts = { 2: 'Open', 3: 'Pending', 4: 'Resolved', 5: 'Closed'};
    let priorityTexts = {1: 'Low', 2: 'Medium', 3: 'High', 4: 'Urgent'};
    let priorityColors = {1: 'green accent-4', 2: 'indigo accent-4', 3: 'yellow darken-4', 4: 'red accent-4'};
    let queryParams = encodeQueryData({
        include: ["requester", "stats"]
    });

    let ticket = await asyncGetFetchRequest(resourceName, queryParams);


    html = `<div class="container">
                <div class="row">
                    <div class="col s12 m12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">
                                    <a class="back-button btn-floating btn-small waves-effect waves-light pink" onclick="window.history.back(); return false;">
                                        <i class="material-icons">keyboard_backspace</i>
                                    </a>
                                    ${ticket.subject}
                                </span>
                                <div class="ticket-body mb-10">
                                    <div class="info-label mb-5">Requester</div>
                                    <div class="info-body mb-10" id="req-name">
                                        ${ticket.requester.name}
                                    </div>
                                    <div class="info-label mb-5">Requester's Email</div>
                                    <div class="info-body mb-10" id="req-email">
                                        ${ticket.requester.email}
                                    </div>
                                    <div class="info-label mb-5">Status</div>
                                    <div class="info-body mb-10">
                                        ${statusTexts[ticket.status]}
                                    </div>
                                    <div class="info-label mb-5">Priority</div>
                                    <div class="info-body mb-10">
                                        ${priorityTexts[ticket.priority]}
                                    </div>
                                    <div class="info-label mb-5">Descripttion</div>
                                    <div class="info-body">
                                        ${ticket.description}                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s12">
                                        <a class="waves-effect waves-light btn" 
                                            onclick="routeToLink('/updateticket/${ticket.id}'); return false;">
                                                Update
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    return html;
}