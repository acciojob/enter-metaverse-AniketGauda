//your JS code here. If required.
let p = document.getElementById("status");
let h = document.getElementById("hdr");
let btn = document.getElementById("enterBtn");

btn.onclick = (()=>{
    p.setAttribute("style",`
        display: none;`
    );
    h.setAttribute("style",`
        display: block;`
    );
})