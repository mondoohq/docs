THIS IS A TEMPORARY, HIDDEN FILE

Docusaurus doesn't compile this. No user will ever see it.

I've taken the pipe method out of the Ansible doc until we can figure out how to make it work. I removed the --insecure flag. But Patrick still doesn't scan successfully.


#### Step 2: Scan the Ansible inventory

The method for scanning an Ansible inventory depends on whether your shell supports `|`.

##### Option A: Pipe the Ansible inventory to cnspec scan

The first option if you are using a shell such as `bash` or `zsh` that supports `|` redirects is to pipe the output of the `ansible-inventory -i hosts.ini --list` command to `cnspec scan --inventory-format-ansible`. For `FILENAME`, substitute the name of the inventory file.

```bash title="Pipe the contents of an Ansible inventory to the cnspec scan command"
ansible-inventory -i hosts.ini --list | cnspec scan --inventory-format-ansible
```

##### Option B: Scan Ansible inventory hosts.json

If your shell does not support pipes, you can generate a `hosts.json` from the `ansible-inventory` command and then pass that file to `cnspec scan` using the `--inventory-file` flag.

```bash title="Generate hosts.json and scan with cnspec scan command"
ansible-inventory -i hosts.ini --list > hosts.json

cnspec scan --inventory-file hosts.json --inventory-format-ansible

```
