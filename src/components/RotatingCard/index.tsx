import * as React from 'react';
import { useState } from 'react';
import { Card, FrontSide, BackSide, FrontSideStatic} from './styles2';

interface IRotatingCard {
    frontSide: JSX.Element;
    backSide?: JSX.Element;
    hasBackSide: boolean;
    active: boolean;
}

const RotatingCard = ({ frontSide, backSide, hasBackSide, active}: IRotatingCard) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        if (!active) {
            setIsFlipped(!isFlipped);
        }
    }

    if (hasBackSide) {
        return (
            <Card>
                <FrontSide onClick={toggleFlip} active={active} isFlipped={isFlipped}>
                    {frontSide}
                </FrontSide>
                <BackSide onClick={toggleFlip} active={active} isFlipped={isFlipped}>
                    {backSide}
                </BackSide>
            </Card>
        );
    }
    return (
        <Card>
            <FrontSideStatic active={ active }>
                {frontSide}
            </FrontSideStatic>
        </Card>
    );
}

export default RotatingCard;