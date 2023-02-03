import React,{PropsWithChildren} from 'react';
import './MyModal.css'


interface Modal{
    visible:boolean
    setVisible:(b:boolean)=>void
}

const MyModal:React.FC<PropsWithChildren<Modal>> = ({visible,setVisible,children}) => {

    const rootClass=['myModal'];

    if (visible) {
        rootClass.push('active')
    }

    return (
        <div className={rootClass.join(' ')} onClick={()=>setVisible(false)}>
            <div className={'myModalContent'} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;