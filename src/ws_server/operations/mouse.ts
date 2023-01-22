import { mouse, left, right, up, down, Point } from '../../../node_modules/@nut-tree/nut-js/dist/index';

const mouseMove = (commandFullName: string, args: number[]) => {
  const arg = Number(args[0]);
  switch(commandFullName) {
    case 'mouse_up':
      return (async () => {
        await mouse.move(up(arg));
      })();
    case 'mouse_down':
      return (async () => {
        await mouse.move(down(arg));
      })();
    case 'mouse_left':
      return (async () => {
        await mouse.move(left(arg));
      })();
    case 'mouse_right':
      return (async () => {
        await mouse.move(right(arg));
      })();
    case  'mouse_position':
      return (async () => {
        const target = new Point(0, 0);
        await mouse.setPosition(target);
      })();
    default:
      return;
  }
};

export default mouseMove;
