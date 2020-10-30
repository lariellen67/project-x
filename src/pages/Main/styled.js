import styled, { keyframes, css } from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
  max-width: 700px;
  background-color: ${colors.GREY_ONE};
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`

export const Title = styled.h1`
  color: ${colors.GREY_SIX};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${colors.GREY_TWO};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`

export const SubmitButton = styled.button.attrs(props => ({
  ...props,
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: ${colors.PRIMARY};
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props => props.loading && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}

`
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  font-family: Arial, Helvetica, sans-serif;

  li{
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.GREY_TWO};
  }

  a {
    color: ${colors.PRIMARY};
    text-decoration: none;
  }
`
