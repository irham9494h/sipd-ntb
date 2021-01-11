var tableTr = $('table[cellpadding="2"]').parent().find('tr td.text_tengah').first()

if (current_url.indexOf('dpa-skpd/cetak') != -1) {
    // var tableTr = $('table[cellpadding="2"][cellspacing="0"]').parent().find('tr td[colspan="3"].text_tengah').first()
    var text = tableTr.text()
    
    chrome.storage.sync.get(['tanggalTtd'], function (object) {
        tableTr.text("Mataram, tanggal "+object.tanggalTtd)
    });
}else if(current_url.indexOf('dpa-penda/cetak') != -1){
    // var tableTr = $('table[cellpadding="2"][cellspacing="0"]').parent().find('tr td[colspan="3"].text_tengah').first()
    var text = tableTr.text()
    
    chrome.storage.sync.get(['tanggalTtd'], function (object) {
        tableTr.text("Mataram, tanggal "+object.tanggalTtd)
    });
}else if(current_url.indexOf('dpa-bl/cetak') != -1){
    // var tableTr = $('table[cellpadding="2"][cellspacing="0"]').parent().find('tr td[colspan="3"].text_tengah').first()
    var text = tableTr.text()
    
    chrome.storage.sync.get(['tanggalTtd'], function (object) {
        tableTr.text("Mataram, tanggal "+object.tanggalTtd)
    });
}else if(current_url.indexOf('dpa-bl-rinci/cetak') != -1){
    // var tableTr = $('table[cellpadding="2"][cellspacing="0"]').parent().find('tr td[colspan="3"].text_tengah').first()
    var text = tableTr.text()
    
    chrome.storage.sync.get(['tanggalTtd'], function (object) {
        tableTr.text("Mataram, tanggal "+object.tanggalTtd)
    });
}else if(current_url.indexOf('dpa-biaya/cetak') != -1){
    // var tableTr = $('table[cellpadding="2"][cellspacing="0"]').parent().find('tr td[colspan="3"].text_tengah').first()
    var text = tableTr.text()
    
    chrome.storage.sync.get(['tanggalTtd'], function (object) {
        tableTr.text("Mataram, tanggal "+object.tanggalTtd)
    });
}

