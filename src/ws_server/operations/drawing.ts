// await mouse.pressButton(Button.LEFT);
import { mouse, left, right, up, down, straightTo, Button } from '../../../node_modules/@nut-tree/nut-js/dist/index';

const drow = (commandFullName: string, args: string[]) => {
  const argX = Number(args[0]);
  const argY = Number(args[1]);
  switch(commandFullName) {
    case 'draw_rectangle':
      return (async () => {
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(argY));
        await mouse.move(down(argX));
        await mouse.move(left(argY));
        await mouse.move(up(argX));
        await mouse.releaseButton(Button.LEFT);
      })();
    case 'draw_square':
      return (async () => {
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(argX));
        await mouse.move(down(argX));
        await mouse.move(left(argX));
        await mouse.move(up(argX));
        await mouse.releaseButton(Button.LEFT);
      })();
    case 'draw_circle':
      return (async () => {
        const { x, y } = await mouse.getPosition();
        const position = 360;
        mouse.config.mouseSpeed = 4000;
        await mouse.pressButton(Button.LEFT);
        for (let i = 0; i <= position; i += 1) {
          const r = (Math.PI / 180) * i;
          const xPoint = x - argX + argX * Math.cos(r);
          const yPoint = y + argX * Math.sin(r);
          
          await mouse.move(straightTo({ x: xPoint, y: yPoint }));
        }
        await mouse.releaseButton(Button.LEFT);
        mouse.config.mouseSpeed = 2000;
      })();
    default:
      return;
  }
};

export default drow;
