import React, { FC, useState } from 'react'

type CategoriesProps = {
    categories: string[]
    setCategory: Function
}

const Categories:FC<CategoriesProps> = ({categories, setCategory}) => {
    const [active, setActive] = useState<number | null>(null)
    const [cat, setCat] = useState<string[]>([...categories, 'random'])
    
    const onClickCategory = (i:number, category:string) => {
      setActive(i)
      setCategory(category)
    }


    
    return (
    <div className='flex items-center flex-col'>
        <h2 className='flex justify-center items-center text-[#1C1C39] text-[50px] mb-[60px] font-extrabold'>Categories</h2>
        <ul className='flex flex-wrap items-center justify-center'>
        {
            cat.map((category,i) => <li className={active === i ? 'bg-[#422ED4] text-[16px] text-white hover:bg-[#422ED4] hover:text-white hover:cursor-pointer ease-in-out w-[170px] h-[57px] flex justify-center mb-[20px] items-center rounded-[20px] mr-[20px]' : 'w-[170px] h-[57px] flex justify-center mb-[20px] items-center rounded-[20px] mr-[20px] bg-white text-[#1C1C39] text-[16px] hover:bg-[#422ED4] hover:text-white hover:cursor-pointer ease-in-out'} key={i} onClick={()=>onClickCategory(i, category)}>{category}</li>)
        }
        </ul>
    </div>
  )
}

export default Categories