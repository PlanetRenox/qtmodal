import { $ } from 'https://cdn.jsdelivr.net/npm/qthtml';

var QTModal = {
    html: `
    <div id="qtmodal" style="position:fixed; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.5);">
      <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); padding:20px; background:#fff;">
        Loading...
      </div>
    </div>`,
    show: () => $(`body`).inject(QTModal.html),
    hide: () => $('#qtmodal')?.remove()
}
