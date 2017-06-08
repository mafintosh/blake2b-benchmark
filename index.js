var sodium = require('sodium-native')
var blake2b = require('blake2b')
var blake2bw = require('blake2b-wasm')
var nanobench = require('nanobench')

var INPUT128B = Buffer.alloc(128)
var INPUT4KB = Buffer.alloc(4096)
var INPUT64KB = Buffer.alloc(65536)

var name = process.argv[2]

var hash = {
  blake2b: hashJS,
  'blake2b-wasm': hashWasm,
  'sodium-native': hashSodium
}[name]

blake2bw.ready(function () {
  nanobench('hash 100000x 128b', function (b) {
    run(100000, INPUT128B, hash, b)
  })

  nanobench('hash 1000x 4kb', function (b) {
    run(1000, INPUT4KB, hash, b)
  })

  nanobench('hash 1000x 64kb', function (b) {
    run(1000, INPUT64KB, hash, b)
  })

  function run (times, buf, hash, b) {
    for (var i = 0; i < times; i++) hash(buf)
    b.end()
  }
})

function hashJS (input) {
  var out = new Buffer(32)
  blake2b(out, input)
  return out
}

function hashWasm (input) {
  return blake2bw().update(input).digest()
}

function hashSodium (input) {
  var out = new Buffer(32)
  sodium.crypto_generichash(out, input)
  return out
}
