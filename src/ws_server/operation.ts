import mouse from './operations/mouse';
import draw from './operations/drawing';
// import prnt from './operations/prnt';

const getCommand = (data: Buffer) => {
  const transformData = data.toString();
  const dataArr = transformData.split(' ');
  const [command, ...last] = dataArr;
  const indexValue = command.indexOf('_');
  const commandName = command.slice(0, indexValue);
  const commandFullName = command;
  return { commandName, commandFullName, args: last };
}

const takeAction = async (data: Buffer) => {
  const command = getCommand(data);
  const { commandName, commandFullName, args } = command;
  try {
    switch(commandName) {
      case 'mouse':
        return await mouse(commandFullName, args);
      case 'draw':
        return await draw(commandFullName, args);
      // case 'prnt':
        // return await prnt();
    }
  } catch(e) {
    console.log('что-то пошло не так...');
  }
}

export default takeAction;