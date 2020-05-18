import type { IAdItem } from "./index"

export const RNIAd = {
	getAttributionData: () => Promise.resolve({
		"Version3.1": {
			"iad-adgroup-id": "1234567890",
			"iad-adgroup-name": "AdGroupName",
			"iad-attribution": "true",
			"iad-campaign-id": "1234567890",
			"iad-campaign-name": "CampaignName",
			"iad-click-date": "2020-05-18T10:46:57Z",
			"iad-conversion-date": "2020-05-18T10:46:57Z",
			"iad-conversion-type": "Download",
			"iad-country-or-region": "US",
			"iad-creativeset-id": "1234567890",
			"iad-creativeset-name": "CreativeSetName",
			"iad-keyword": "Keyword",
			"iad-keyword-id": "KeywordID",
			"iad-keyword-matchtype": "Broad",
			"iad-lineitem-id": "1234567890",
			"iad-lineitem-name": "LineName",
			"iad-org-id": "1234567890",
			"iad-org-name": "OrgName",
			"iad-purchase-date": "2020-05-18T10:46:57Z",
		},
	} as IAdItem)
}