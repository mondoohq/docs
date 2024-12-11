---
title: Secure VMware with Mondoo
sidebar_label: VMware
sidebar_position: 80
description: This page covers how you can use Mondoo to assess VMware vSphere and ESXi hosts for advisories, vulnerabilities, and security misconfigurations.
image: /img/featured_img/mondoo-vmware.jpg
---

This page describes how to use Mondoo to assess VMware vSphere and ESXi hosts for advisories, vulnerabilities, and security misconfigurations.

## Create a read-only user for Mondoo in vCenter

For Mondoo to scan assets, it requires read-only user access to the vCenter. To provide this, you must first create a new, read-only role. Then you create a new user and assign it the role you created.

1. On the vSphere Client main menu, select **Administration** and then select **Roles**.
2. Select the **Read-only** role and then select **CLONE**.
3. Type the name **Mondoo read-only role** and select **OK**.

   ![Clone read-only role](/img/platform/infra/cloud/vmware/clone-read-only-role.png)

4. In the list of roles, select the **Mondoo read-only role** you just created and select **EDIT**.
5. In the left-side list, select **Global**, and in the right-side list, check **Settings**. Then select **SAVE**.

   ![Create read-only role](/img/platform/infra/cloud/vmware/mondoo-role-global-settings.png)

6. On the **Administration** menu, select **Users and Groups**.
7. Under **Users**, select the Domain **vsphere.local**, and select **ADD**.
8. Type the name **mondoo-read** and assign it a password, then select **ADD**.

   ![Create mondoo user](/img/platform/infra/cloud/vmware/create-mondoo-read-account.png)

9. On the **Administration** menu, select **Global Permissions** and select **ADD**.
10. Assign the new role to the new user:

a. Select the user you created, **mondoo-read**.

b. Select the role you created, **Mondoo Read-only role**.

c. Check **Propagate to children**.

d. Select **OK**.

![add read-only role to mondoo user](/img/platform/infra/cloud/vmware/add-permission-to-mondoo-read-account.png)

## Mondoo VMware appliance

Mondoo's VMware appliance is a pre-configured standard Linux host that allows you to quickly launch a virtual machine designed to scan your VMware environment using cnspec. It is built using these components:

