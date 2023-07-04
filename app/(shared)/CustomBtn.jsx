import React from 'react'
import Link from 'next/link'

const CustomBtn = ({ styles, text, link }) => {
    return (
        <Link href={link} className={`${styles} w-[152px] h-[56px] rounded-lg uppercase font-medium text-[0.938rem] tracking-[1px] flex items-center justify-center`}>
            {text}
        </Link>
    )
}

export default CustomBtn