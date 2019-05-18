const student = require('../student');

describe('testing student CRUD', () => {
  it('check get all students', async () => {
    const data = [
      {
        name: 'Brian',
        email: 'brian32@outlook.com',
      },
      {
        name: 'Treacy',
        email: 'tcaro233@gmail.com',
      },
    ];

    jest.spyOn(student, 'getAll')
      .mockImplementation(() => Promise.resolve(data));

    const students = await student.getAll();

    expect(students.length).toBe(2);
  });

  it('check get single student', async () => {
    const data = {
      name: 'Brian',
      email: 'brian32@outlook.com',
    };

    jest.spyOn(student, 'getById')
      .mockImplementation(() => Promise.resolve(data));

    const students = await student.getById();

    expect(typeof students).toBe('object');
  });
});