---
title: windows.bitlocker.volume
id: windows.bitlocker.volume
sidebar_label: windows.bitlocker.volume
displayed_sidebar: MQL
description: Windows BitLocker volume
---

# windows.bitlocker.volume

**Description**

Windows BitLocker volume

**Fields**

| ID                 | TYPE   | DESCRIPTION                                                                                                                                                                           |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| deviceID           | string | Unique identifier for the volume                                                                                                                                                      |
| driveLetter        | string | Drive letter of the volume                                                                                                                                                            |
| conversionStatus   | dict   | Status of the encryption or decryption on the volume                                                                                                                                  |
| encryptionMethod   | dict   | Encryption algorithm and key size used on the volume                                                                                                                                  |
| lockStatus         | int    | Whether the contents of the volume are accessible from Windows, 0 = Full contents of the volume are accessible, 1 = All or a portion of the contents of the volume are not accessible |
| persistentVolumeID | string | Persistent identifier for the volume on this system                                                                                                                                   |
| protectionStatus   | dict   | Status of the volume, whether or not BitLocker is protecting the volume, 0 = Protection off, 1 = Protection on, 2 = Protection unknown                                                |
| version            | dict   | BitLocker Full Volume Encryption metadata version of the volume                                                                                                                       |
