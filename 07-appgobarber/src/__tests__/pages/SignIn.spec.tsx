import React from 'react';
import { render } from 'react-native-testing-library';

import SingIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('SignIn page', () => {
  it('should contains email/password inputs', () => {
    const { getByPlaceholder } = render(<SingIn />);

    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});
