
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBCard
  }
  from 'mdb-react-ui-kit';
function Login () {
    return (
        <MDBCard style={{height:'70%', width:'70%', overflow: 'scroll'}}>

        <MDBContainer className="p-1 my-5 d-flex flex-column" style={{minWidth: '200px', width: '70%', maxWidth: '500px'}}>
    
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
    
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div>
            <a href="!#">Forgot password?</a>
            <p></p>
          <MDBBtn className="mb-4">Sign in</MDBBtn>
    
          <div className="text-center">
       
            
    
            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
    
            </div>
          </div>
    
        </MDBContainer>
        </MDBCard>
      );
}
//     <Row>
//         <Col>
//             <FormLabel for="inputPassword6">
//             </FormLabel>
//         </Col>
//   <Col>
//         <FormControl type="password" id="inputPassword6" aria-labelledby="passwordHelpInline"/>    
//   </Col>
//   <Col>
//   <FormText id="passwordHelpInline">
//       Must be 8-20 characters long.
//   </FormText>
//   </Col>
//     </Row>

export default Login;