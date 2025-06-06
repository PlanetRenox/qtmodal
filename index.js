const h32kn$ = (selector) =>
{
    const el = document.querySelector(selector)
    el.render = (html) => el.innerHTML = html
    el.ontop = (html) => el.insertAdjacentHTML('beforebegin', html)
    return el;
};

var QTModal = {
    html: `
    <div id="qtmodal" style="position:fixed; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.5);">
      <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); padding:20px; background:#fff;">
        Loading...
      </div>
    </div>`,
    show: () => h32kn$(`body`).ontop(QTModal.html),
    hide: () => h32kn$('#qtmodal')?.remove()
}
