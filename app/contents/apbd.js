var namaGubernur = 'H. ZULKIEFLIMANSYAH';
table = $('.cetak');

if (current_url.indexOf('lampiran') != -1 && current_url.indexOf('apbd') != -1) {
    // APBD Lampiran 1 s/d 16
    var tableHeader = $('table[width="280px"]').parent().find('tr td.text_kiri').last();

    $('table[width="25%"]').hide();
    
    chrome.storage.sync.get(['tanggalTtd'], function (object) {
        
        html = '<table width="100%" cellpadding="1" cellspacing="2">' +
        '<tbody><tr>' +
        '<td class="kiri kanan atas bawah" width="350" valign="top" style="border: 0 !important;"></td>' +
        '<td class="kiri kanan atas bawah" width="350" valign="top" style="border: 0 !important;">' +
        '<table width="100%" cellpadding="2" cellspacing="0">' +
        '<tbody>' +
        '<tr><td colspan="3" height="20">&nbsp;</td></tr>' +
        '<tr><td colspan="3" class="text_tengah">Mataram, <span id="tgl-ttg-perda">' + object.tanggalTtd + '</span> </td></tr>' +
        '<tr><td colspan="3" class="text_tengah"><strong>GUBERNUR PROVINSI NUSA TENGGARA BARAT</strong></td></tr>' +
        '<tr><td colspan="3" height="60">&nbsp;</td></tr>' +
        '<tr><td colspan="3" class="text_tengah" style=" text-align: center;"><strong>' + namaGubernur + '</strong></td></tr>' +
        '</tbody>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';
        
        table.append(html)
        tableHeader.text(object.tanggalTtd)
        
    });
    
}

var option={
    host:"ntbprov.sipd.kemendagri.go.id",
    path:"daerah/main/budget/skpd/2021/list/407/0",
    port:"443",
    headers:{
        "Cookie": "SEREVRUSED=SIPD_wsWorker15; eyJpdiI6IlN0QXFXSWpXVVVmVGp0c3Y4dXNuSUE9PSIsInZhbHVlIjoiVTRpdzlyTDRYQ0QyUE85Y0MxY01QelwvWW1UdTh3K2xYRzZSbzBJYkoyaktMZVpRRklcL29pelQzVEhydTNHTVpKQzEzOGhNeHFsSGtLVXZ0ZExGVWIxTTZtaHVGUWRoanFXRmVIVmdxWHRTXC9aVjBOZElyaUREUUh4eEgyeEtrbU8iLCJtYWMiOiJiY2QxMGQ1N2M2NDBkZWI4Y2Y2MjhlN2ViYjk2YmE1YTYyMzczMTVhNjlhMzA4ZGVmMTY5MjIzMjRiOTZiM2QwIn0%3D"
    }
}

// var callback = function(response) {
    
//     var str = '';
//     response.on('data', function (chunk) {
//         str += chunk;
//     });
    
//     response.on("end", function () {
//         var data= J5ON.parse(str);
//         var skpd = data.data;
//         skpd.forEach(element => { 
//             console.log(element.id_units+","+element.id_skpd+","+element.kode_skpd+","+element.nama_skpd);
//         });
//     });
// }

// var req = https.request (option, callback);
// req.end();

$.ajax({
    url:"https://ntbprov.sipd.kemendagri.go.id/daerah/main/budget/pendapatan/2021/ang/list/407/99",
    port:"443",
    headers:{
        "setCookies": "SEREVRUSED=SIPD_wsWorker15; eyJpdiI6IlN0QXFXSWpXVVVmVGp0c3Y4dXNuSUE9PSIsInZhbHVlIjoiVTRpdzlyTDRYQ0QyUE85Y0MxY01QelwvWW1UdTh3K2xYRzZSbzBJYkoyaktMZVpRRklcL29pelQzVEhydTNHTVpKQzEzOGhNeHFsSGtLVXZ0ZExGVWIxTTZtaHVGUWRoanFXRmVIVmdxWHRTXC9aVjBOZElyaUREUUh4eEgyeEtrbU8iLCJtYWMiOiJiY2QxMGQ1N2M2NDBkZWI4Y2Y2MjhlN2ViYjk2YmE1YTYyMzczMTVhNjlhMzA4ZGVmMTY5MjIzMjRiOTZiM2QwIn0%3D"
    },
    success: function(res){
        console.log(res)
    },
  });
