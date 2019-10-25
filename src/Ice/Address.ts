//
// Copyright (c) ZeroC, Inc. All rights reserved.
//

// const Ice = require("../Ice/ModuleRegistry").Ice;

// class Address
// {
//     constructor(host, port)
//     {
//         this.host = host;
//         this.port = port;
//     }
// }

// Ice.Address = Address;
// module.exports.Ice = Ice;

export class Address {
    public constructor(public host: string, public port: number) {
    }
}
