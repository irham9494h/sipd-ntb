var namaGubernur = 'H. ZULKIEFLIMANSYAH';
table = $('.cetak');

$('body').append('<div class="divFooter">UNCLASSIFIED</div>')

if (current_url.indexOf('lampiran/*/apbd/*')) {
    // APBD Lampiran 1

    html = '<table width="100%" cellpadding="1" cellspacing="2">' +
        '<tbody><tr>' +
        '<td class="kiri kanan atas bawah" width="350" valign="top" style="border: 0 !important;"></td>' +
        '<td class="kiri kanan atas bawah" width="350" valign="top" style="border: 0 !important;">' +
        '<table width="100%" cellpadding="2" cellspacing="0">' +
        '<tbody>' +
        '<tr><td colspan="3" height="20">&nbsp;</td></tr>' +
        '<tr><td colspan="3" class="text_tengah">Mataram, <span id="tgl-ttg-perda">30 November 2020</span> </td></tr>' +
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



}