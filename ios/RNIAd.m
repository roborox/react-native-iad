#import "RNIAd.h"
#import <iAd/iAd.h>

@implementation RNIAd

RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue {
	return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(
	getAttributionData:(RCTPromiseResolveBlock)resolve
	rejecter: (RCTPromiseRejectBlock)reject
) {
	[[ADClient sharedClient] requestAttributionDetailsWithBlock: ^(NSDictionary *attributionDetails, NSError *error) {
		if (!error) {
			resolve(attributionDetails);
		} else {
			resolve([NSNull null]);
		}
	}];
}

@end