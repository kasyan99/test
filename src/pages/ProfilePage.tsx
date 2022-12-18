import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate, useNavigation, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { Context } from '../App';
import { useAppSelector } from '../hooks/useAppSelector';
import { actions } from '../store/profile-reducer';

interface Props { }

const styles = {
   Prifile: {
      color: 'red',
      background: 'black'
   }
}

const Button = styled.button`
   background: white;
   height: 40px;
   width: 60px;
`

const TomatoButton = styled(Button)`
background: red
`

const Input = styled.input<{ color: string }>`
   color: ${props => props.color};
`

const Checkbox = styled(Input).attrs({ type: 'checkbox' })``

const ThemeBtn = styled.button<{ mode: 'light' | 'dark' }>`
${props => {
      switch (props.mode) {
         case 'light':
            return css`
            background: yellow;
            color: black;
         `
         case 'dark':
            return css`
         background: black;
            color: white;
         `
      }
   }}
`
const rotate = keyframes`
   from{
      transform: rotate(0deg);
   }

   to{
      transform: rotate(360deg);
   }
`
const Rotate = styled.div`
   display: inline-block;
   animation: ${rotate} 2s linear infinite;
`

const ThemeBlock = styled.div<{ theme: 'light' | 'dark' }>`
   background: ${props => props.theme === 'dark' ? 'black' : 'yellow'};
   color: ${props => props.theme === 'dark' ? 'white' : 'black'};
`
function ProfilePage(props: Props) {
   const name = useAppSelector(state => state.profileReducer.name)
   const dispatch = useDispatch()

   const context = useContext(Context)

   const o = {
      f: function () {
         console.log(this);
      },
      //@ts-ignore
      f2: () => console.log(this)

   }

   const location = useLocation()
   const navigate = useNavigate()
   const params = useParams()

   console.log('location', location);
   console.log('navigation', navigate);
   console.log('params', params);

   return (
      <div style={styles.Prifile}>
         Profile for test 2
         <div>name: {name}</div>
         <button onClick={() => o.f()}>this</button>
         <button onClick={() => o.f2()}>this2</button>
         <button onClick={() => navigate(-1)}>back</button>
         <ThemeBlock theme={context.theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repellat?</ThemeBlock>
         <Rotate>rotate 💅🏾</Rotate>
         <ThemeBtn mode={'light'} onClick={() => context.toggleTheme && context.toggleTheme('light')}>light</ThemeBtn>
         <ThemeBtn mode={context.theme} onClick={() => context.toggleTheme && context.toggleTheme('dark')}>dark</ThemeBtn>
         <Checkbox color='green' />
         <Input color='red' defaultValue={'lalalalalal'} />
         <Button onClick={() => { dispatch(actions.setName('test')) }}>test</Button>
         <TomatoButton>tomato</TomatoButton>
         <Routes>
            <Route path='test' element={<div>test</div>} />
         </Routes>
      </div>
   )
}

export default ProfilePage
