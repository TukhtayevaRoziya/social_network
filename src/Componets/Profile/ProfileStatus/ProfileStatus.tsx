import React, { useState, useEffect, useCallback, ChangeEvent } from 'react'

import moduleName from './ProfileStatus.module.css'

type PropsType = {
    status: string
    upDateStatus: (status: string) => void
}

export const ProfileStatus = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = useCallback(() => {
        setEditMode(true)
    }, [])
    const deactivateEditMode = () => {
        setEditMode(false)
        props.upDateStatus(status)
    }

    const upDateStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>

            {!editMode &&
                <div className={moduleName.spanBody}>
                    <b>Status </b>: <div onDoubleClick={activateEditMode} title={"Double click! and edit Status"}>
                        {props.status || "----"}
                    </div>
                </div>
            }
            {editMode &&
                <div>
                    <input onBlur={deactivateEditMode} onChange={upDateStatusChange} value={status} autoFocus={true} />
                </div>
            }
        </div>
    )
}
