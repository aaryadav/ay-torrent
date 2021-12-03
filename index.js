'use strict';
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const torrent = require('./torrent-parser');

const torrent = bencode.decode(fs.readFileSync('ship.torrent'));

tracker.getPeers(torrent, peers => {
    console.log('list of peers: ', peers);
});