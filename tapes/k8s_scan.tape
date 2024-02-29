Output ../static/videos/k8s-scan.gif
Set Shell bash
Set FontSize 16
Set Width 1000
Set Height 500
Hide
Type "clear"
Enter
Sleep 1s
Show
Type "kubectl get pods -n luna"
Sleep 500ms
Enter
Sleep 2s
Type "cnspec scan k8s --namespace luna"
Sleep 500ms
Enter
Sleep 25
