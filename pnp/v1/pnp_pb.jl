# Autogenerated using ProtoBuf.jl v1.0.15 on 2024-09-21T17:26:29.582
# original file: /Users/james/Developer/uoa/p4/p4p/interface/client/src/proto/pnp/v1/pnp.proto (proto3 syntax)

import ProtoBuf as PB
using ProtoBuf: OneOf
using ProtoBuf.EnumX: @enumx

export var"Message.HeadOperation.Operation", var"Message.Position"
export var"Message.Step.Direction", var"Message.Deltas", var"Message.Tags"
export var"Message.HeadOperation", var"Message.Positions", var"Message.MachineState"
export var"Message.Step", var"Message.Calibration", Message

@enumx var"Message.HeadOperation.Operation" PICK=0 PLACE=1 ENGAGE_VACUUM=2 DISENGAGE_VACUUM=3 LOWER_HEAD=4 RAISE_HEAD=5

struct var"Message.Position"
    x::Int32
    y::Int32
end
PB.default_values(::Type{var"Message.Position"}) = (;x = zero(Int32), y = zero(Int32))
PB.field_numbers(::Type{var"Message.Position"}) = (;x = 1, y = 2)

function PB.decode(d::PB.AbstractProtoDecoder, ::Type{<:var"Message.Position"})
    x = zero(Int32)
    y = zero(Int32)
    while !PB.message_done(d)
        field_number, wire_type = PB.decode_tag(d)
        if field_number == 1
            x = PB.decode(d, Int32)
        elseif field_number == 2
            y = PB.decode(d, Int32)
        else
            PB.skip(d, wire_type)
        end
    end
    return var"Message.Position"(x, y)
end

function PB.encode(e::PB.AbstractProtoEncoder, x::var"Message.Position")
    initpos = position(e.io)
    x.x != zero(Int32) && PB.encode(e, 1, x.x)
    x.y != zero(Int32) && PB.encode(e, 2, x.y)
    return position(e.io) - initpos
end
function PB._encoded_size(x::var"Message.Position")
    encoded_size = 0
    x.x != zero(Int32) && (encoded_size += PB._encoded_size(x.x, 1))
    x.y != zero(Int32) && (encoded_size += PB._encoded_size(x.y, 2))
    return encoded_size
end

@enumx var"Message.Step.Direction" INVALID=0 ZERO=1

struct var"Message.Deltas"
    x::Int32
    y::Int32
end
PB.default_values(::Type{var"Message.Deltas"}) = (;x = zero(Int32), y = zero(Int32))
PB.field_numbers(::Type{var"Message.Deltas"}) = (;x = 1, y = 2)

function PB.decode(d::PB.AbstractProtoDecoder, ::Type{<:var"Message.Deltas"})
    x = zero(Int32)
    y = zero(Int32)
    while !PB.message_done(d)
        field_number, wire_type = PB.decode_tag(d)
        if field_number == 1
            x = PB.decode(d, Int32, Val{:zigzag})
        elseif field_number == 2
            y = PB.decode(d, Int32, Val{:zigzag})
        else
            PB.skip(d, wire_type)
        end
    end
    return var"Message.Deltas"(x, y)
end

function PB.encode(e::PB.AbstractProtoEncoder, x::var"Message.Deltas")
    initpos = position(e.io)
    x.x != zero(Int32) && PB.encode(e, 1, x.x, Val{:zigzag})
    x.y != zero(Int32) && PB.encode(e, 2, x.y, Val{:zigzag})
    return position(e.io) - initpos
end
function PB._encoded_size(x::var"Message.Deltas")
    encoded_size = 0
    x.x != zero(Int32) && (encoded_size += PB._encoded_size(x.x, 1, Val{:zigzag}))
    x.y != zero(Int32) && (encoded_size += PB._encoded_size(x.y, 2, Val{:zigzag}))
    return encoded_size
end

