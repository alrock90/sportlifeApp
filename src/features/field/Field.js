import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styles from './Field.module.css';
import { changePositionPlayer, selectPositions } from './fieldSlice'
import { FaTshirt } from "react-icons/fa";




export function Field() {
    const dispatch = useDispatch();
    const positions = useSelector(selectPositions);
    const parentElement = document.getElementById('parent');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [playerPick, setPlayerPick] = useState(null);
    const fontSizeTshirt = 46;

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
            const mouseX = ((event.clientX - fontSizeTshirt / 2 - svgRect.left) / svgRect.width) * 100; // Convertir a porcentaje
            const mouseY = ((event.clientY - fontSizeTshirt / 2 - svgRect.top) / svgRect.height) * 100; // Convertir a porcentaje

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

    // <div className={Styles.fieldbox}>
    return (
        /* ORIGINAL SOLO CON CIRCULO
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
                                   //cx={(isMouseDown && playerPick === index) ? mousePos.x : position[0]}
                                   //cy={(isMouseDown && playerPick === index) ? mousePos.y : position[1]}
                                   style={{
                                       transform: `translate(${(isMouseDown && playerPick === index) ? mousePos.x : position[0]}%, ${(isMouseDown && playerPick === index) ? mousePos.y : position[1]}%)`
                                   }}
                               />
       
                           )
                       })}
                   </svg>
       */
        //CON CAMISETA Y TEXTO
        <svg className={Styles.playerField} id="parent" >
            <image href='https://i.pinimg.com/originals/f7/5c/cb/f75ccb7397dfa9d17136fe6b27c5f176.png' x="0" y="0" width="100%" height="100%" />


            {positions.map((position, index) => {
                return (
                    <g
                        className={Styles.player}
                        key={index}
                        style={{
                            transform: `translate(${(isMouseDown && playerPick === index) ? mousePos.x : position[0]}%, ${(isMouseDown && playerPick === index) ? mousePos.y : position[1]}%)`
                        }}>
                        <FaTshirt
                            className={Styles.FaTshirtTest}
                            key={index}
                            style={{ fontSize: fontSizeTshirt }}
                            //{...playerCircle(position[0], position[1])}
                            onMouseDown={() => handleMouseDown(index)}
                            onMouseUp={handleMouseUp}
                            onTouchStart={() => handleMouseDown(index)}
                            onTouchEnd={handleMouseDown}
                        //cx={(isMouseDown && playerPick === index) ? mousePos.x : position[0]}
                        //cy={(isMouseDown && playerPick === index) ? mousePos.y : position[1]}
                        />
                        <text
                            x={fontSizeTshirt / 2}
                            y={fontSizeTshirt * 1.2} // Ajustar la posición vertical para que esté debajo de la camiseta
                            textAnchor="middle" // Alinear el texto en el centro
                            fontSize="12" // Ajustar el tamaño de la fuente según tus necesidades
                            fill="black" // Ajustar el color del texto
                        >
                            test
                        </text>

                        <text
                            x={fontSizeTshirt / 2}
                            y={fontSizeTshirt/2} // Ajustar la posición vertical para que esté debajo de la camiseta
                            textAnchor="middle" // Alinear el texto en el centro
                            fontSize="12" // Ajustar el tamaño de la fuente según tus necesidades
                            fill="black" // Ajustar el color del texto
                        >
                            10
                        </text>

                    </g>

                )
            })}
        </svg>

        //FIN CON CAMISETA Y TEXTO
        /* CON CARA DE JUGADOR
       <svg className={Styles.playerField} id="parent" >
       <image href='https://i.pinimg.com/originals/f7/5c/cb/f75ccb7397dfa9d17136fe6b27c5f176.png' x="0" y="0" width="100%" height="100%" />
       {positions.map((position, index) => {
           return (
               <g
                   className={Styles.player}
                   key={index}
                   style={{
                       transform: `translate(${(isMouseDown && playerPick === index) ? mousePos.x : position[0]}%, ${(isMouseDown && playerPick === index) ? mousePos.y : position[1]}%)`
                   }}>
                   <image
                       href='data:image/jpeg;base64,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'
                       width={fontSizeTshirt} height={fontSizeTshirt}                 
                       className={Styles.FaTshirtTest}
                       key={index}
                       style={{ fontSize: fontSizeTshirt }}
                       //{...playerCircle(position[0], position[1])}
                       onMouseDown={() => handleMouseDown(index)}
                       onMouseUp={handleMouseUp}
                       onTouchStart={() => handleMouseDown(index)}
                       onTouchEnd={handleMouseDown}
                   //cx={(isMouseDown && playerPick === index) ? mousePos.x : position[0]}
                   //cy={(isMouseDown && playerPick === index) ? mousePos.y : position[1]}
                   />
                   <text
                       x={fontSizeTshirt/2}
                       y={fontSizeTshirt*1.2} // Ajustar la posición vertical para que esté debajo de la camiseta
                       textAnchor="middle" // Alinear el texto en el centro
                       fontSize="12" // Ajustar el tamaño de la fuente según tus necesidades
                       fill="black" // Ajustar el color del texto
                   >
                       test
                   </text>
               </g>
       
           )
       })}
       </svg>
       */ // FIN CON CARA DE JUGADOR

        //  </div>
    );
}