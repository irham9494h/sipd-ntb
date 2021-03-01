var tableTr = $('table[cellpadding="2"]').parent().find('tr td.text_tengah')

if(current_url.indexOf('rinci/cetak') != -1){
    tableTr.first().text()
    
    chrome.storage.sync.get(['tanggalTtd', 'jabatanKadis', 'namaKadis', 'nipKadis'], 
    function (object) {
        tableTr.first().text("Mataram, tanggal "+object.tanggalTtd)
        
        if(object.jabatanKadis !== '' || object.namaKadis !== '' || object.nipKadis !== ''){
            tableTr.eq(1).text()
            tableTr.eq(2).text()
            tableTr.last().text()
            
            tableTr.eq(1).text(object.jabatanKadis)
            tableTr.eq(2).text(object.namaKadis)
            tableTr.last().text("NIP. "+object.nipKadis)
        }
        
    });
    
}

