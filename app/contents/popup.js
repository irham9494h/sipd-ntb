$('#btn-option').on('click', function () {
    chrome.tabs.create({url: "app/html/options.html"});
})

chrome.storage.sync.get(['tanggalTtd'], function (object) {
    $('#tanggal-ttd').val(object.tanggalTtd);
});

$('#btn-update-tanggal-ttd').on('click', function () {
    var newDate = $('#tanggal-ttd').val();

    chrome.storage.sync.set({'tanggalTtd': newDate}, function () {
        // successNotification('Berhasil', 'Berhasil mengubah tanggal');
        var notification = {
            type: "basic",
            iconUrl: "images/icon_48.png",
            title: "title",
            message: "message"
        };
        chrome.notifications.create('success', notification);
    });

    $.notify(
        "Berhasil",
        {
            position: "bottom left",
            className: "success"
        }
    );
})

function successNotification(title, message) {
    var notification = {
        type: "basic",
        iconUrl: "images/icon_48.png",
        title: title,
        message: message
    };
    chrome.notifications.create('success', notification);
}
