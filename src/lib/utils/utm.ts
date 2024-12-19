export function getReferrerAndUtmSource() {
    if (sessionStorage) {
        let values = {};
        if (sessionStorage.getItem('referrer')) {
            values = { ...values, referrer: sessionStorage.getItem('referrer') };
        }
        if (sessionStorage.getItem('utmSource')) {
            values = { ...values, utmSource: sessionStorage.getItem('utmSource') };
        }

        return values;
    }
    return {};
}
