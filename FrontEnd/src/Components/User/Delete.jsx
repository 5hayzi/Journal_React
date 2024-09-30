import Button from "../UI/Button";
import ReactDOM from "react-dom";
import DeleteUserNotes from "./SettingsUI/DeleteUserNotes.jsx";
import { useState } from "react";
import DeleteUserData from "./SettingsUI/DeleteUserData.jsx";

export default function Delete() {
  const [deleteDiary, setDeleteDiary] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  return (
    <>
      <span className="text-3xl font-semibold mb-7 dark:text-[#dddddd]">
        Delete
      </span>

      <span className="text-lg font-medium dark:text-[#dddddd]">
        This option will permenantly delete all existing diaries.
      </span>
      <Button
        className="text-lg font-medium
          bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300"
        onClick={() => setDeleteDiary(!deleteDiary)}
      >
        Delete All dairy
      </Button>
      <span className="text-lg font-medium mt-8 dark:text-[#dddddd]">
        This option will permenantly delete the user`s account and all notes.
      </span>
      <Button
        className="text-lg font-medium
          bg-red-500
            hover:bg-red-600 
            focus:ring-red-300  
            focus-visible:ring-red-300"
        onClick={() => setDeleteUser(!deleteUser)}
      >
        Delete User Account
      </Button>
      {deleteDiary &&
        ReactDOM.createPortal(
          <DeleteUserNotes setDeleteDiary={setDeleteDiary} />,
          document.body
        )}
      {deleteUser &&
        ReactDOM.createPortal(
          <DeleteUserData setDeleteUser={setDeleteUser} />,
          document.body
        )}
    </>
  );
}
