import { PORT, DB_ADDRESS, JWT_KEY } from '../movie-server.config';

describe('constants should exsist', () => {
  it('should PORT be defined', function () {
    expect.hasAssertions();
    expect(PORT).toBeDefined();
  });

  it('should DB_ADDRESS be defined', function () {
    expect.hasAssertions();
    expect(DB_ADDRESS).toBeDefined();
  });

  it('should JWT_KEY be defined', function () {
    expect.hasAssertions();
    expect(JWT_KEY).toBeDefined();
  });
});

describe('values should import correctly or interchanged with defaults', () => {
  it('should PORT be imported from .env.development', function () {
    expect.hasAssertions();
    expect(PORT).toEqual('7000');
  });

  it('should DB_ADDRESS be imported from .env.development', function () {
    expect.hasAssertions();
    expect(DB_ADDRESS).toEqual('mongodb://localhost:27017/moviesdb-dev');
  });

  it('should JWT_KEY has default value', function () {
    expect.hasAssertions();
    expect(JWT_KEY).toEqual(
      'fe0efc9c0c561d176ba8908df811811b7a061b851e8c9c87fb5609f21268f978',
    );
  });
});
