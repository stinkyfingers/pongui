/**
 * @fileoverview gRPC-Web generated client stub for game
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.game = require('./game_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.game.MessageClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.game.MessagePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.game.PingRequest,
 *   !proto.game.PingResponse>}
 */
const methodDescriptor_Message_Ping = new grpc.web.MethodDescriptor(
  '/game.Message/Ping',
  grpc.web.MethodType.UNARY,
  proto.game.PingRequest,
  proto.game.PingResponse,
  /**
   * @param {!proto.game.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.game.PingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.game.PingRequest,
 *   !proto.game.PingResponse>}
 */
const methodInfo_Message_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.game.PingResponse,
  /**
   * @param {!proto.game.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.game.PingResponse.deserializeBinary
);


/**
 * @param {!proto.game.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.game.PingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.game.PingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.game.MessageClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/game.Message/Ping',
      request,
      metadata || {},
      methodDescriptor_Message_Ping,
      callback);
};


/**
 * @param {!proto.game.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.game.PingResponse>}
 *     Promise that resolves to the response
 */
proto.game.MessagePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/game.Message/Ping',
      request,
      metadata || {},
      methodDescriptor_Message_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.game.GameParameters,
 *   !proto.game.Game>}
 */
const methodDescriptor_Message_CreateGame = new grpc.web.MethodDescriptor(
  '/game.Message/CreateGame',
  grpc.web.MethodType.UNARY,
  proto.game.GameParameters,
  proto.game.Game,
  /**
   * @param {!proto.game.GameParameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.game.Game.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.game.GameParameters,
 *   !proto.game.Game>}
 */
const methodInfo_Message_CreateGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.game.Game,
  /**
   * @param {!proto.game.GameParameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.game.Game.deserializeBinary
);


/**
 * @param {!proto.game.GameParameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.game.Game)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.game.Game>|undefined}
 *     The XHR Node Readable Stream
 */
proto.game.MessageClient.prototype.createGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/game.Message/CreateGame',
      request,
      metadata || {},
      methodDescriptor_Message_CreateGame,
      callback);
};


/**
 * @param {!proto.game.GameParameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.game.Game>}
 *     Promise that resolves to the response
 */
proto.game.MessagePromiseClient.prototype.createGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/game.Message/CreateGame',
      request,
      metadata || {},
      methodDescriptor_Message_CreateGame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.game.GameParameters,
 *   !proto.game.Game>}
 */
const methodDescriptor_Message_JoinGame = new grpc.web.MethodDescriptor(
  '/game.Message/JoinGame',
  grpc.web.MethodType.UNARY,
  proto.game.GameParameters,
  proto.game.Game,
  /**
   * @param {!proto.game.GameParameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.game.Game.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.game.GameParameters,
 *   !proto.game.Game>}
 */
const methodInfo_Message_JoinGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.game.Game,
  /**
   * @param {!proto.game.GameParameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.game.Game.deserializeBinary
);


/**
 * @param {!proto.game.GameParameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.game.Game)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.game.Game>|undefined}
 *     The XHR Node Readable Stream
 */
proto.game.MessageClient.prototype.joinGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/game.Message/JoinGame',
      request,
      metadata || {},
      methodDescriptor_Message_JoinGame,
      callback);
};


/**
 * @param {!proto.game.GameParameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.game.Game>}
 *     Promise that resolves to the response
 */
proto.game.MessagePromiseClient.prototype.joinGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/game.Message/JoinGame',
      request,
      metadata || {},
      methodDescriptor_Message_JoinGame);
};


module.exports = proto.game;

