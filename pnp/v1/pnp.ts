/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.27.1
 * source: pnp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace pnp.v1 {
    export class Message extends pb_1.Message {
        #one_of_decls: number[][] = [[2, 3, 4, 5]];
        constructor(data?: any[] | ({
            tag?: Message.Tags;
        } & (({
            deltas?: Message.Deltas;
            positions?: never;
            step?: never;
            calibration?: never;
        } | {
            deltas?: never;
            positions?: Message.Positions;
            step?: never;
            calibration?: never;
        } | {
            deltas?: never;
            positions?: never;
            step?: Message.Step;
            calibration?: never;
        } | {
            deltas?: never;
            positions?: never;
            step?: never;
            calibration?: Message.Calibration;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("tag" in data && data.tag != undefined) {
                    this.tag = data.tag;
                }
                if ("deltas" in data && data.deltas != undefined) {
                    this.deltas = data.deltas;
                }
                if ("positions" in data && data.positions != undefined) {
                    this.positions = data.positions;
                }
                if ("step" in data && data.step != undefined) {
                    this.step = data.step;
                }
                if ("calibration" in data && data.calibration != undefined) {
                    this.calibration = data.calibration;
                }
            }
        }
        get tag() {
            return pb_1.Message.getFieldWithDefault(this, 1, Message.Tags.INVALID) as Message.Tags;
        }
        set tag(value: Message.Tags) {
            pb_1.Message.setField(this, 1, value);
        }
        get deltas() {
            return pb_1.Message.getWrapperField(this, Message.Deltas, 2) as Message.Deltas;
        }
        set deltas(value: Message.Deltas) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_deltas() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get positions() {
            return pb_1.Message.getWrapperField(this, Message.Positions, 3) as Message.Positions;
        }
        set positions(value: Message.Positions) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_positions() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get step() {
            return pb_1.Message.getWrapperField(this, Message.Step, 4) as Message.Step;
        }
        set step(value: Message.Step) {
            pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
        }
        get has_step() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get calibration() {
            return pb_1.Message.getWrapperField(this, Message.Calibration, 5) as Message.Calibration;
        }
        set calibration(value: Message.Calibration) {
            pb_1.Message.setOneofWrapperField(this, 5, this.#one_of_decls[0], value);
        }
        get has_calibration() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get payload() {
            const cases: {
                [index: number]: "none" | "deltas" | "positions" | "step" | "calibration";
            } = {
                0: "none",
                2: "deltas",
                3: "positions",
                4: "step",
                5: "calibration"
            };
            return cases[pb_1.Message.computeOneofCase(this, [2, 3, 4, 5])];
        }
        static fromObject(data: {
            tag?: Message.Tags;
            deltas?: ReturnType<typeof Message.Deltas.prototype.toObject>;
            positions?: ReturnType<typeof Message.Positions.prototype.toObject>;
            step?: ReturnType<typeof Message.Step.prototype.toObject>;
            calibration?: ReturnType<typeof Message.Calibration.prototype.toObject>;
        }): Message {
            const message = new Message({});
            if (data.tag != null) {
                message.tag = data.tag;
            }
            if (data.deltas != null) {
                message.deltas = Message.Deltas.fromObject(data.deltas);
            }
            if (data.positions != null) {
                message.positions = Message.Positions.fromObject(data.positions);
            }
            if (data.step != null) {
                message.step = Message.Step.fromObject(data.step);
            }
            if (data.calibration != null) {
                message.calibration = Message.Calibration.fromObject(data.calibration);
            }
            return message;
        }
        toObject() {
            const data: {
                tag?: Message.Tags;
                deltas?: ReturnType<typeof Message.Deltas.prototype.toObject>;
                positions?: ReturnType<typeof Message.Positions.prototype.toObject>;
                step?: ReturnType<typeof Message.Step.prototype.toObject>;
                calibration?: ReturnType<typeof Message.Calibration.prototype.toObject>;
            } = {};
            if (this.tag != null) {
                data.tag = this.tag;
            }
            if (this.deltas != null) {
                data.deltas = this.deltas.toObject();
            }
            if (this.positions != null) {
                data.positions = this.positions.toObject();
            }
            if (this.step != null) {
                data.step = this.step.toObject();
            }
            if (this.calibration != null) {
                data.calibration = this.calibration.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.tag != Message.Tags.INVALID)
                writer.writeEnum(1, this.tag);
            if (this.has_deltas)
                writer.writeMessage(2, this.deltas, () => this.deltas.serialize(writer));
            if (this.has_positions)
                writer.writeMessage(3, this.positions, () => this.positions.serialize(writer));
            if (this.has_step)
                writer.writeMessage(4, this.step, () => this.step.serialize(writer));
            if (this.has_calibration)
                writer.writeMessage(5, this.calibration, () => this.calibration.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Message {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Message();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.tag = reader.readEnum();
                        break;
                    case 2:
                        reader.readMessage(message.deltas, () => message.deltas = Message.Deltas.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.positions, () => message.positions = Message.Positions.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.step, () => message.step = Message.Step.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.calibration, () => message.calibration = Message.Calibration.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Message {
            return Message.deserialize(bytes);
        }
    }
    export namespace Message {
        export enum Tags {
            INVALID = 0,
            HEARTBEAT = 1,
            TARGET_DELTAS = 2,
            MOVED_DELTAS = 3,
            TARGET_POSITIONS = 4,
            STEP_GANTRY = 5,
            CALIBRATE_DELTAS = 6
        }
        export class Deltas extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                x?: number;
                y?: number;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("x" in data && data.x != undefined) {
                        this.x = data.x;
                    }
                    if ("y" in data && data.y != undefined) {
                        this.y = data.y;
                    }
                }
            }
            get x() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
            }
            set x(value: number) {
                pb_1.Message.setField(this, 1, value);
            }
            get y() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
            }
            set y(value: number) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data: {
                x?: number;
                y?: number;
            }): Deltas {
                const message = new Deltas({});
                if (data.x != null) {
                    message.x = data.x;
                }
                if (data.y != null) {
                    message.y = data.y;
                }
                return message;
            }
            toObject() {
                const data: {
                    x?: number;
                    y?: number;
                } = {};
                if (this.x != null) {
                    data.x = this.x;
                }
                if (this.y != null) {
                    data.y = this.y;
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.x != 0)
                    writer.writeSint32(1, this.x);
                if (this.y != 0)
                    writer.writeSint32(2, this.y);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Deltas {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Deltas();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.x = reader.readSint32();
                            break;
                        case 2:
                            message.y = reader.readSint32();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Deltas {
                return Deltas.deserialize(bytes);
            }
        }
        export class Position extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                x?: number;
                y?: number;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("x" in data && data.x != undefined) {
                        this.x = data.x;
                    }
                    if ("y" in data && data.y != undefined) {
                        this.y = data.y;
                    }
                }
            }
            get x() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
            }
            set x(value: number) {
                pb_1.Message.setField(this, 1, value);
            }
            get y() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
            }
            set y(value: number) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data: {
                x?: number;
                y?: number;
            }): Position {
                const message = new Position({});
                if (data.x != null) {
                    message.x = data.x;
                }
                if (data.y != null) {
                    message.y = data.y;
                }
                return message;
            }
            toObject() {
                const data: {
                    x?: number;
                    y?: number;
                } = {};
                if (this.x != null) {
                    data.x = this.x;
                }
                if (this.y != null) {
                    data.y = this.y;
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.x != 0)
                    writer.writeInt32(1, this.x);
                if (this.y != 0)
                    writer.writeInt32(2, this.y);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Position {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Position();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.x = reader.readInt32();
                            break;
                        case 2:
                            message.y = reader.readInt32();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Position {
                return Position.deserialize(bytes);
            }
        }
        export class Positions extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                offsets?: Message.Position[];
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("offsets" in data && data.offsets != undefined) {
                        this.offsets = data.offsets;
                    }
                }
            }
            get offsets() {
                return pb_1.Message.getRepeatedWrapperField(this, Message.Position, 1) as Message.Position[];
            }
            set offsets(value: Message.Position[]) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
            static fromObject(data: {
                offsets?: ReturnType<typeof Message.Position.prototype.toObject>[];
            }): Positions {
                const message = new Positions({});
                if (data.offsets != null) {
                    message.offsets = data.offsets.map(item => Message.Position.fromObject(item));
                }
                return message;
            }
            toObject() {
                const data: {
                    offsets?: ReturnType<typeof Message.Position.prototype.toObject>[];
                } = {};
                if (this.offsets != null) {
                    data.offsets = this.offsets.map((item: Message.Position) => item.toObject());
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.offsets.length)
                    writer.writeRepeatedMessage(1, this.offsets, (item: Message.Position) => item.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Positions {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Positions();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.offsets, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Message.Position.deserialize(reader), Message.Position));
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Positions {
                return Positions.deserialize(bytes);
            }
        }
        export class Step extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                direction?: Message.Step.Direction;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("direction" in data && data.direction != undefined) {
                        this.direction = data.direction;
                    }
                }
            }
            get direction() {
                return pb_1.Message.getFieldWithDefault(this, 1, Message.Step.Direction.INVALID) as Message.Step.Direction;
            }
            set direction(value: Message.Step.Direction) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data: {
                direction?: Message.Step.Direction;
            }): Step {
                const message = new Step({});
                if (data.direction != null) {
                    message.direction = data.direction;
                }
                return message;
            }
            toObject() {
                const data: {
                    direction?: Message.Step.Direction;
                } = {};
                if (this.direction != null) {
                    data.direction = this.direction;
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.direction != Message.Step.Direction.INVALID)
                    writer.writeEnum(1, this.direction);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Step {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Step();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.direction = reader.readEnum();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Step {
                return Step.deserialize(bytes);
            }
        }
        export namespace Step {
            export enum Direction {
                INVALID = 0,
                ZERO = 1
            }
        }
        export class Calibration extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                target?: Message.Deltas;
                real?: Message.Deltas;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("target" in data && data.target != undefined) {
                        this.target = data.target;
                    }
                    if ("real" in data && data.real != undefined) {
                        this.real = data.real;
                    }
                }
            }
            get target() {
                return pb_1.Message.getWrapperField(this, Message.Deltas, 1) as Message.Deltas;
            }
            set target(value: Message.Deltas) {
                pb_1.Message.setWrapperField(this, 1, value);
            }
            get has_target() {
                return pb_1.Message.getField(this, 1) != null;
            }
            get real() {
                return pb_1.Message.getWrapperField(this, Message.Deltas, 2) as Message.Deltas;
            }
            set real(value: Message.Deltas) {
                pb_1.Message.setWrapperField(this, 2, value);
            }
            get has_real() {
                return pb_1.Message.getField(this, 2) != null;
            }
            static fromObject(data: {
                target?: ReturnType<typeof Message.Deltas.prototype.toObject>;
                real?: ReturnType<typeof Message.Deltas.prototype.toObject>;
            }): Calibration {
                const message = new Calibration({});
                if (data.target != null) {
                    message.target = Message.Deltas.fromObject(data.target);
                }
                if (data.real != null) {
                    message.real = Message.Deltas.fromObject(data.real);
                }
                return message;
            }
            toObject() {
                const data: {
                    target?: ReturnType<typeof Message.Deltas.prototype.toObject>;
                    real?: ReturnType<typeof Message.Deltas.prototype.toObject>;
                } = {};
                if (this.target != null) {
                    data.target = this.target.toObject();
                }
                if (this.real != null) {
                    data.real = this.real.toObject();
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.has_target)
                    writer.writeMessage(1, this.target, () => this.target.serialize(writer));
                if (this.has_real)
                    writer.writeMessage(2, this.real, () => this.real.serialize(writer));
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Calibration {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Calibration();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.target, () => message.target = Message.Deltas.deserialize(reader));
                            break;
                        case 2:
                            reader.readMessage(message.real, () => message.real = Message.Deltas.deserialize(reader));
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Calibration {
                return Calibration.deserialize(bytes);
            }
        }
    }
}
