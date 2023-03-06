const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2023-02-20 13:05:09');
    expect(format_date(date)).toBe('2/20/2023');
});