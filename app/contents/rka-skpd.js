var tableTr = $('table[cellpadding="2"]').parent().find('tr td.text_tengah').first()

if(current_url.indexOf('rinci/cetak') != -1){
    var text = tableTr.text()
    
    chrome.storage.sync.get(['tanggalTtd'], function (object) {
        tableTr.text("Mataram, tanggal "+object.tanggalTtd)
    });
}

