#!/usr/bin/env node

var Spy = require('./lib/spy'),
    CommandDispatcher = require('./lib/core/command-dispatcher'),
    Command = require('./lib/core/command'),
    folderDest = process.argv[2],
    kodiHost = process.argv[3];


var scanCommand = new Command(Command.TYPE.SCAN),
    commandDispatcher = new CommandDispatcher(kodiHost, scanCommand),
    spy = new Spy(folderDest, commandDispatcher);

spy.watch();