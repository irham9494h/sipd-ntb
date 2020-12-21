var namaGubernur = 'H. ZULKIEFLIMANSYAH';
table = $('.cetak');

if (current_url.indexOf('lampiran') != -1 && current_url.indexOf('apbd') != -1) {
    // APBD Lampiran 1 s/d 16
    var tableHeader = $('table[width="280px"]').parent().find('tr td.text_kiri').last();

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