---
title: microsoft.conditionalAccess.policy.sessionControls
id: microsoft.conditionalAccess.policy.sessionControls
sidebar_label: microsoft.conditionalAccess.policy.sessionControls
displayed_sidebar: MQL
description: Microsoft Conditional Access Policy Session Controls
---

# microsoft.conditionalAccess.policy.sessionControls

**Description**

Microsoft Conditional Access Policy Session Controls

**Fields**

| ID                              | TYPE                                                                                                                                                                        | DESCRIPTION                                                                                                                          |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| id                              | string                                                                                                                                                                      | Internal ID based on policy ID                                                                                                       |
| signInFrequency                 | [microsoft.conditionalAccess.policy.sessionControls.signInFrequency](microsoft.conditionalaccess.policy.sessioncontrols.signinfrequency.md)                                 | Session control to enforce signin frequency                                                                                          |
| cloudAppSecurity                | [microsoft.conditionalAccess.policy.sessionControls.cloudAppSecurity](microsoft.conditionalaccess.policy.sessioncontrols.cloudappsecurity.md)                               | Session control to apply cloud app security                                                                                          |
| persistentBrowser               | dict                                                                                                                                                                        | Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly. |
| applicationEnforcedRestrictions | [microsoft.conditionalAccess.policy.sessionControls.applicationEnforcedRestrictions](microsoft.conditionalaccess.policy.sessioncontrols.applicationenforcedrestrictions.md) | Session control to enforce application restrictions. Only Exchange Online and SharePoint Online support this session control         |
| secureSignInSession             | dict                                                                                                                                                                        | Secure application model for continuous access evaluation                                                                            |
