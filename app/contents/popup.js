$('#btn-option').on('click', function () {
    chrome.tabs.create({url: "app/html/options.html"});
})

chrome.storage.sync.get(['tanggalTtd'], function (object) {
    $('#tanggal-ttd').val(object.tanggalTtd);
});

$('#btn-update-tanggal-ttd').on('click', function () {
    var newDate = $('#tanggal-ttd').val();
    
    chrome.storage.sync.set({'tanggalTtd': newDate}, function () {
        $.notify( "Berhasil",
        {
            position: "bottom left",
            className: "success"
        }
        );
    });
});

