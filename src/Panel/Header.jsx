import React, { useContext } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import HeaderActions from '../HeaderActions'
import FullScreen from './HeaderActions/FullScreen';
import Maximize from './HeaderActions/Maximize';
import DarkMode from './HeaderActions/DarkMode';
import HolismIcon from '../Components/HolismIcon';
import app from 'App'
import { PanelContext } from 'Contexts'
import DevMode from './DevMode';

const Header = ({ onMenuIconClicked }) => {

    const { maximized, setMaximized } = useContext(PanelContext)

    return <>
        <Collapse in={!maximized}>
            <div
                id='header'
                className={
                    "flex items-center p-5 md:p-10 justify-between h-20"
                }
            >
                <div>
                    <div className='bg-white hover:bg-gray-200 transition-colors rounded-md p-1.5 px-2.5 text-gray-600 cursor-pointer dark:bg-slate-500 dark:hover:bg-slate-400 dark:text-gray-300' onClick={onMenuIconClicked}>
                        <HolismIcon icon={MenuIcon} />
                    </div>
                </div>
                <DevMode />
                <div
                    className={
                        'flex items-center justify-center gap-4'
                    }
                >
                    {
                        // items.map((entity, index) => <div onClick={entity.onClick || (() => { })} key={entity.name} className={(index === 0 ? "" : "ml-6 ") + 'text-gray-600 cursor-pointer hover:text-blue-500'}>
                        //     {entity.icon}
                        // </div>)
                        <>
                            <Maximize />
                            <FullScreen />
                            <DarkMode />
                            <HeaderActions />
                        </>
                    }
                </div>
            </div>
        </Collapse>
        <Collapse in={maximized}>
            <div
                id='exitMaximize'
                className="m-auto absolute top-0 right-0 left-0 h-0 flex justify-center"
                onClick={() => setMaximized(false)}
            >
                <ExpandMoreIcon
                    style={{ fontSize: 40 }}
                    className="cursor-pointer z-10"
                />
            </div>
        </Collapse>
    </>
};

export default Header;
