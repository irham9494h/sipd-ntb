var tableTr = $('table[cellpadding="2"]').parent().find('tr td.text_tengah')

if(current_url.indexOf('rinci/cetak') != -1){
    tableTr.first().text()
    
    chrome.storage.sync.get(['tanggalTtd', 'jabatanKadis', 'namaKadis', 'nipKadis'], 
    function (object) {
        tableTr.first().text("Mataram, tanggal "+object.tanggalTtd)
        
        if(object.jabatanKadis !== ''){
            tableTr.eq(1).text()
            tableTr.eq(1).text(object.jabatanKadis)
        }
        
        if(object.namaKadis !== ''){
            tableTr.eq(2).text()
            tableTr.eq(2).text(object.namaKadis)
        } 
        
        if(object.nipKadis !== ''){
            tableTr.last().text()
            tableTr.last().text("NIP. "+object.nipKadis)
        }
        
    });
    
}

