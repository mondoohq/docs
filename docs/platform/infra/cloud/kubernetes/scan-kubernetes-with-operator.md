---
title: Continuously Scan Kubernetes with the Mondoo Kubernetes Operator
sidebar_label: Scan Continuously
description: This guide covers how you can continuously assess the security configuration of your Kubernetes cluster, nodes, and deployments with Mondoo.
image: /img/featured_img/mondoo-kubernetes.jpg
---

The Mondoo Kubernetes Operator is Mondoo software that runs in your Kubernetes environment. Working within your cluster, the Mondoo Operator can:

- Continuously scan nodes to assess security and identify vulnerabilities

- Continuously scan the cluster to assess security and identify vulnerabilities

- Scan new nodes as they come online

The operator includes a Kubernetes admission controller that performs a security scan on each deployment introduced into the cluster and reports the results. [Learn more.](/cnspec/cloud/k8s/)

### Add a Mondoo Kubernetes integration

To set up a Mondoo Kubernetes operator integration, access the Integrations > Add > GCP page in one of two ways:

- New space setup: After creating a new Mondoo account or creating a new space, the initial setup guide welcomes you. Select **BROWSE INTEGRATIONS** and then select **Kubernetes**.

  ![Welcome to Mondoo Page](/img/platform/start/welcome_to_mondoo.png)

- INTEGRATIONS page: In the side navigation bar, under **INTEGRATIONS**, select **Add New Integration**. Under Cloud Security, select **Kubernetes**.

### Configure a Mondoo Kubernetes integration

![k8s-settings](/img/platform/infra/cloud/kubernetes/integration-setup.png)

1. Type a name for the integration. This name identifies the integration in lists and distinguishes it from other integrations in your space. You can't change the name after you leave this page.

2. To continuously assess the security posture of nodes in your Kubernetes cluster, enable **Scan nodes**.

   Choose how to scan cluster nodes:

   - We strongly recommend that you leave **CronJob-based** selected. It's ideal for most infrastructures. A CronJob executes regularly to run the scans without permanently allocating any resources for Mondoo on cluster nodes.

   - If your nodes tend to run near 100% resource utilization, that leaves no resources available for a CronJob to run a Mondoo scan. If you experience consistently failing Mondoo node scans, select **DaemonSet-based** scanning instead. This approach reserves resources for Mondoo on each cluster node. It relies on a DaemonSet to assure that Mondoo scans the nodes continuously, even during high-traffic times.

3. To continuously assess the security posture of workloads and resources in your cluster, enable **Scan workloads**.

   ![Kubernetes integration](/img/platform/infra/cloud/kubernetes/integration-setup-2.png)

4. To scan container images, enable **Workload image scanning**.

5. To control which namespaces Mondoo scans, enable **Namespace filtering** and list the namespaces to which you want to allow or deny access.

6. To assess the security of every change applied to your Kubernetes cluster and display the results in the CI/CD view, enable **Scan incoming deployments**.

7. If you enable **Scan incoming deployments**, choose the tool to use for managing the Mondoo admission controller's certificates: **CertManager** or **OpenShift**.

8. Select the **CREATE KUBERNETES INTEGRATION** button.

### Scan incoming deployments

Whenever a supported workload type is created or updated, the Kubernetes admission controller scans it.
Currently, the admission controller can scan these workload types:

- Pods
- Deployments
- DaemonSets
- StatefulSets
- Jobs
- CronJobs

If a workload is dependent on another workload, the admission controller only scans the owner workload. For example, if a Deployment creates a pod, the admission controller skips the pod and scans the Deployment.
The owner workload is the definition where you can fix issues permanently.
For more details, see the [Kubernetes documentation](https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/).

Mondoo scans workloads according to the activated policies. [Learn more](/platform/security/posture/overview)

Scan results appear in the CI/CD view when running the admission webhook in **permissive** mode.
In **enforcing** mode, the scan result also determines whether the workload is applied to the cluster.
For general information about admission controllers, see the [Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/).

## View Kubernetes integrations

Once you've added a Kubernetes Operator Integration you can view these integrations by going to the **Integrations** page and selecting **Kubernetes**

![k8s-integrations-list](/img/platform/infra/cloud/kubernetes/integration-list.png)

To view additional status details or change an integration's configuration, select its row in the list.

![k8s-integration-detail](/img/platform/infra/cloud/kubernetes/integration-details.png)

## Remove Kubernetes integrations

1. Follow the instructions above to view your list of Kubernetes integrations.

2. Find the integration you want to remove and check the box beside it.

3. Select the **DELETE** button.

![remove-k8s-integration](/img/platform/infra/cloud/kubernetes/integration-delete.png)

---
