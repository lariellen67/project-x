import styled from 'styled-components'

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

  svg {
    margin-right: 10px;
  }
`
export const Loading = styled.div`
  color: ${colors.GREY_ONE};
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${colors.PRIMARY};
    font-size: 16px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    width: 120px;
    border-radius: 50px;
    margin-top:20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: ${colors.GREY_THREE};
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border: 1px solid ${colors.GREY_TWO};
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;

  li{
    display: flex;
    padding: 15px 10px;
    border-top: 1px solid ${colors.GREY_TWO};
    border-radius: 4px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid ${colors.GREY_TWO};
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: ${colors.GREY_FIVE};

        &:hover {
          color:${colors.PRIMARY}
        }
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: ${colors.GREY_THREE}
    }
  }
`
