export function getReferrerAndUtmSource() {
    if (sessionStorage) {
        let values = {};
        if (sessionStorage.getItem('utmReferral')) {
            values = { ...values, utmReferral: sessionStorage.getItem('utmReferral') };
        }
        if (sessionStorage.getItem('utmSource')) {
            values = { ...values, utmSource: sessionStorage.getItem('utmSource') };
        }
        if (sessionStorage.getItem('utmMedium')) {
            values = { ...values, utmMedium: sessionStorage.getItem('utmMedium') };
        }

        return values;
    }
    return {};
}

export function getUtmSourceForLink() {
    if (typeof sessionStorage !== 'undefined') {
        const values = [];
        if (sessionStorage.getItem('utmSource')) {
            values.push(`utm_source=${sessionStorage.getItem('utmSource')}`);
        }
        if (sessionStorage.getItem('utmMedium')) {
            values.push(`utm_medium=${sessionStorage.getItem('utmMedium')}`);
        }
        if (sessionStorage.getItem('utmCampaign')) {
            values.push(`utm_campaign=${sessionStorage.getItem('utmCampaign')}`);
        }

        return values.join('&');
    }
    return '';
}
