#!/bin/sh
PIDFILE="wickrbot.pid"
pkill -F "$PIDFILE" && rm -f "$PIDFILE"
