import styled from 'styled-components';

interface ContainerProps {
    color : string;
};
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    margin: 20px;
    background-color: ${(props: ContainerProps) => `#${props.color}`};
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
        box-shadow: ${(props: ContainerProps) => `0px 7px 13px -5px #${props.color}`};
        -webkit-box-shadow: ${(props: ContainerProps) => `0px 7px 13px -5px #${props.color}`};
        transform: translateY(-5px);
    }
`;

interface ImageProps {
    url : string;
};
export const Image = styled.div`
    background: ${(props: ImageProps) => `url(${props.url}) no-repeat center center`};
    background-size: cover;
    height: 250px;
    border-radius: 10px 10px 0px 0px;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const Name = styled.div`
    color: white;
`;