import setIn from './index'

describe('setIn', function() {
  beforeEach(() => {
    this.state = {
      bruce: {
        company: "Wayne industries",
        alterego: "batman",
        gears: [
          'utility belt',
          'grapling hook',
        ],
      },
    };
  });

  it('immutably changes data stored in objects', () => {
    const after = setIn(['bruce', 'company'], 'Hidden Batman Lair', this.state);
    expect(after === this.state).toBe(false);
    expect(after.bruce.company).toEqual("Hidden Batman Lair");
  });

  it('immutably changes data stored in arrays', () => {
    const after = setIn(['bruce', 'gears', 0], 'Scary Mask', this.state);
    expect(after === this.state).toBe(false);
    expect(after.bruce.gears[0]).toEqual('Scary Mask');
  });

  it('returns the same object if when trying to mutate we try to set the same value already stored', () => {
    const after = setIn(['bruce', 'company'], 'Wayne industries', this.state);
    expect(after === this.state).toBe(true);
  });
});
