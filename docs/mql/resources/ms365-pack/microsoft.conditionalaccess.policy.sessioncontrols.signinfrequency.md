---
title: microsoft.conditionalAccess.policy.sessionControls.signInFrequency
id: microsoft.conditionalAccess.policy.sessionControls.signInFrequency
sidebar_label: microsoft.conditionalAccess.policy.sessionControls.signInFrequency
displayed_sidebar: MQL
description: Session control to enforce sign-in frequency
---

# microsoft.conditionalAccess.policy.sessionControls.signInFrequency

**Description**

Session control to enforce sign-in frequency

**Fields**

| ID                 | TYPE   | DESCRIPTION                                                                                                                                                                  |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authenticationType | string | The possible values are primaryAndSecondaryAuthentication, secondaryAuthentication, unknownFutureValue.                                                                      |
| frequencyInterval  | string | The possible values are timeBased, everyTime, unknownFutureValue. Sign-in frequency of everyTime is available for risky users, risky sign-ins, and Intune device enrollment. |
| isEnabled          | bool   | Specifies whether the session control is enabled.                                                                                                                            |
