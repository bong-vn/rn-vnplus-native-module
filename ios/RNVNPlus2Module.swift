//
//  RNVNPlus2Module.swift
//  RNVNPlus2Module
//
//  Copyright © 2022 Brandon O.. All rights reserved.
//

import Foundation

@objc(RNVNPlus2Module)
class RNVNPlus2Module: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
