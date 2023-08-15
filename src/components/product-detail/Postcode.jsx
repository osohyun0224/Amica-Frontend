import styled from "styled-components";
import DaumPostcode from 'react-daum-postcode';

const Overlay = styled.div`
    background-color: #00000040;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Postcode = ({ userInfo, setUserInfo, openPost }) => {
    const handleComplete = (data) => {
        const fullAddress = data.address;
        const postalAddress = data.zonecode;
    
        setUserInfo({
          ...userInfo,
          postal: postalAddress,
          baseAddress: fullAddress,
        });
        openPost();
    };

    return (
       <Overlay onClick={openPost}>
         <div>
            <DaumPostcode 
                autoClose={true}
                onComplete={handleComplete}
            />
        </div>
       </Overlay>
    )
}

export default Postcode;