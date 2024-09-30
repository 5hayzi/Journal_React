import Button from "../../UI/Button";
import PropTypes from "prop-types";
import axios from "axios";
import { useSelector } from "react-redux";

export default function DeleteUserNotes({ setDeleteDiary }) {
  const userId = useSelector((state) => state.userData.id);
  const handleDelete = () => {
    axios
      .delete(`/api/notes?userId=${userId}`)
      .then(() => {
        setDeleteDiary(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="absolute w-full h-full backdrop-blur-lg font-montserrat flex justify-center items-center z-20">
      <div className="w-[15%] h-fit flex flex-col justify-between relative p-3 gap-9 bg-slate-300 rounded sm:w-1/2 dark:bg-slate-500">
        <span className="text-lg dark:text-white text-black">
          Are you sure you wanna delete All notes?
        </span>
        <div className="flex flex-row justify-between items-center">
          <Button
            className="
          bg-red-500
          hover:bg-red-600 
          focus:ring-red-300  
          focus-visible:ring-red-300 "
            onClick={() => setDeleteDiary(false)}
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="
          bg-indigo-500
          hover:bg-indigo-600 
          focus:ring-indigo-300  
          focus-visible:ring-indigo-300 "
            onClick={handleDelete}
          >
            <span>Confirm</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

DeleteUserNotes.propTypes = {
  setDeleteDiary: PropTypes.func.isRequired,
};
