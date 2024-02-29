# VHS Tapes for .gif generation

This directory contains VHS `.tape` files used to generate .gif files in the docs site programmatically. These files are used by the [VHS project](https://github.com/charmbracelet/vhs), which allows you to define steps for automatically generating .gif files.

## Wait. What?

.gif files are a massive pain to create by hand. You need to install tools on your workstation, record just the right window, carefully type the correct commands, and then process the whole thing into a .gif file. Updating dozens of gifs can be an all-day task no one wants to do. We can define a script for each .gif file with VHS and update them all in minutes.

## First ask yourself: Is an animated .gif really the best approach?

.gif files of CLIs, especially .gifs that scroll, don't do very well in documentation usability studies. Why do you want an animated .gif instead of static results? Do you just think it's cool? Or is there something that only the animation can show that is important to understanding our product? Usually statically presented commands and results are the better choice.

## Using these files

Install VHS:

```bash
brew install vhs
```

Generate a .gif file with a VHS tape:

```bash
vhs < k8s_scan.tape
```

## Example .tape file

This file runs kubectl and then runs mondoo to scan a Kubernetes cluster:

```text
Output k8s-scan.gif
Set Shell bash
Set FontSize 16
Set Width 1000
Set Height 500
Type "kubectl get pods -n luna"
Sleep 500ms
Enter
Sleep 2s
Type "cnspec scan k8s --namespace luna"
Sleep 500ms
Enter
Sleep 18
```
