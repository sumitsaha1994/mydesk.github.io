var dashboard = () => {
    return `<div class="container center-align mt5">
                <a href="" 
                    id="tickets" 
                    onClick="routeToLink('/tickets'); return false;"
                    class="waves-effect waves-light btn">
                        <i class="material-icons left">cloud</i>
                        View   
                </a>
                <a href="" 
                    id="cereate-ticket" 
                    onClick="routeToLink('/createticket'); return false;"
                    class="waves-effect waves-light btn">
                        <i class="material-icons left">create</i>
                        Create
                </a>
            </div>`;
}