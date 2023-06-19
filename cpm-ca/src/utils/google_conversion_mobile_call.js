export default function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-997202270/gOfzCM28rYQBEN6ywNsD',
        'event_callback': callback
    });
    return false;
}