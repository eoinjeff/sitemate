const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });
  it('Handles 02:03', () => {
    const timeInWords = convertTimeToWords('02:03');
    expect(timeInWords).toBe('three past two');
  });
  it('Handles 02:11', () => {
    const timeInWords = convertTimeToWords('02:11');
    expect(timeInWords).toBe('eleven past two');
  });
  it('Handles 02:15', () => {
    const timeInWords = convertTimeToWords('02:15');
    expect(timeInWords).toBe('quarter past two');
  });
  it('Handles 02:30', () => {
    const timeInWords = convertTimeToWords('02:30');
    expect(timeInWords).toBe('half past two');
  });
  it('Handles 02:40', () => {
    const timeInWords = convertTimeToWords('02:40');
    expect(timeInWords).toBe('twenty to three');
  });
  it('Handles 02:45', () => {
    const timeInWords = convertTimeToWords('02:45');
    expect(timeInWords).toBe('quarter to three');
  });
  it('Handles 02:55', () => {
    const timeInWords = convertTimeToWords('02:55');
    expect(timeInWords).toBe('five to three');
  });
});
