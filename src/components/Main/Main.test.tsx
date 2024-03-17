import React from 'react';
import { enviar } from "../../functions/Enviar.function";
import { render } from '@testing-library/react';
import { Main } from './Main.component';

test('renders learn react link', () => {
  render(<Main />);
});


// Utilitário para criar um evento de clique simulado
function createMockClickEvent(): React.MouseEvent<HTMLButtonElement, MouseEvent> {
  return {
    preventDefault: jest.fn(),
    target: { value: '' },
    currentTarget: { value: '' },
    type: 'click',
    button: 0
  } as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

test('enviar function alerts the provided email', () => {
  const email = 'test@example.com';
  const password = 'password';
  const event = createMockClickEvent();
  enviar(event, email, password);
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  expect(alertMock).toHaveBeenCalledWith(`Seu email é: ${email}`);
  alertMock.mockRestore();

});

