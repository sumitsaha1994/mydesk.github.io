var createticket = () => {

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
                                            <input id="email" type="email" name="email" class="validate" required>
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
                                                <option value="1">Low</option>
                                                <option value="2">Medium</option>
                                                <option value="3">High</option>
                                                <option value="4">Urgent</option>
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

                                    <div class="row right">
                                        <button class="btn waves-effect waves-light" type="reset" name="reset">Reset
                                            <i class="material-icons right">restore_page</i>
                                        </button>

                                        <button class="btn waves-effect waves-light" type="submit" name="submit">Create
                                            <i class="material-icons right">send</i>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div> 
                    
                    <!--<button data-target="ticket-info-error" class="btn modal-trigger">Modal</button>-->

                    <!-- Modal Structure -->
                    <div id="ticket-info-success" class="modal">
                        <div class="modal-content">
                            <h4><i class="material-icons medium green-text">check</i>Create ticket success</h4>
                            <p>Success</p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-close waves-effect waves-green btn-flat">Create one more</button>
                            <button class="modal-close waves-effect waves-green btn-flat">Ok</button>
                        </div>
                    </div>

                    <div id="ticket-info-error" class="modal">
                        <div class="modal-content">
                            <h4><i class="material-icons medium red-text">error</i>
                                      Create ticket error
                            </h4>
                            <p>Error</p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-close waves-effect waves-green btn-flat">Ok</a>
                        </div>
                    </div>
                </div>`;

    return html;

}