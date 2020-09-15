#!/bin/bash
PIDFILE="wickrbot.pid"
node index.js "$@" &
echo $! > "$PIDFILE"
