import React, { Component } from 'react';
import { Container, Image, Name, CardInfo } from './CardStyled';

interface Props {
    color: string;
    name: string;
    image: string;
};

export default class Card extends Component<Props> {

    render(): Object {
        return (
            <Container color={this.props.color}>
                <Image url={this.props.image}/>
                <CardInfo>
                    <Name>{ this.props.name }</Name>
                </CardInfo>
            </Container>
        );
    };
};
