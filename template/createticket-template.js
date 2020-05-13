var loadCreateTicket = () => {

    let html = `<div class="container">
                    <div class="card">
                        <div class="card-content">
                            <div class="row">
                                <div class="col s12">
                                    <span class="card-title">Create ticket</span>
                                </div>
                            </div>
                            <div class="row">
                                <form id="create-ticket-form" class="col s12">
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">contact_mail</i>
                                            <input id="email" type="email" name="email" class="validate">
                                            <label for="email">Email</label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">subject</i>
                                            <input id="subject" type="text" name="subject" class="validate">
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">show_chart</i>
                                            <select name="status">
                                                <option value="" disabled selected>Status</option>
                                                <option value="2">Open</option>
                                                <option value="3">Pending</option>
                                                <option value="4">Resolved</option>
                                                <option value="5">Closed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">priority_high</i>
                                            <select name="priority">
                                                <option value="" disabled selected>Priority</option>
                                                <option value="2">Low</option>
                                                <option value="3">Medium</option>
                                                <option value="4">High</option>
                                                <option value="5">Urgent</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">description</i>
                                            <textarea id="description" class="materialize-textarea" name="description"></textarea>
                                            <label for="description">Description</label>
                                        </div>
                                    </div>


                                    <button class="btn waves-effect waves-light right" type="submit" name="action">Create
                                        <i class="material-icons right">send</i>
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>                    
                </div>`;

    return html;

}