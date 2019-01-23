
FOR /F "tokens=4 delims= " %%P IN ('netstat -a -n -o ^| findstr :4200') DO TaskKill.exe /PID %%P
ng serve --port 4200