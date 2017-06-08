# blake2b-benchmark

Benchmark of various Blake2b implementations.

To run the benches:

```
npm install
npm run bench
```

The benchmark tests how long it takes to hash a series of `128b`, `4kb` and `64kb` buffers
using [sodium-native](https://github.com/sodium-friends/sodium-native), [blake2b](https://github.com/emilbayes/blake2b), and [blake2b-wasm](https://github.com/mafintosh/blake2b-wasm)

Here are the results from running the bench on my 2015, MacBook 12".

#### Using [sodium-native](https://github.com/sodium-friends/sodium-native) (Node.js native module)

``` txt
NANOBENCH version 2
> node index.js sodium-native

# hash 100000x 128b
ok ~115 ms (0 s + 115110995 ns)

# hash 1000x 4kb
ok ~6.09 ms (0 s + 6093677 ns)

# hash 1000x 64kb
ok ~101 ms (0 s + 100862480 ns)

all benchmarks completed
ok ~222 ms (0 s + 222067152 ns)
```

#### Using [blake2b-wasm](https://github.com/mafintosh/blake2b-wasm) (WebAssembly)

``` txt
NANOBENCH version 2
> node index.js blake2b-wasm

# hash 100000x 128b
ok ~222 ms (0 s + 221547739 ns)

# hash 1000x 4kb
ok ~22 ms (0 s + 21884462 ns)

# hash 1000x 64kb
ok ~306 ms (0 s + 305651336 ns)

all benchmarks completed
ok ~549 ms (0 s + 549083537 ns)
```

#### Using [blake2b](https://github.com/emilbayes/blake2b) (Pure Javascript)

``` txt
NANOBENCH version 2
> node index.js blake2b

# hash 100000x 128b
ok ~1.01 s (1 s + 12673122 ns)

# hash 1000x 4kb
ok ~327 ms (0 s + 326822314 ns)

# hash 1000x 64kb
ok ~5.25 s (5 s + 254090932 ns)

all benchmarks completed
ok ~6.59 s (6 s + 593586368 ns)
```

## License

MIT
