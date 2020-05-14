var ticketdetails = async (tickeetId) => {

    let resourceName = "tickets/" + tickeetId;
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
                                <span class="card-title">${ticket.subject}</span>
                                <div class="ticket-body mb-10">
                                    <div class="info-label mb-5">Requester</div>
                                    <div class="info-body mb-10">
                                        ${ticket.requester.name}
                                    </div>
                                    <div class="info-label mb-5">Requester's Email</div>
                                    <div class="info-body mb-10">
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
                                        <a class="waves-effect waves-light btn">Update</a>
                                        <a class="waves-effect waves-light btn">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    return html;
}