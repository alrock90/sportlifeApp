import React, { useEffect, useState, useRef } from "react";
import Styles from "./SideNavBar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import { FaReddit } from "react-icons/fa"

export const SideNavBar = () => {
    const dispatch = useDispatch();

    const nodeRef = useRef(null);
    const nodeRef2 = useRef(null);
    const [navBarActive, setNavBarActive] = useState(false);


    const onClickTopic = () => {
        console.log("OnclickSideBarMenu");
    }

    const displaySideBar = () => {
        return (
            
            <div className={Styles.sideBarContainer}>

                <button onClick={() => onClickTopic()} className={Styles.sideOptionNav}>
                    <div className={Styles.imgtitle}>
                        {<FaReddit className={Styles.icon} />}
                    </div>
                    {navBarActive && <p>display_name</p>}
                    
                </button>
                <button onClick={() => onClickTopic()} className={Styles.sideOptionNav}>
                    <div className={Styles.imgtitle}>
                        {<FaReddit className={Styles.icon} />}
                    </div>
                    {navBarActive && <p>display_name</p>}
                    
                </button>
                <button onClick={() => onClickTopic()} className={Styles.sideOptionNav}>
                    <div className={Styles.imgtitle}>
                        {<FaReddit className={Styles.icon} />}
                    </div>
                    {navBarActive && <p>display_name</p>}
                    
                </button>
                <button onClick={() => onClickTopic()} className={Styles.sideOptionNav}>
                    <div className={Styles.imgtitle}>
                        {<FaReddit className={Styles.icon} />}
                    </div>
                    {navBarActive && <p>display_name</p>}
                    
                </button>
                <button onClick={() => onClickTopic()} className={Styles.sideOptionNav}>
                    <div className={Styles.imgtitle}>
                        {<FaReddit className={Styles.icon} />}
                    </div>
                    {navBarActive && <p>display_name</p>}
                    
                </button>
                <button onClick={() => onClickTopic()} className={Styles.sideOptionNav}>
                    <div className={Styles.imgtitle}>
                        {<FaReddit className={Styles.icon} />}
                    </div>
                    {navBarActive && <p>display_name</p>}
                    
                </button>
                <button onClick={() => onClickTopic()} className={Styles.sideOptionNav}>
                    <div className={Styles.imgtitle}>
                        {<FaReddit className={Styles.icon} />}
                    </div>
                    {navBarActive && <p>display_name</p>}
                    
                </button>
                <button onClick={() => onClickTopic()} className={Styles.sideOptionNav}>
                    <div className={Styles.imgtitle}>
                        {<FaReddit className={Styles.icon} />}
                    </div>
                    {navBarActive && <p>display_name</p>}
                    
                </button>
                

            </div>
        )

    }

    const onClickArrow = () => {
        setNavBarActive(!navBarActive);
        console.log(`estado nav: ${navBarActive}`)
    }


    return (
        <CSSTransition
            in={navBarActive}
            nodeRef={nodeRef2}
            timeout={500}
            classNames={{
                enterDone: Styles.navEnterDone,
                enter: Styles.navEnter,
                enterActive: Styles.navEnterActive,
                exitActive: Styles.navExitActive,
                exit: Styles.navExit,
                exitDone: Styles.navExitDone,
            }}>
            <nav className={Styles.sideNavBar} ref={nodeRef2}>
                <CSSTransition
                    in={navBarActive}
                    nodeRef={nodeRef}
                    timeout={500}
                    classNames={{
                        enterDone: Styles.enterDone,
                        enter: Styles.enter,
                        enterActive: Styles.enterActive,
                        exitActive: Styles.exitActive,
                        exit: Styles.exit,
                        exitDone: Styles.exitDone,
                    }}
                >
                    <button
                        className={Styles.rotate}
                        onClick={() => onClickArrow()}
                        ref={nodeRef}>
                        <MdKeyboardDoubleArrowRight />
                    </button>

                </CSSTransition>
                {displaySideBar()}
            </nav>
        </CSSTransition>
    )


}
