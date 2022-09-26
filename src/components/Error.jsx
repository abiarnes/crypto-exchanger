import styled from "@emotion/styled";

const Text = styled.div`
    background-color: #ca534d;
    color: #dedada;
    border-radius: 3px;
    padding: 15px;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
    return (
        <Text>
            {children}
        </Text>
    );
}
 
export default Error;