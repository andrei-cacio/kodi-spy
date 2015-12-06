# kodi-spy

is a simple watch tool for watching your local media folder and auto updating your Kodi library remotly

### Version
0.1

### Installation

```shell
$ npm install -g kodi-spy
```

### Usage
```shell
$ kodi-spy media-folder kodi-host
```

### Upstart example for running all the time

If you are using Ubuntu, or an Ubuntu related distribution, you will have [Upstart](http://upstart.ubuntu.com/) installed by default. You can use upstart to keep an all the time running daemon with `kodi-spy` so you don't have to start it up everytime the folder will change.

You simply create a `.conf` file in `/etc/init` folder

```bash
sudo vim /etc/init/kodi-spy.conf
```

and paste this inside and replace user with your current linux user and `kodi-host-or-ip` with your xbmc/kodi/openelec IP

```
start on local-filesystems
stop on shutdown

script
	exec /usr/bin/nodejs /home/user/npm/lib/node_modules/kodi-spy/index.js /home/user/Videos kodi-host-or-ip
end script
```
