import Button from '../UI/Button'

export default function Delete() {
  return (
    <>
    <span className="text-3xl font-semibold mb-7 dark:text-[#dddddd]">Delete</span>

    <span className="text-lg font-medium dark:text-[#dddddd]">This option will permenantly delete all existing diaries.</span>
    <Button className="text-lg font-medium
          bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300
    ">Delete All dairy</Button>
    <span className="text-lg font-medium mt-8 dark:text-[#dddddd]">This option will permenantly delete user account.</span>
    <Button className="text-lg font-medium
          bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300
    ">Delete User Account</Button>
    </>
  )
}
