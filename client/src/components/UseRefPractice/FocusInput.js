import React, { useEffect, useRef } from 'react'

export default function FocusInput() {
    const inputRef = useRef();

    useEffect = (() => {
        inputRef.current.focus()
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}
