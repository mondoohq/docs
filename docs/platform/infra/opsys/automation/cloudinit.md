---
title: cloud-init and Mondoo
sidebar_label: cloud-init
sidebar_position: 4
description: This page covers how to use cloud-init to install cnspec on hosts to run policies as code.
image: /img/featured_img/mondoo-feature.jpg
---

This page covers how to use cloud-init to install cnspec on hosts to run policies as code.

<!-- prettier-ignore -->
import Partial from "./_automation-providers-note.mdx";

<Partial />{" "}

## Install cnspec using cloud-init

Most cloud environments support the configuration of an operating system during launch. [cloud-init](https://cloudinit.readthedocs.io/en/latest/) is the standard multi-distribution method for cross-platform cloud instance initialization. For Linux systems, cloud-init supports bash scripts.

Use Mondoo's [Bash installer script](/cnspec/cnspec-adv-install/linux.mdx) for cloud-init. To deploy agents with cloud-init, you need a Mondoo registration token.

1. In the Mondoo console, [navigate](/platform/start/navigate/) to the space in which you want to add hosts.

2. [Create a new API token](/platform/maintain/access/api-tokens/).

3. Copy the new token and paste it in this command in place of `your-api-token`:

```bash title="Install cnspec using cloud-init"
#!/bin/bash
export MONDOO_REGISTRATION_TOKEN='your-api-token'
curl -sSL https://install.mondoo.com/sh | bash -s -- -u enable -s enable -t $MONDOO_REGISTRATION_TOKEN
```

cnspec performs the first scan about 30 seconds after the machine boots.

## Example

This example installs cnspec on an AWS EC2 instance:

1. Save the code snippet above to `mondoo-cloudinit.sh` with a Mondoo registration token:

   ```bash title="Example cnspec install on an AWS EC2 instance"
   cat > mondoo-cloudinit.sh << EOF
   #!/bin/bash
   export MONDOO_REGISTRATION_TOKEN='sample-token-CI6Ii8vYWdlbnRzABEL775kb28uYXBwL3NwYWNlcy9mcmllbmRseS1jb3JpLTY1NjU5Ni9zZXJ2aWNlYWNjb3VudHMvMnNqM21aSVhvczloZGxHQ0J2aE1kVVJ3N1g5IiwidHlwIjoiSldUIn0.eyJpYXQiOjE3Mzg5HANNAsImlzcyI6Im1vbmRvby9hbDEWEYuYmYiOjE3Mzg5NTUzMTUsInN1YiI6Ii8vYWdlbnRzLmFwaS5tb25kb28uYXBwL3NwYWNlcy9mcmllbmRseS1jb3JpLTY1NjU5Ni9zZXJ2aWNlYWNjb3VudHMvMnNqM21aSVhvczloZGxHQ0J2aE1kVVJ3N1g5In0.Xz_N4lRFQtu5RqoLRep7V_JGhZrOm_1s7_hrrnaKyqYT0bYyUhJXzno0_r8nJj_Z6w-GGZgC6DZutK2GkC-6pic3f2oU3YKPBxH5atBH7AEaQpcmCOSMOL42ErGzt4D'
   curl -sSL https://install.mondoo.com/sh | bash -s -- -u enable -s enable -t $MONDOO_REGISTRATION_TOKEN
   EOF
   ```

2. Launch a new instance, substituting your region, image ID, security group IDs, and key name:

   ```bash title="Example of new instance launch"
   aws ec2 run-instances --region us-east-1 --image-id  ami-0ad82abel06c911e --security-group-ids sg-904444f8 --count 1 --instance-type t2.micro --key-name stella --user-data file://mondoo-cloudinit.sh
   ```

You can see the results of the vulnerability scan in the Mondoo Console when the installation and scan are complete:

![See agent in console](/img/platform/infra/cloud/aws/aws_instance_results.png)

Once the machine is up and running, it reports vulnerabilities to Mondoo automatically.

To learn more about the AWS CLI , read [Launch, List, and Terminate Amazon EC2 Instances](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2-instances.html) and [Running Commands on Your Linux Instance at Launch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html).

If you need to troubleshoot, review the log file `/var/log/cloud-init-output.log` to see the cloud-init run output.