- Debian 12
- [dev-sec.io's Ansible os and ssh role](https://github.com/dev-sec/ansible-collection-hardening)
- [VMware tools](https://github.com/vmware/open-vm-tools)
- [Cloud-Init](https://cloudinit.readthedocs.io/en/latest/index.html) and [cloud-init-vmware-guestinfo](https://github.com/vmware/cloud-init-vmware-guestinfo)
- [cnspec](https://mondoo.com/cnspec)
- [cnquery](https://mondoo.com/cnquery)

:::info

It is not required to use the Mondoo VMware appliance. Instead, you can provision your own hardened Linux instance and install and configure cnspec to scan your VMware infrastructure.

:::

**Setup**

1. Download the [Mondoo OVA image](https://releases.mondoo.com/vmware/).

2. Import the Mondoo OVA image.

3. Launch the Mondoo OVA image.

### Launch the appliance using the vCenter web UI

1. Right-click on your Datacenter and select **Deploy OVF Template**.

   ![Deploy OVF Template](/img/platform/infra/cloud/vmware/vmware-deploy-ovf-template.png)

2. Select an OVF template using **URL** or **Local file** and select **Next**.

   ![Select OVF Template](/img/platform/infra/cloud/vmware/vmware-select-ovf-template.png)

3. Select a name and folder where you want to deploy the Mondoo appliance and select **Next**.

   ![Select folder](/img/platform/infra/cloud/vmware/vmware-select-name-folder.png)

4. Select any compute resource to run the Mondoo appliance and select **Next**.

5. Review the details and select **Next**.

   ![Review details](/img/platform/infra/cloud/vmware/vmware-review-details.png)

6. Select the appropriate storage (such as `datastore2`) and select **Next**.

   ![Select Storage](/img/platform/infra/cloud/vmware/vmware-select-storage.png)

7. Select destination network (such as `VM Network`) and select **Next**.

   ![Select Network](/img/platform/infra/cloud/vmware/vmware-select-network.png)

8. Review your complete configuration for the Mondoo appliance and select **Next**.

   ![Ready to complete](/img/platform/infra/cloud/vmware/vmware-ready.png)

9. Launch the Mondoo appliance.

### SSH for Mondoo appliance

The virtual machine is configured with a `mondoo` user and `mondoo` password. After the first login, you must change the password.

By default, the hardened machine disables password login. To configure the `authorized_keys`, add your ssh public keys to `/home/mondoo/.ssh/authorized_keys`.

:::note

Instead of setting `/home/mondoo/.ssh/authorized_keys` manually, you can configure Cloud-Init to configure the ssh key when during boot time.

:::

:::tip

If you are using GitHub, you can quickly fetch your public keys with this command: `mkdir ~/.ssh && curl https://github.com/{youruser}.keys > .ssh/authorized_keys`

:::

When you log in using your ssh key, you see this welcome screen:

```text
                        .-.
                        : :
,-.,-.,-. .--. ,-.,-. .-' : .--.  .--. ™
: ,. ,. :' .; :: ,. :' .; :' .; :' .; :
:_;:_;:_;`.__.':_;:_;`.__.'`.__.'`.__.'

Mondoo VMware Appliance

mondoo@debian:~$
```

#### Enable SSH password authentication

If you can't copy the SSH key using the `curl` command, you can allow SSH password authentication during deployment.

1. After the SSH public keys are deployed, enable SSH password authentication by modifying these lines in `/etc/ssh/sshd_config`:

```bash
AuthenticationMethods password
PasswordAuthentication yes
```

2. Restart the sshd service using `systemctl restart sshd.service`.

3. Log in with your user name and password.

### Configure a static IP address (optional)

If you choose, you can configure a static IP address (using a `root` user shell).

1. In the editor of your choice, open the `/etc/network/interfaces` file and rewrite the block that defines your primary network interface. For example, this block adds the static IP `192.168.1.100` to the interface `ens32` in a Class C private network with the network gateway and the name server both housed at `192.168.1.1`:

```bash
# The primary network interface
auto ens32
iface ens32 inet static
address 192.168.1.100
netmask 255.255.255.0
gateway 192.168.1.1
dns-nameservers 192.168.1.1 8.8.8.8
```

2. Make sure to comment out these lines in the file `/etc/network/interfaces.d/50-cloud-init`:

```bash
#auto lo
#iface lo inet loopback

#auto ens32
#iface ens32 inet dhcp
```

3. Create the file `/etc/cloud/cloud.cfg.d/99-disable-network-config.cfg` with the following content:

```bash
network: {config: disabled}
```

4. Make sure to set the correct name server(s) in the file `/etc/resolv.conf`:

```bash
nameserver 192.168.1.1
nameserver 192.168.1.2
```

5. Restart the `networking` service:

```bash
systemctl restart networking
```

:::note

If the static IP you chose is different then the current IP address of the VM, you will lose the current shell connection to the Mondoo Appliance and need to reconnect to the new, static IP address.

:::

### Configure cnspec

Mondoo's cross-platform scanning engine, [cnspec](/cnspec/cnspec-about/), assesses your VMware. To return results to Mondoo for monitoring, reporting, and measuring improvements, you must register cnspec with Mondoo Platform.

1. Enter this command:

```bash
sudo cnspec login -t <paste token here> --config /etc/opt/mondoo/mondoo.yml
```

2. Verify that cnspec is registered successfully with Mondoo Platform by running `cnspec status`:

```bash
→ loaded configuration from /etc/opt/mondoo/mondoo.yml using source --config
→ Hostname:     debian
→ IP:           192.168.51.139
→ Platform:     debian
→ Release:      11.2
→ Time:         2022-05-26T15:43:59-07:00
→ Version:      6.0.0 (API Version: 6)
→ API ConnectionConfig: https://us.api.mondoo.com
→ API Status:   SERVING
→ API Time:     2022-05-26T22:44:00Z
→ API Version:  6
→ Space:        //captain.api.mondoo.app/spaces/relaxed-poincare-384428
→ Client:       //agents.api.mondoo.app/spaces/relaxed-poincare-384428/agents/22vUq9U0gN9Uoy2c3UqCaKARSEg
→ Service Account:      //agents.api.mondoo.app/spaces/relaxed-poincare-384428/serviceaccounts/22y0WDmHloyEvdJEteV5cEvsQTj
→ client is registered
→ client authenticated successfully
```

3. Test that cnspec can reach the vSphere API. The command below runs the two default Mondoo policies:

   - The `Platform End-of-Life Policy`
   - The `Platform Vulnerability Policy`

   As their names suggest, they scan the vSphere and determine if it has reached its end-of-life and if there are any known vulnerabilities.

   Use the `--incognito` switch to disable sending the results to the Mondoo Console.

```bash
# vSphere 6.x / 7.x
cnspec scan vsphere user@host --ask-pass
```

4. Activate the policies against which Mondoo assesses your VMware.

   To learn more, read [Manage Policies](/platform/security/posture/policies/).

A good place to start scanning is the `VMware vSphere ESXi Security Baseline by Mondoo` policy.

5. Now, with the policy of your choice activated, scan again:

```bash
cnspec scan vsphere user@host --ask-pass
```

Because you did not pass the `--incognito` switch, the command output includes a link to the Mondoo Console, where you can review the scan results.

## Set up cnspec inventory

cnspec can use an inventory file to scan multiple VMware assets at the same time. An inventory is a list of systems with their connection types and accounts.

### cnspec inventory with embedded secrets

This `inventory.yml` illustrates the configuration for the vCenter connection:

```yaml
apiVersion: v1
kind: Inventory
metadata:
  name: cnspec-inventory
  labels:
    environment: production
spec:
  assets:
    - name:
      connections:
        - type: vsphere
          host: < ip of the ESXi or vCenter >
          insecure: true
          credentials:
            - type: password
              user: < username >
              password: < password >
          discover:
            targets:
              - host-machines
```

1. Using a user account with `root` privileges, store the content in `/etc/opt/mondoo/inventory.yml` to ensure that cnspec picks up the inventory automatically.

2. Test that the `inventory.yml` is working:

```bash
mondoo@debian:~$ sudo cnspec scan --inventory-file /etc/opt/mondoo/inventory.yml
→ load inventory inventory=/etc/opt/mondoo/inventory.yml
→ cnspec 7.15.1 (Space: "//captain.api.mondoo.app/spaces/relaxed-poincare-384428", Service Account: "22y0WDmHloyEvdJEteV5cEvsQTj", Managed Client: "22vUq9U0gN9Uoy2c3UqCaKARSEg")
→ loaded configuration from /etc/opt/mondoo/mondoo.yml using source --config

→ discover related assets for 1 asset(s)
→ resolved assets resolved-assets=4
→ execute policies
→ synchronize asset found=4
→ establish connection to asset 192.168.51.134 (VMware vCenter Server) (api)
→ established connection
→ run policies for asset asset=//assets.api.mondoo.app/spaces/relaxed-poincare-384428/assets/22y2gEXiZrRagoV5cPbVFjj0MSI
...
```

2. Restart the service, so that the new inventory is loaded:

```bash
sudo systemctl restart cnspec
```

3. Check if the `inventory.yml` is loaded:

```bash
sudo journalctl -u cnspec.service
```

```bash
-- Journal begins at Wed 2021-12-29 16:03:27 UTC, ends at Wed 2021-12-29 16:39:28 UTC. --
Dec 29 16:38:04 debian systemd[1]: Started cnspec Service.
Dec 29 16:38:05 debian cnspec[1294]: → load inventory inventory=/etc/opt/mondoo/inventory.yml
Dec 29 16:38:05 debian cnspec[1294]: → cnspec 7.15.1 (Space: "//captain.api.mondoo.app/spaces/relaxed-poincare-384428", Service Account>
Dec 29 16:38:05 debian cnspec[1294]: → loaded configuration from /etc/opt/mondoo/mondoo.yml using source --config
Dec 29 16:38:06 debian cnspec[1294]: → start cnspec background service
```

4. Enable the service so that after the VM restarts, the service starts automatically:

```bash
sudo systemctl enable cnspec
```

### cnspec inventory YAML with encrypted file vault

1. Configure cnspec's vault to use the encrypted file vault. Execute the following commands as `mondoo` user (not as `root` user). Run this command to create the vault configuration:

```bash
cnspec vault configure mondoo-client-vault --type encrypted-file --option=password='changeme' --option path='/etc/opt/mondoo/vault.enc'
→ add the following vault configuration to your inventory file
spec:
  vault:
    name: mondoo-client-vault
    options:
      password: changeme
      path: /etc/opt/mondoo/vault.enc
    type: encrypted-file
```

2. Adjust the `/etc/opt/mondoo/inventory.yml` with the proposed configuration to use the encrypted file vault functionality:

```yaml
apiVersion: v1
kind: Inventory
metadata:
  name: cnspec-inventory
  labels:
    environment: production
spec:
  assets:
    - name:
      connections:
        - type: vsphere
          host: 192.168.51.134
          insecure: true
          credentials:
            - secret_id: vcenter
          discover:
            targets:
              - host-machines
  vault:
    name: mondoo-client-vault
    options:
      password: changeme
      path: /etc/opt/mondoo/vault.enc
    type: encrypted-file
```

3. To store the vSphere login credentials into the encrypted file vault, execute the following command:

```bash
cnspec vault add-secret vcenter '{   "type": "password",   "user": "chris@vsphere.local",   "password": "password" }' --inventory-file /etc/opt/mondoo/inventory.yml
```

4. Scan the vSphere using the encrypted file vault:

```bash
# Note that you need to run this as root user, as the vault is stored in /etc/opt/mondoo/vault.enc
sudo cnspec scan --inventory-file /etc/opt/mondoo/inventory.yml
```

5. Once you have verified that the encrypted file vault is working, restart the cnspec service:

```bash
systemctl restart cnspec
```

## Scan vSphere and ESXi using cnspec

Scan vSphere API, ESXi, and VMs:

```bash
cnspec scan vsphere mondoo-read@vsphere.local@192.168.51.134 --ask-pass --discover auto
```

:::info

The `--discover auto` option automatically discovers all ESXi hosts and the vCenter.

:::

Scan vSphere API, ESXi, and VMs and automatically discover all ESXi hosts and VMs:

```bash
cnspec scan vsphere mondoo-read@vsphere.local@192.168.51.134 --ask-pass --discover all
```

---
