import { login } from './login'; // Importe a função que você deseja testar
import { globalVar } from '../../global/global-var';

describe('login function', () => {
  it('should seed the correct email and password', async ()=>{
    const password = '12345';
    const email = 'test@gmail.com'
    const result = await login({password, email})
    expect(result).not.toBeTruthy();

  })
});
