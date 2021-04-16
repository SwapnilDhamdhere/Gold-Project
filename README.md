# Swapchat
 Simple chat application (client & server) create with java and socket networking

## Table of contents
 * [General info](#general-info)
 * [Technologies](#technologies)
 * [ScreenShot of project](#screenShot-of-project)
 * [Database](#database)
 * [Setup](#setup)

## General info
 Our chat server used a socket networking program to exchange chat between client to client vice versa client to server. It’s a simple user interface and quick access. This app authenticates username and password and provides a secure interface. It’s needed to have network connectivity between server and client. Simple lite application.

## Technologies
 * Java
 * Oracel database (Oracel XE)
 * socket networking

## ScreenShot of project
#### SERVER
![server schema](https://github.com/SwapnilDhamdhere/Swapchat/blob/main/images/server.PNG)
#### LOGIN
![login schema](https://github.com/SwapnilDhamdhere/Swapchat/blob/main/images/login.PNG)
#### MAIN PAGE
![mainpg schema](https://github.com/SwapnilDhamdhere/Swapchat/blob/main/images/mainpg.PNG)

## Database
![database schema](https://github.com/SwapnilDhamdhere/Swapchat/blob/main/images/database.PNG)

## Setup
 To run this project, install it locally using cmd:

```
cd ..\SwapChat\build\classes\chatserver
..\SwapChat\build\classes\chatserver> java mainpg
cd ..\SwapChat\build\classes\swapchat
..\SwapChat\build\classes\swapchat> java LoginPage
```