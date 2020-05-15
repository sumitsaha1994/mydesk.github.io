var dashboard = () => {
    return `<div class="container center-align">
                <h3>Welcome to <p class="indigo-text" id="mydesk">MyDesk<p><sub>Powered by freshdesk</sub></h3>
                
                <a href="" 
                    id="tickets" 
                    onClick="routeToLink('/tickets'); return false;"
                    class="waves-effect waves-light btn dashboard-btn">
                        <i class="material-icons left">view_list</i>
                        View Tickets 
                </a>
                <a href="" 
                    id="cereate-ticket" 
                    onClick="routeToLink('/createticket'); return false;"
                    class="waves-effect waves-light btn dashboard-btn">
                        <i class="material-icons left">create</i>
                        Create ticket
                </a>
            </div>`;
}