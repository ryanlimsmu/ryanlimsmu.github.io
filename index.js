function createAlert() {
    let liveAlertsArea = document.getElementById("liveAlerts");
    let alertWrapper = document.createElement("div");
    alertWrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>You clicked the button! Here's a new live alert. Feel free to close this.</div>`,
        `   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`,
        `</div>`
    ].join("")

    liveAlertsArea.append(alertWrapper)
}