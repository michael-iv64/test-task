import React from 'react';
import './Task.css'
const Task = ({ task }) => {
    return (
        <div className='card'>
            <table className="table">
                    <tbody>
                        <tr>
                        <td>
                            {task.status === 10 || task.status === 11
                                ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                </svg>}
                        </td>
                        <td className='fromText'>{task.text}</td>
                        <td>{task.username}</td>
                        <td>{task.email}</td>
                        </tr>
                    </tbody>
                </table>
        </div >

    )
}
export default Task;