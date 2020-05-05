function resizeAndAdd(toResize)
{
    let name = toResize.contentWindow.document.getElementsByTagName("h2")[0].innerHTML;
    let id = toResize.contentWindow.document.getElementsByTagName("i")[0].innerHTML;
    id = id.replace(/\./g, '_');
    toResize.parentElement.id = id;
    createLink(name, "#"+id);
    resizeEvent(toResize);
}
function resizeEvent(toResize)
{
    resize(toResize);
    toResize.contentWindow.addEventListener("resize", function() { resize(toResize); });
}
function resize(toResize)
{
    let height = (toResize.contentWindow.document.body.scrollHeight+20) + "px";
    toResize.style.height=height;
}
function createLink(name, href)
{
    // Create anchor element.
    var a = document.createElement('a');
    // Create the text node for anchor element.
    var link = document.createTextNode(name);
    // Append the text node to anchor element.
    a.appendChild(link);
    // Set the title.
    a.title = name;
    // Set the href property.
    a.href = href;
    // Append the anchor element to the body.
    document.getElementById("update_links").appendChild(a);
}