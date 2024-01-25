const body = document.body;

const dashboardContainer = body.children.namedItem("dashboard-container");        
const logoutContainer = dashboardContainer.children.namedItem("logout-container");
const logout = logoutContainer.children.namedItem("logout");

const dashboardHdr = dashboardContainer.children.namedItem("dashboard-hdr"); 

class Auth {
    constructor() {
	    body.style.display = "none";
	    const auth = localStorage.getItem("auth");
	    this.validate(auth);
	}
    
    validate(auth) {
	    if(auth != 1) {
		    window.location.replace("/");
		} else {
		    body.style.display = "block";
		}
	}
    
    logout() {
	    localStorage.removeItem("auth");
		window.location.replace("/");
	}
}

export { Auth, logout, dashboardHdr };
