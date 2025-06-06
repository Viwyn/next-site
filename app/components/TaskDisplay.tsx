import React from 'react'
import { Task } from '@/types'

const headers = [
    {key: 'task', value: 'Task'},
    {key: 'team', value: 'Team'},
    {key: 'status', value: 'Status'}
]

const rowClass = 'py-2 px-1 text-left border-2 border-rose-400'

const TaskDisplay = ({ tasks }: { tasks: Task[] }) => {
    return (
        <div className='mb-5 max-w-[1000px] min-w-[700px]'>
            <table className='min-w-full border-rose-700 border-5'>
                <thead>
                    <tr className='divide-x-4 divide-rose-700 border-b-rose-700 border-b-4 bg-rose-900'>
                        {headers.map((header) => (
                            <th 
                            key={header.key} 
                            className={`py-2 ${header.key === 'task' ? 'w-full' : ''} ${header.key === 'team' ? 'min-w-60' : ''} ${header.key === 'status' ? 'min-w-40' : ''}`} >
                                {header.value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((row: Task) => (
                        <tr key={row.id}>
                            <td className={rowClass}>
                                {row.title}
                            </td>
                            <td className={rowClass}>
                                {row.team.length > 0 ? row.team.join(', ') : 'N/A'}
                            </td>
                            <td className={rowClass}>
                                {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskDisplay