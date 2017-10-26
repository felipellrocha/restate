import { setIn } from './restate';

const data = {
  bruce: {
    lastName: 'Wayne',
  },
}
setIn(['bruce', 'lastName'], 'Wayne')(data)
