import { PlusSmIcon } from '@heroicons/react/solid'

import SkillsSet from './SkillsSet'

export default function HeroBanner() {
    return (
    <div className="text-center
    bg-slate-400 dark:bg-slate-700
    text-white px-5 py-5">
     
    <p className="text-4xl font-poppins font-semibold mt-20">🧠 My Skills</p>
    <p className="text-xl font-poppins mt-5 font-normal">What skills did I achieved until now?</p>
    <SkillsSet />
    </div>
    )
  }