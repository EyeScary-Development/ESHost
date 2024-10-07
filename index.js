function createURL(){
    var output=document.getElementById("codebox").value;
    const encodedString = btoa(unescape(encodeURIComponent(output)));
    hostlink="https://cshost.pages.dev/host/?site="+encodedString;
    const copyButton = document.createElement("button");    
    copyButton.textContent = "Share this note with a friend? (currently read only)";
    copyButton.class= "normalbutton"
    copyButton.onclick = function() {
    clipCopy(hostlink);
    alert('link copied')
    };
}
