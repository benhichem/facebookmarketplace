@echo off

REM Navigate to the project directory

REM Install dependencies
npm install

cd marketplaceclient
npm install 

cd ..
REM Start the application
npm run start
