# DNSwitch
A DNS Switcher for Nintendo Switch to active built-in bowser

# Depends
1. Node.js 7.x

#Use
> Make sure your Nintendo Switch and your computer is connected to the same router.

1. Clone the project `git clone https://github.com/ITJesse/DNSwitch.git`
2. Go into the folder `cd DNSwitch` and run `npm install`
3. Check the IP of your computer and write it down, example: `192.168.1.2` 
4. Edit `dns.json` and change the `192.168.2.1` to your computer's IP
5. Run DNS server `sudo npm run dns`
6. Run Web server `sudo npm run web`
7. Connect your Nintendo Switch to the same router with your computer
8. Set the connection`s DNS server to your computer's IP
9. Follow the muenu, and you will see the input box.
10. Have fun!
