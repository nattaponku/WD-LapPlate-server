0. install pm2
1. start dashboard
pm2 serve D:\NodeVue\EGAT-dashboard\dist\ 80 --name EGAT-Dashboard

2. start server
pm2 start D:\NodeVue\EGAT-server\src\app.js --name EGAT-Server

3. pm2 save. this generate processes state to be save. this save state will reload when restart automatically

4. install jessety/pm2-installer
4.1 In pm2-installer subdir, npm run configure 
	for moving npm environment to public accesibility
4.2 In pm2-installer subdir, npm run setup

