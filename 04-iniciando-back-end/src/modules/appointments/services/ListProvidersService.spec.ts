import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach (() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(fakeUsersRepository, fakeCacheProvider);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Aniele Jesus',
      email: 'aniele@exemplo.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Aniele Trê',
      email: 'anieletre@exemplo.com',
      password: '123456',
    });

    const loggeduser = await fakeUsersRepository.create({
      name: 'Aniele Qua',
      email: 'anielequa@exemplo.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggeduser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