@enumx var"Message.Tags" INVALID=0 HEARTBEAT=1 TARGET_DELTAS=2 MOVED_DELTAS=3 TARGET_POSITIONS=4 STEP_GANTRY=5 CALIBRATE_DELTAS=6 OPERATE_HEAD=7 MACHINE_STATE=8

struct var"Message.HeadOperation"
    operation::var"Message.HeadOperation.Operation".T
end
PB.default_values(::Type{var"Message.HeadOperation"}) = (;operation = var"Message.HeadOperation.Operation".PICK)
PB.field_numbers(::Type{var"Message.HeadOperation"}) = (;operation = 1)

function PB.decode(d::PB.AbstractProtoDecoder, ::Type{<:var"Message.HeadOperation"})
    operation = var"Message.HeadOperation.Operation".PICK
    while !PB.message_done(d)
        field_number, wire_type = PB.decode_tag(d)
        if field_number == 1
            operation = PB.decode(d, var"Message.HeadOperation.Operation".T)
        else
            PB.skip(d, wire_type)
        end
    end
    return var"Message.HeadOperation"(operation)
end

function PB.encode(e::PB.AbstractProtoEncoder, x::var"Message.HeadOperation")
    initpos = position(e.io)
    x.operation != var"Message.HeadOperation.Operation".PICK && PB.encode(e, 1, x.operation)
    return position(e.io) - initpos
end
function PB._encoded_size(x::var"Message.HeadOperation")
    encoded_size = 0
    x.operation != var"Message.HeadOperation.Operation".PICK && (encoded_size += PB._encoded_size(x.operation, 1))
    return encoded_size
end

struct var"Message.Positions"
    offsets::Vector{var"Message.Position"}
end
PB.default_values(::Type{var"Message.Positions"}) = (;offsets = Vector{var"Message.Position"}())
PB.field_numbers(::Type{var"Message.Positions"}) = (;offsets = 1)

function PB.decode(d::PB.AbstractProtoDecoder, ::Type{<:var"Message.Positions"})
    offsets = PB.BufferedVector{var"Message.Position"}()
    while !PB.message_done(d)
        field_number, wire_type = PB.decode_tag(d)
        if field_number == 1
            PB.decode!(d, offsets)
        else
            PB.skip(d, wire_type)
        end
    end
    return var"Message.Positions"(offsets[])
end

function PB.encode(e::PB.AbstractProtoEncoder, x::var"Message.Positions")
    initpos = position(e.io)
    !isempty(x.offsets) && PB.encode(e, 1, x.offsets)
    return position(e.io) - initpos
end
function PB._encoded_size(x::var"Message.Positions")
    encoded_size = 0
    !isempty(x.offsets) && (encoded_size += PB._encoded_size(x.offsets, 1))
    return encoded_size
end

struct var"Message.MachineState"
    gantryPosition::Union{Nothing,var"Message.Position"}
    isHeadDown::Bool
    isVacuumEngaged::Bool
    isComponentPicked::Bool
end
PB.default_values(::Type{var"Message.MachineState"}) = (;gantryPosition = nothing, isHeadDown = false, isVacuumEngaged = false, isComponentPicked = false)
PB.field_numbers(::Type{var"Message.MachineState"}) = (;gantryPosition = 1, isHeadDown = 2, isVacuumEngaged = 3, isComponentPicked = 4)

function PB.decode(d::PB.AbstractProtoDecoder, ::Type{<:var"Message.MachineState"})
    gantryPosition = Ref{Union{Nothing,var"Message.Position"}}(nothing)
    isHeadDown = false
    isVacuumEngaged = false
    isComponentPicked = false
    while !PB.message_done(d)
        field_number, wire_type = PB.decode_tag(d)
        if field_number == 1
            PB.decode!(d, gantryPosition)
        elseif field_number == 2
            isHeadDown = PB.decode(d, Bool)
        elseif field_number == 3
            isVacuumEngaged = PB.decode(d, Bool)
        elseif field_number == 4
            isComponentPicked = PB.decode(d, Bool)
        else
            PB.skip(d, wire_type)
        end
    end
    return var"Message.MachineState"(gantryPosition[], isHeadDown, isVacuumEngaged, isComponentPicked)
