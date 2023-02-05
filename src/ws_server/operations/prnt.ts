import { mouse, Region, screen } from '../../../node_modules/@nut-tree/nut-js/dist/index';
import Jimp from 'jimp';

const prnt = async () => {
  const { x, y } = await mouse.getPosition();

  const expectedRegion = new Region(
    x - 100 >= 0 ? x - 100 : 0,
    y - 100 >= 0 ? y - 100 : 0,
    200,
    200
  );

  await screen.highlight(expectedRegion);

  const expectedImageBGR = await screen.grabRegion(expectedRegion);
  const expectedImageRGB = await expectedImageBGR.toRGB();

  const image = new Jimp(expectedImageRGB);
  const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

  return buffer.toString('base64');
}

export default prnt;
