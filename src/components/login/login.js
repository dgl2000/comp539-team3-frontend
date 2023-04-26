// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//     const navigate = useNavigate();

//     const handleSubmit = () => {




//         console.log('here');
//         navigate('/mainPage')
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <p>username</p>
//                 <input type="text" required />

//                 <p>password</p>
//                 <input type="password" required />
//                 <br /> <br />
//                 <input type="submit" value="login" />
//             </form>
//         </div>
//     );
// }

// export default Login;

import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "./team_logo.png";

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src={logo} /> Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='teal' fluid size='large' href='/mainPage'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='#'>Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm

