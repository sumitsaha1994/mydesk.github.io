const apiUrl = "https://smtsh9.freshdesk.com/api/v2/";
var currentPage = '';

//---------------------------------------------
//---------------Define routes-----------------
//---------------------------------------------
const router = [
    { path: '/', name: '',  redirectTo: '/dashboard'},
    { path: '/dashboard', name: 'loadDashboard'},
    { path: '/tickets', name: 'loadTickets' },
    { path: '/tickets/:ticketId', name: 'ticket-details' },
    { path: '/createticket', name: 'loadCreateTicket'}
];


//handle initial page routing **** need to be refactored **** DO NOT FORGET ************##################
window.addEventListener("load", (event) => {
    routeToLink('/dashboard')
});

//handle navigation while clicking browser back and forward button
window.addEventListener('popstate', function (event) {
    routeToLink(window.location.pathname, false);
}, false);

//handle routing and loaing html from templates
async function routeToLink(route, isPushState = true) {
    removejscssfile("js" + currentPage + ".js", "js");
    removejscssfile("css" + currentPage + ".css", "css");
    //get the template name from matching route
    let routerObj = router.filter(r => r.path == route)[0];
    let templateName = routerObj.name;
    
    //retrieve the template html
    let templateHtml = await eval(templateName + '()');

    //update the main container with the html data
    document.querySelector("main").innerHTML = templateHtml;

    //load js file
    currentPage = route;
    loadjscssfile("js" + route + ".js", "js");
    loadjscssfile("css" + route + ".css", "css");

    //update history push state
    if (isPushState) {
        window.history.pushState({}, route, window.location.origin + route);
    }
    
}

//send GET request to api
async function asyncGetFetchRequest(resourceName, queryParams) {
    let data;

    let options = {
        method: 'GET',
        withCredentials: true,
        headers: {
            "Authorization": "Baisc " + btoa("JoBUNp1GoRUn4Dcin"),
            "Content-Type": "application/json"
        }
    }

    await fetch(apiUrl + resourceName + (queryParams ? '?' + queryParams : ''), options)
            .then(resp => resp.json())
            .then(jsonResp => data = jsonResp)
            .catch(function (error) {
                return error;
            });
    
    return data;
}


//send POST request to api
async function asyncPostFetchRequest(resourceName, body) {

    let data;

    let options = {
        method: "POST",
        withCredentials: true,
        headers: {
            "Authorization": "Baisc " + btoa("JoBUNp1GoRUn4Dcin"),
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body: body
    }
    
    await fetch(apiUrl + resourceName, options)
        .then(resp => resp.json())
        .then(jsonResp => data = jsonResp)
        .catch(function (error) {
            return error;
        });
    return data;
}

//send PUT request to api
async function asyncPutFetchRequest(resourceName, body) {
    let data;
    let error = {};
    let okFlag = true;

    let options = {
        method: "PUT",
        withCredentials: true,
        headers: {
            "Authorization": "Baisc " + btoa("JoBUNp1GoRUn4Dcin"),
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body: body
    }
    
    await fetch(apiUrl + resourceName, options)
        .then((resp) => {
            okFlag = resp.ok ? true : false;
            return resp.json();
        })
        .then(jsonResp => {
            okFlag ? data = jsonResp : error = jsonResp;
        })
        .catch(function (err) {
            error = err;
        });
    return {data: data, error: error};
}


function encodeQueryData(data) {
    const ret = [];
    for (let d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}




function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}







//----------------------------------------------------------
//-------------------js to control Material items-----------
//----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, { edge: "left" });

    
});


