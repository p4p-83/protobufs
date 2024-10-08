# `protobufs`

> [!NOTE]
> Refer to [`p4p.jamesnzl.xyz/learn`](https://p4p.jamesnzl.xyz/learn) for full details.

This repository contains the [Protocol Buffer](https://protobuf.dev/overview/) definition(s) for our pick-and-place machine.

## Compiling

Use the provided `protoc-gen.sh` script to recompile the target language bindings.

```sh
cd pnp/v1
npm run protoc # this runs protoc-gen.sh
```

## Usage

Add this repository as a submodule.
```sh
git submodule add https://github.com/p4p-83/protobufs
```
