# Deploying while trying to do the load testing

First of all, all the services were tested locally using the compose file.

After success, all the directory along with modification in compose file is added in git.

The images must be build prior on the local computer and push to dockerhub as while creating services the nodes will not find the image and there is no build module in docker swarm mode in comopose file.

mongo needs to be setup as replicated or else error is imminent 

I do not know either this setup works or not with mongo without the replica.

So mongo needs to have only one replica as it is a statefull application and if we want to run in, we can configure them seperately or use the statefullsets in k8s.

So basically I did all the load testing using ab:

First I launched a seperate vm to execute all the ab commands, and then I installed the apache utils that enables to use ab:
```
sudo apt update && apt install apache2-utils
```

After that I used the following commands to test the load in the server:
```
ab -n 100 -c 10 http://192.168.33.10/
```
Here, n is the no of tests page request
-c allows no of requests sent at a certain time.

Can also add -g for output so -g out.txt

Below are some screenshots of the test done:
<img width="1440" alt="Screen Shot 2025-01-28 at 4 28 35 PM" src="https://github.com/user-attachments/assets/ab82f025-f5f4-435f-8acd-87478fa6be0a" />

<img width="1440" alt="Screen Shot 2025-01-28 at 4 29 03 PM" src="https://github.com/user-attachments/assets/f71c052c-7e78-4a23-a9b7-ac72ef96130f" />

### And glimps of the application I have deployed to check the validity.

<img width="1440" alt="Screen Shot 2025-01-28 at 4 31 56 PM" src="https://github.com/user-attachments/assets/f6cfd761-41d6-409a-97ce-af69d209a8df" />

<img width="1440" alt="Screen Shot 2025-01-28 at 4 32 22 PM" src="https://github.com/user-attachments/assets/d7b43232-3cdb-49ae-84de-2842ed7fac52" />

<img width="1440" alt="Screen Shot 2025-01-28 at 4 32 30 PM" src="https://github.com/user-attachments/assets/f6209ec2-fbbb-4add-adae-004d64f5de8b" />

<img width="1440" alt="Screen Shot 2025-01-28 at 4 32 53 PM" src="https://github.com/user-attachments/assets/a95d867a-1e49-4a39-b2ec-3fb716201d85" />

the last image is hitting a internal backend server via external server which is running on localhost:5000 and the service /test is testing the connectivity of the internal server.
