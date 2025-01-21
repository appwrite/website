---
layout: post
title: Announcing updates to push notifications
description: ''
date: 2025-01-21
cover: ''
timeToRead: 3
author: laura-du-ry
category: OSS
---

# **Push Notifications: More control over background updates, critical alerts, and delivery**

We're excited to introduce new additions to Appwrite Messaging that give you greater control over how you send and handle push notifications in your app. The push notification API now affords you finer control over both how and when your notifications are delivered. You can run background updates silently, send critical alerts that bypass Do Not Disturb, and manage delivery priorities. These changes enable you to handle common scenarios - such as data syncs, urgent alerts, and battery-conscious updates more effectively.

## **What's new**

### **Background updates (iOS)**

The `contentAvailable` parameter lets your iOS app update in the background without showing a notification to the user. This works well for data syncs and content updates. A few important notes:

- For these background updates, you can omit both the title and body of the notification
- The priority must be set to normal
- You may be throttled (by APNS) if you try to send more than 2-3 background notifications per hour.
- For Android apps: You can get the same functionality by sending a data-only notification (no `title` or `body` parameters)

### **Critical alerts (iOS)**

Sometimes users need to see a notification even when their phone is on Do Not Disturb. The new `critical` parameter attempts to mark the notification as critical, which can bypass silent and do not disturb settings when approved. You'll need Apple's approval first - they require a critical notification entitlement.

### **Priority controls**

You can now set notifications as either normal or high priority:

- Normal priority: The system delivers these at convenient times based on battery life and may group notifications together
- High priority: These go out right away - useful for time-sensitive updates

### **Other updates**

- Badge numbers (iOS): Set a number to display on your app icon to show pending notifications. Set it to 0 to clear existing badges. Must be an integer.
- Data payload: Both title and body are now optional fields. This gives you more flexibility, especially for background updates.

## **Technical details**

These new parameters work with our existing `createPush` and `updatePush` endpoints. We pass these parameters directly to the underlying push notification services (APNs for Apple and FCM for Android) - you just need to set the parameters you want.

## **Documentation and resources**

- See the full implementation details in our [docs](https://appwrite.io/docs/products/messaging/messages)
- Check out real-world examples in our [push notification guide](https://appwrite.io/blog/post/push-notifications-best-practices)
- Watch the [feature walkthrough](https://www.youtube.com/watch?v=QdDgPeuBZ1I)
- Learn more about [Messaging](https://appwrite.io/products/messaging)

If you run into any issues or have questions about implementing these features, check the documentation or reach out to us through our support channels.