end

function PB.encode(e::PB.AbstractProtoEncoder, x::var"Message.MachineState")
    initpos = position(e.io)
    !isnothing(x.gantryPosition) && PB.encode(e, 1, x.gantryPosition)
    x.isHeadDown != false && PB.encode(e, 2, x.isHeadDown)
    x.isVacuumEngaged != false && PB.encode(e, 3, x.isVacuumEngaged)
    x.isComponentPicked != false && PB.encode(e, 4, x.isComponentPicked)
    return position(e.io) - initpos
end
function PB._encoded_size(x::var"Message.MachineState")
    encoded_size = 0
    !isnothing(x.gantryPosition) && (encoded_size += PB._encoded_size(x.gantryPosition, 1))
    x.isHeadDown != false && (encoded_size += PB._encoded_size(x.isHeadDown, 2))
    x.isVacuumEngaged != false && (encoded_size += PB._encoded_size(x.isVacuumEngaged, 3))
    x.isComponentPicked != false && (encoded_size += PB._encoded_size(x.isComponentPicked, 4))
    return encoded_size
end

struct var"Message.Step"
    direction::var"Message.Step.Direction".T
end
PB.default_values(::Type{var"Message.Step"}) = (;direction = var"Message.Step.Direction".INVALID)
PB.field_numbers(::Type{var"Message.Step"}) = (;direction = 1)

function PB.decode(d::PB.AbstractProtoDecoder, ::Type{<:var"Message.Step"})
    direction = var"Message.Step.Direction".INVALID
    while !PB.message_done(d)
        field_number, wire_type = PB.decode_tag(d)
        if field_number == 1
            direction = PB.decode(d, var"Message.Step.Direction".T)
        else
            PB.skip(d, wire_type)
        end
    end
    return var"Message.Step"(direction)
end

function PB.encode(e::PB.AbstractProtoEncoder, x::var"Message.Step")
    initpos = position(e.io)
    x.direction != var"Message.Step.Direction".INVALID && PB.encode(e, 1, x.direction)
    return position(e.io) - initpos
end
function PB._encoded_size(x::var"Message.Step")
    encoded_size = 0
    x.direction != var"Message.Step.Direction".INVALID && (encoded_size += PB._encoded_size(x.direction, 1))
    return encoded_size
end

struct var"Message.Calibration"
    target::Union{Nothing,var"Message.Deltas"}
    real::Union{Nothing,var"Message.Deltas"}
end
PB.default_values(::Type{var"Message.Calibration"}) = (;target = nothing, real = nothing)
PB.field_numbers(::Type{var"Message.Calibration"}) = (;target = 1, real = 2)

function PB.decode(d::PB.AbstractProtoDecoder, ::Type{<:var"Message.Calibration"})
    target = Ref{Union{Nothing,var"Message.Deltas"}}(nothing)
    real = Ref{Union{Nothing,var"Message.Deltas"}}(nothing)
    while !PB.message_done(d)
        field_number, wire_type = PB.decode_tag(d)
        if field_number == 1
            PB.decode!(d, target)
        elseif field_number == 2
            PB.decode!(d, real)
        else
            PB.skip(d, wire_type)
        end
    end
    return var"Message.Calibration"(target[], real[])
end

function PB.encode(e::PB.AbstractProtoEncoder, x::var"Message.Calibration")
    initpos = position(e.io)
    !isnothing(x.target) && PB.encode(e, 1, x.target)
    !isnothing(x.real) && PB.encode(e, 2, x.real)
    return position(e.io) - initpos
end
function PB._encoded_size(x::var"Message.Calibration")
    encoded_size = 0
    !isnothing(x.target) && (encoded_size += PB._encoded_size(x.target, 1))
    !isnothing(x.real) && (encoded_size += PB._encoded_size(x.real, 2))
    return encoded_size
end

