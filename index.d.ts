export interface IAdItem {
    "Version3.1": {
        "iad-attribution": boolean;
        "iad-org-name": string;
        "iad-org-id": string;
        "iad-campaign-id": string;
        "iad-campaign-name": string;
        "iad-purchase-date": string;
        "iad-conversion-date": string;
        "iad-conversion-type": string;
        "iad-click-date": string;
        "iad-adgroup-id": string;
        "iad-adgroup-name": string;
        "iad-country-or-region": string;
        "iad-keyword": string;
        "iad-keyword-id": number;
        "iad-keyword-matchtype": string;
        "iad-creativeset-id": string;
        "iad-creativeset-name": string;
    };
}
interface RNIAdModule {
    getAttributionData: () => Promise<IAdItem | null>;
}
declare const _default: RNIAdModule;
export default _default;
