import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styles from './Field.module.css';
import { changePositionPlayer, selectPositions } from './fieldSlice'





export function Field() {
    const dispatch = useDispatch();
    const positions = useSelector(selectPositions);
    const parentElement = document.getElementById('parent');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [playerPick, setPlayerPick] = useState(null);


    const playerCircle = (x, y) => {
        return {
           // cx: x, // Coordenada x del centro
           // cy: y, // Coordenada y del centro
           
            r: 15,  // Radio del círculo
            fill: 'blue', // Color de relleno
            stroke: 'black', // Color del borde
            strokeWidth: 2, // Ancho del borde
        }
    }

    const updateMousePosition = event => {
       /* if (isMouseDown && playerPick !== null) {
            const svgRect = parentElement.getBoundingClientRect();
            const mouseX = event.clientX - svgRect.left;
            const mouseY = event.clientY - svgRect.top;
            //            console.log(`x: ${mouseX}  y: ${mouseY}`)
            setMousePos({ x: mouseX, y: mouseY })
            //dispatch(changePositionPlayer({ index: playerPick, x: mouseX, y: mouseY }));
        }*/


        if (isMouseDown && playerPick !== null) {
            const svgRect = parentElement.getBoundingClientRect();
            const mouseX = ((event.clientX - svgRect.left) / svgRect.width) * 100; // Convertir a porcentaje
            const mouseY = ((event.clientY - svgRect.top) / svgRect.height) * 100; // Convertir a porcentaje
    
            setMousePos({ x: mouseX, y: mouseY });
        }

    }


    useEffect(() => {

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [isMouseDown, playerPick])


    const handleMouseDown = (index) => {
        console.log("mouse down");
        setIsMouseDown(true);
        setPlayerPick(index);
    };

    const handleMouseUp = () => {
        console.log("mouse up");
        dispatch(changePositionPlayer({ index: playerPick, x: mousePos.x, y: mousePos.y }));
        setIsMouseDown(false);
        setPlayerPick(null)


    };
    //style={(isMouseDown && playerPick === index) ? { transform: `translate(${position[0]}px, ${position[1]}px)` } : {}}
    //width="300" height="300"
    return (
       // <div className={Styles.fieldbox}>
            <svg className={Styles.playerField} id="parent" >
                <image href='https://i.pinimg.com/originals/f7/5c/cb/f75ccb7397dfa9d17136fe6b27c5f176.png' x="0" y="0" width="100%" height="100%" />
                {positions.map((position, index) => {
                    return (
                        <circle
                            key={index}
                            className={Styles.player}
                            {...playerCircle(position[0], position[1])}
                            onMouseDown={() => handleMouseDown(index)}
                            onMouseUp={handleMouseUp}
                            onTouchStart={()=> handleMouseDown(index)}
                            onTouchEnd={handleMouseDown}
                            /*cx={(isMouseDown && playerPick === index) ? mousePos.x : position[0]}
                            cy={(isMouseDown && playerPick === index) ? mousePos.y : position[1]}*/
                            style={{
                                transform: `translate(${(isMouseDown && playerPick === index) ? mousePos.x : position[0]}%, ${(isMouseDown && playerPick === index) ? mousePos.y : position[1]}%)`
                            }}
                        />

                    )
                })}
            </svg>



      //  </div>
    );
}