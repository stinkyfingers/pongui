import React from 'react';
import { createGame } from '../api';
import '../css/field.css';

const paddleWidth = 10;

const Field = () => {
  const ref = React.useRef(null);
  const screenRef = React.useRef(null);
  const [dimensions, setDimensions] = React.useState();
  const [ball, setBall] = React.useState();
  const [paddle, setPaddle] = React.useState();
  const [opponentPaddle, setOpponentPaddle] = React.useState();
  const [id, setId] = React.useState();
  const [ctx, setCtx] = React.useState();
  const [player, setPlayer] = React.useState('');
  const [listener, setListener] = React.useState(false);

  const handleCreateGame = () => {
    createGame({ fieldWidth: dimensions.width, fieldHeight: dimensions.height, player })
      .then(resp => {
        const myPaddle = resp.paddlesMap.find(p => p[0] === player);
        const theirPaddle = resp.paddlesMap.find(p => p[0] !== player);
        setPaddle(myPaddle ? myPaddle[1] : null);
        setOpponentPaddle(theirPaddle ? theirPaddle[1] : null);
        setBall(resp.ball);
        setId(resp.id);
      });
  };

  const handleChange = (e) => {
    setPlayer(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (!paddle) return;
    switch (e.keyCode) {
      case 38:
        if (paddle.yposition - paddle.radius <= 0 ) return paddle;
        setPaddle(paddle => ({ ...paddle, yposition: paddle.yposition - 10 }));
        // TODO stream paddle event
        break;
      case 40:
        if (paddle.yposition + paddle.radius >= dimensions.height ) return paddle;
        setPaddle(paddle => ({ ...paddle, yposition: paddle.yposition + 10 }));
        // TODO stream paddle event
        break;
      default:
        return;
    }
  };

  React.useEffect(() => {
    if (!screenRef.current) return;
    setDimensions({ height: screenRef.current.clientHeight, width: screenRef.current.clientWidth });
  }, [screenRef]);

  React.useEffect(() => {
    if (!ref.current) return;
    setCtx(ref.current.getContext('2d'));
  }, [ref, dimensions])

  React.useEffect(() => {
    if (!ctx || !ball) return;
    ctx.fillStyle = 'black';
    ctx.fillRect(ball.xposition, ball.yposition, ball.radius, ball.radius);
  }, [ball, ctx]);

  React.useEffect(() => {
    if (!ctx || !paddle) return;
    ctx.fillStyle = 'black';
    const xposition = paddle.isleft ? 0 : dimensions.width;
    ctx.clearRect(xposition, 0, paddleWidth, dimensions.height);
    ctx.fillRect(xposition, paddle.yposition - paddle.radius, paddleWidth, paddle.radius * 2);
  }, [paddle, ctx, dimensions]);

  React.useEffect(() => {
    if (!ctx || !opponentPaddle) return;
    ctx.fillStyle = 'black';
    const xposition = opponentPaddle.isleft ? 0 : dimensions.width;
    ctx.clearRect(xposition, 0, paddleWidth, dimensions.height);
    ctx.fillRect(xposition, opponentPaddle.yposition = opponentPaddle.radius, paddleWidth, opponentPaddle.radius * 2);
  }, [opponentPaddle, ctx, dimensions]);

  React.useEffect(() => {
    if (!paddle || listener) return null;
    window.addEventListener('keydown', handleKeyPress);
    setListener(true);
  }, [paddle, listener, handleKeyPress]);

  return <div className='screen' ref={screenRef}>
      <button onClick={handleCreateGame}>Create Game</button>
      <label>Player Name:
        <input name='player' onChange={handleChange} value={player} />
      </label>
      { dimensions ? <canvas className='field' ref={ref} height={dimensions.height} width={dimensions.width}></canvas> : null }
  </div>;
};

export default Field;