struct Message
    tag::var"Message.Tags".T
    payload::Union{Nothing,OneOf{<:Union{var"Message.Deltas",var"Message.Positions",var"Message.Step",var"Message.Calibration",var"Message.HeadOperation",var"Message.MachineState"}}}
end
PB.oneof_field_types(::Type{Message}) = (;
    payload = (;deltas=var"Message.Deltas", positions=var"Message.Positions", step=var"Message.Step", calibration=var"Message.Calibration", headOperation=var"Message.HeadOperation", machineState=var"Message.MachineState"),
)
PB.default_values(::Type{Message}) = (;tag = var"Message.Tags".INVALID, deltas = nothing, positions = nothing, step = nothing, calibration = nothing, headOperation = nothing, machineState = nothing)
PB.field_numbers(::Type{Message}) = (;tag = 1, deltas = 2, positions = 3, step = 4, calibration = 5, headOperation = 6, machineState = 7)

function PB.decode(d::PB.AbstractProtoDecoder, ::Type{<:Message})
    tag = var"Message.Tags".INVALID
    payload = nothing
    while !PB.message_done(d)
        field_number, wire_type = PB.decode_tag(d)
        if field_number == 1
            tag = PB.decode(d, var"Message.Tags".T)
        elseif field_number == 2
            payload = OneOf(:deltas, PB.decode(d, Ref{var"Message.Deltas"}))
        elseif field_number == 3
            payload = OneOf(:positions, PB.decode(d, Ref{var"Message.Positions"}))
        elseif field_number == 4
            payload = OneOf(:step, PB.decode(d, Ref{var"Message.Step"}))
        elseif field_number == 5
            payload = OneOf(:calibration, PB.decode(d, Ref{var"Message.Calibration"}))
        elseif field_number == 6
            payload = OneOf(:headOperation, PB.decode(d, Ref{var"Message.HeadOperation"}))
        elseif field_number == 7
            payload = OneOf(:machineState, PB.decode(d, Ref{var"Message.MachineState"}))
        else
            PB.skip(d, wire_type)
        end
    end
    return Message(tag, payload)
end

function PB.encode(e::PB.AbstractProtoEncoder, x::Message)
    initpos = position(e.io)
    x.tag != var"Message.Tags".INVALID && PB.encode(e, 1, x.tag)
    if isnothing(x.payload);
    elseif x.payload.name === :deltas
        PB.encode(e, 2, x.payload[]::var"Message.Deltas")
    elseif x.payload.name === :positions
        PB.encode(e, 3, x.payload[]::var"Message.Positions")
    elseif x.payload.name === :step
        PB.encode(e, 4, x.payload[]::var"Message.Step")
    elseif x.payload.name === :calibration
        PB.encode(e, 5, x.payload[]::var"Message.Calibration")
    elseif x.payload.name === :headOperation
        PB.encode(e, 6, x.payload[]::var"Message.HeadOperation")
    elseif x.payload.name === :machineState
        PB.encode(e, 7, x.payload[]::var"Message.MachineState")
    end
    return position(e.io) - initpos
end
function PB._encoded_size(x::Message)
    encoded_size = 0
    x.tag != var"Message.Tags".INVALID && (encoded_size += PB._encoded_size(x.tag, 1))
    if isnothing(x.payload);
    elseif x.payload.name === :deltas
        encoded_size += PB._encoded_size(x.payload[]::var"Message.Deltas", 2)
    elseif x.payload.name === :positions
        encoded_size += PB._encoded_size(x.payload[]::var"Message.Positions", 3)
    elseif x.payload.name === :step
        encoded_size += PB._encoded_size(x.payload[]::var"Message.Step", 4)
    elseif x.payload.name === :calibration
        encoded_size += PB._encoded_size(x.payload[]::var"Message.Calibration", 5)
    elseif x.payload.name === :headOperation
        encoded_size += PB._encoded_size(x.payload[]::var"Message.HeadOperation", 6)
    elseif x.payload.name === :machineState
        encoded_size += PB._encoded_size(x.payload[]::var"Message.MachineState", 7)
    end
    return encoded_size
end
