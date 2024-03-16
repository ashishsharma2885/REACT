import React from 'react'

const Nav = () => {
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
        <a className="py-3 px-5 border rounded border-blue-200 text-blue-300" href="/create">Add new Product</a>
        <hr className="my-3 w-[80]%"/>
        <h1 className="text-2xl mb-3 w-[80%]">Category</h1>
        <ul className="w-[80%]">
        <li className="flex items-center mb-3">
        <span className="rounded-full mr-2 w-5 h-5 bg-blue-100"></span>
        cat 1
       </li>

       <li className="flex items-center mb-3">
        <span className="rounded-full mr-2 w-5 h-5 bg-red-100"></span>
        cat 1
       </li>

       <li className="flex items-center mb-3">
        <span className="rounded-full mr-2 w-5 h-5 bg-green-100"></span>
        cat 1
       </li>

        </ul>
      </nav>
  )
}

export default Nav
