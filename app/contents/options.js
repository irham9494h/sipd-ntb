$(function () {
    $('#btn-close-options').on('click', function () {
        chrome.tabs.getCurrent(function (tab) {
            chrome.tabs.remove(tab.id, function () {
            });
        });
    })

    // TAB TAPD --------------------------------------------------------------------------------------------------------
    chrome.storage.sync.get(['kelompokTAPD'], function (object) {
        if (object.kelompokTAPD == null) {
        } else {
            fecthTAPD(object.kelompokTAPD, false)
        }
    });
    // END OF TAB TAPD -------------------------------------------------------------------------------------------------

    // TAB KADIS -------------------------------------------------------------------------------------------------------
    chrome.storage.sync.get(['jabatanKadis', 'namaKadis', 'nipKadis'], function (object) {
        if (object.jabatanKadis === null) {
            $('#btn-save-kadis-text').text('Simpan');
        } else {
            $('#jabatan-kadis').val(object.jabatanKadis);
            $('#nama-kadis').val(object.namaKadis);
            $('#nip-kadis').val(object.nipKadis);
            $('#btn-save-kadis-text').text('Update');
        }
    });
    // END OF TAB KADIS ------------------------------------------------------------------------------------------------

    // Input Mask ------------------------------------------------------------------------------------------------------
    $('#nip-kadis').mask('00000000 000000 0 000');
    // End of Input Mask -----------------------------------------------------------------------------------------------
});

$('input[name="radio_tapd"]').on('change', function () {
    var radioKelompokTapd = $(this).val();
    chrome.storage.sync.set({'kelompokTAPD': radioKelompokTapd});

    fecthTAPD($(this).val(), true)
});

$('#btn-save-kadis').on('click', function () {
    var jabatanKadis = $('#jabatan-kadis').val();
    var namaKadis = $('#nama-kadis').val();
    var nipKadis = $('#nip-kadis').val();
    chrome.storage.sync.set({
        'jabatanKadis': jabatanKadis,
        'namaKadis': namaKadis,
        'nipKadis': nipKadis
    }, function () {
        $.notify(
            "Berhasil menyimpan data kepala dinas/UPT",
            {
                position: "bottom right",
                className: "success"
            }
        );
    });
});

function fecthTAPD(kelompok, notif) {
    var html = '';
    var no = 0;
    var dataTAPD = [];

    // Read data from json file
    $.getJSON("../../seeds/tapd.json", function (data) {
        if (kelompok === '1') {
            dataTAPD = data['tapd_klp_1'];
            $('#radio-tapd-1').prop('checked', true)
        } else if (kelompok === '2') {
            dataTAPD = data['tapd_klp_2'];
            $('#radio-tapd-2').prop('checked', true)
        } else if (kelompok === '3') {
            dataTAPD = data['tapd_klp_3'];
            $('#radio-tapd-3').prop('checked', true)
        }

        $.each(dataTAPD, function (i) {
            html += '<tr>\n' +
                '      <th scope="row">' + (no += 1) + '</th>\n' +
                '      <td>' + dataTAPD[i].nama + '</td>\n' +
                '      <td>' + dataTAPD[i].nip + '</td>\n' +
                '      <td>' + dataTAPD[i].jabatan + '</td>\n' +
                '    </tr>';
        });
        $('#tapd-table-body').html(html);

        if (notif) {
            $.notify(
                "Berhasil, sekarang Anda berada di TAPD kelompok " + kelompok,
                {
                    position: "bottom right",
                    className: "success"
                }
            );
        }

    }).fail(function () {
        $.notify(
            "Gagal memuat data TAPD",
            {
                position: "bottom right",
                className: "error"
            }
        );
    });
}
