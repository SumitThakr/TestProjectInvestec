//
//  RCTDeviceTypeIos.m
//  TestProjectInvestec
//
//  Created by SumitThakur on 23/01/22.
//
#import <React/RCTLog.h>
#import "RCTDeviceTypeIos.h"

@implementation RCTDeviceTypeIos

RCT_EXPORT_MODULE();

- (BOOL) isSimulator {
    #if TARGET_IPHONE_SIMULATOR
        return YES;
    #else
        return NO;
    #endif
}

 RCT_EXPORT_METHOD(isSimulator:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
     resolve(@(self.isSimulator));
 }

@end
