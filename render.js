const children = [];

function openNewWindow() {
    let childWindow = window.open();
    childWindow.document.body.innerText = "Hello from parent";
    // That can be ReactDOM.render(SomeComponent, childWindow.document.body);
}
