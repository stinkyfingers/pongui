import { GameParameters, PingRequest } from "./gamepb/game_pb"
import { MessageClient } from "./gamepb/game_grpc_web_pb"

var client = new MessageClient('http://localhost:8080')

export const createGame = ({ fieldWidth, fieldHeight, player }) => {
  return new Promise((res, rej) => {
    const req = new GameParameters();
    req.setFieldwidth(fieldWidth);
    req.setFieldheight(fieldHeight);
    req.setPlayer(player);
    client.createGame(req, null, (err, resp) => {
      if (err) {
        rej(err);
      }
      res(resp.toObject());
    });
  });
};

export const ping = () => {
  return new Promise((res, rej) => {
    const req = new PingRequest();
    req.setPing('foobar');
    client.ping(req, null, (err, resp) => {
      if (err) {
        rej(err);
      }
      res(resp.toObject());
    });
  });
};
