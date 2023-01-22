import mouse from './operations/mouse';

const getCommand = (data: any) => {
  console.log(data.toString());
  const transformData = data.toString();
  const dataArr = transformData.split(' ');
  const [command, ...last] = dataArr;
  const indexValue = command.indexOf('_');
  const commandName = command.slice(0, indexValue);
  const commandFullName = command;
  return { commandName, commandFullName, args: last };
}

const takeAction = async (data: any) => {
  const command = getCommand(data);
  const { commandName, commandFullName, args } = command;
  try {
    switch(commandName) {
      case 'mouse':
        return await mouse(commandFullName, args);
    }
  } catch {
    console.log('что-то пошло не так...');
  }
}

export default takeAction;