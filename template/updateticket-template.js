var updateticket = async (ticketId) => {

    let resourceName = "tickets/" + ticketId;
    let statusTexts = { 2: 'Open', 3: 'Pending', 4: 'Resolved', 5: 'Closed'};
    let priorityTexts = {1: 'Low', 2: 'Medium', 3: 'High', 4: 'Urgent'};
    let priorityColors = {1: 'green accent-4', 2: 'indigo accent-4', 3: 'yellow darken-4', 4: 'red accent-4'};
    let queryParams = encodeQueryData({
        include: ["requester", "stats"]
    });

    let ticket = await asyncGetFetchRequest(resourceName, queryParams);

    let html = `<div class="container">
                    <div class="card">
                        <div class="card-content">
                            <div class="row">
                                <div class="col s12">
                                    <span class="card-title">Update ticket
                                        <span id="tkt-id-h" hidden>${ticketId}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="row">
                                <form id="update-ticket-form" class="col s12">
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">contact_mail</i>
                                            <input id="email" type="email" name="email" class="validate" 
                                                    value="${ticket.requester.email}" required>
                                            <label for="email" class="active">Email</label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">subject</i>
                                            <input id="subject" type="text" name="subject" class="validate"
                                                    value="${ticket.subject}" required>
                                            <label for="subject" class="active">Subject</label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">show_chart</i>
                                            <select name="status" required>
                                                <option value="" disabled>Status</option>
                                                <option value="2" ${ticket.status == 2 ? 'selected' : ''}>Open</option>
                                                <option value="3" ${ticket.status == 3 ? 'selected' : ''}>Pending</option>
                                                <option value="4" ${ticket.status == 4 ? 'selected' : ''}>Resolved</option>
                                                <option value="5" ${ticket.status == 5 ? 'selected' : ''}>Closed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">priority_high</i>
                                            <select name="priority" required>
                                                <option value="" disabled>Priority</option>
                                                <option value="1" ${ticket.priority == 1 ? 'selected' : ''}>Low</option>
                                                <option value="2" ${ticket.priority == 2 ? 'selected' : ''}>Medium</option>
                                                <option value="3" ${ticket.priority == 3 ? 'selected' : ''}>High</option>
                                                <option value="4" ${ticket.priority == 4 ? 'selected' : ''}>Urgent</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">description</i>
                                            <textarea id="description" class="materialize-textarea" name="description">${ticket.description.trim()}</textarea>
                                            <label for="description" class="active">Description</label>
                                        </div>
                                    </div>

                                    <div class="row right">
                                        <button class="btn waves-effect waves-light" type="submit" name="update-ticket">Update
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div> 
                    
                    <!--<button data-target="ticket-info-error" class="btn modal-trigger">Modal</button>-->
                </div>`;

    return html;

}