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
    let values = {};
    if (typeof sessionStorage !== 'undefined') {
        if (sessionStorage.getItem('utmSource')) {
            values = { ...values, utm_source: sessionStorage.getItem('utmSource') };
        }
        if (sessionStorage.getItem('utmMedium')) {
            values = { ...values, utm_medium: sessionStorage.getItem('utmMedium') };
        }
        if (sessionStorage.getItem('utmCampaign')) {
            values = { ...values, utm_campaign: sessionStorage.getItem('utmCampaign') };
        }
    }
    return values;
}
