import React,{useRef} from 'react';

const Hook3 = () => {
    const Ref = useRef()
    return (
        <div>
            <input type="text" ref={Ref} onChange={() => console.log(Ref.current.value)}/>
            <button onClick={() => console.log(Ref.current.value)}>d带的</button>
        </div>
    );
}

export default Hook3;
