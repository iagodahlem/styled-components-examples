import logo from './logo.svg';
import './App.css';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import css from '@styled-system/css'
import theme from './theme'

const Box = styled.div``

const Link = ({ size, ...props }) => (
  <Box
    css={css({
      height: size === 'large' ? '30px' : '20px',
    })}
    {...props}
  />
)

const Input = styled.input`
  width: 60px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.red};

  ${(props) => props.size === 'large' && `height: 52px;`}

  ${(props) => { console.log(props)}}
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.white};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="App">
        <Input
          name='age'
          placeholder='sua idade'
        />
        <Input
          width=''
          size='large'
          name='age'
          placeholder='sua idade'
          css={css({
            padding: 3,
            backgroundColor: 'gray'
          })}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
