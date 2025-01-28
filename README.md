# Deploying while trying to do the load testing

First of all, all the services were tested locally using the compose file.
After success, all the directory along with modification in compose file is added in git.

The images must be build prior on the local computer and push to dockerhub as while creating services the nodes will not find the image and there is no build module in docker swarm mode in comopose file.

mongo needs to be setup as replicated or else error is imminent 

i donot know either this setup works or not with mongo without the replica.

so mongo needs to have only one replica as it is a statefull application and if we want to run in, we can configure them seperately or use the statefullsets in k8s.


