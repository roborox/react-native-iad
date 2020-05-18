export interface IAdItem {
    "Version3.1": {
        "iad-adgroup-id": string;
        "iad-adgroup-name": string;
        "iad-attribution": string;
        "iad-campaign-id": string;
        "iad-campaign-name": string;
        "iad-click-date": string;
        "iad-conversion-date": string;
        "iad-conversion-type": string;
        "iad-country-or-region": string;
        "iad-creativeset-id": string;
        "iad-creativeset-name": string;
        "iad-keyword": string;
        "iad-keyword-id": string;
        "iad-keyword-matchtype": string;
        "iad-lineitem-id": string;
        "iad-lineitem-name": string;
        "iad-org-id": string;
        "iad-org-name": string;
        "iad-purchase-date": string;
    };
}
interface RNIAdModule {
    getAttributionData: () => Promise<IAdItem | null>;
}
declare const _default: RNIAdModule;
export default _default;
