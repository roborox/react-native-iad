# react-native-iad
***WARNING: IOS ONLY***

This native module can fetch Apple's ads attribution

More info about Apple Search Ads: https://developer.apple.com/documentation/iad/setting_up_apple_search_ads_attribution/

## Getting started

### Step 1
1. Install package `npm install @roborox/react-native-iad -SE`

### Step 2

1. In XCode, [follow the instructions](https://searchads.apple.com/v/advanced/help/pdf/attribution-api.pdf) in Step 1 to add the iAd framework
1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-apple-ads-attribution` and add `RNAppleAdsAttribution.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAppleAdsAttribution.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project

## Usage
```javascript
import RNIAp from '@roborox/react-native-iap';

const attributionData = await RNIAp.getAttributionData();
```

*With typescript support*

## More

- Idea: https://raw.githubusercontent.com/kenmaca/react-native-apple-ads-attribution