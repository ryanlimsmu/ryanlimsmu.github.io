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

function getQuote() {

    let api_endpoint_url = "https://api.quotable.io/random";

    axios.get(api_endpoint_url)
    .then(response => {
        let apiOutput = response.data;
        let quoteArea = document.getElementById("quoteBox");
        let quoteText = apiOutput.content;
        let quoteAuthor = apiOutput.author;

        quoteArea.innerHTML = [
            `<figure>`,
            `    <blockquote class="blockquote">`,
            `        <p>${quoteText}</p>`,
            `    </blockquote>`,
            `    <figcaption class="blockquote-footer">`,
            `            ${quoteAuthor}`,
            `    </figcaption>`,
            `</figure>`
        ].join("")
    })
    .catch(error =>{
        console.log(error.message);
    })

}