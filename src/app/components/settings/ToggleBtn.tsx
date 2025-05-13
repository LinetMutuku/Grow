import {useState} from 'react'

export default function ToggleBtn({enabled}:{enabled:boolean}) {
  const [state, setState] = useState(enabled)

  return (
    <div
     onClick={()=>setState(!state)}
      className={`${state ? 'justify-end bg-[#27AE60]':'justify-start bg-white'} max-w-[55px] w-full flex items-center h-[27px] rounded-2xl p-1  shadow-sm`}>
      <div className={`${state ? 'bg-white': 'bg-[#27AE60]'} w-[19px] h-[19px] rounded-full bg-[#27AE60]`}></div>
    </div>
  )
}
