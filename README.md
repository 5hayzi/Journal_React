# Notes+  

**Notes+** is a web-based note-taking application developed as part of the NeoFlux Front-end Internship program. The project serves as a practical learning experience to train and test interns' skills in front-end development using modern technologies and tools.

---

## Objective  
The primary goal of this project is to build a fully functional notes application where users can **create**, **edit**, **delete**, and manage their journal entries. It introduces key concepts like **state management**, **theme switching** (light/dark mode), and **modern front-end technologies**.

---

## Features  
- **Create and Manage Journals:** Users can create new journal entries, view saved entries, and edit or delete existing ones.
- **Rich Text Formatting:** Supports rich text formatting through a WYSIWYG editor using the Jodit-Editor library.
- **Light/Dark Theme:** A theme toggle allows users to switch between light and dark modes.
- **State Management:** Implemented using Redux for managing global states like theme selection, editor content, and journal data.
- **Search Functionality:** Users can search for specific notes by title or content.
- **Responsive Design:** Fully responsive and optimized for various screen sizes.

---

## Tech Stack  

| **Technology**   | **Purpose**                                                | **Documentation**                                             |
|------------------|------------------------------------------------------------|---------------------------------------------------------------|
| **HTML, CSS, JS**| Core technologies for structure, styling, and interactivity | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) |
| **React JS**     | UI building with reusable components                       | [React Documentation](https://react.dev/learn)               |
| **Node.js**      | Server-side JavaScript for handling requests and responses  | [Node.js Documentation](https://nodejs.org/en/docs/)         |
| **Vite**         | Development tool for fast React setup and hot-reloading     | [Vite Documentation](https://vitejs.dev/guide/)              |
| **Tailwind CSS** | Utility-first CSS framework for styling directly in JSX     | [Tailwind CSS Documentation](https://tailwindcss.com/docs)  |
| **Figma**        | Design and prototyping the app layout                       | [Figma Help Center](https://help.figma.com/hc/en-us)         |
| **React Redux**  | State management across the application                    | [Redux Documentation](https://react-redux.js.org/introduction/getting-started) |
| **Git/GitHub**   | Version control and code sharing                           | [Git Documentation](https://git-scm.com/doc),  [GitHub Docs](https://docs.github.com/en)|
| **Express JS**   | Node.js framework for creating back-end routes              | [Express Documentation](https://expressjs.com/)              |
| **MongoDB**      | NoSQL database for storing user data and journal entries    | [MongoDB Documentation](https://docs.mongodb.com/)           |
| **pnpm**         | Fast package manager for efficient dependency management    | [pnpm Documentation](https://pnpm.io/)                        |
| **VS Code**      | Code editor with customizable extensions                    | [Visual Studio Code Documentation](https://code.visualstudio.com/docs) |
| **Jodit-Editor** | WYSIWYG editor for formatting journal content               | [Jodit Editor Documentation](https://xdsoft.net/jodit/)       |
| **Moment.js**    | Library for date and timestamp handling                    | [Moment.js Documentation](https://momentjs.com/docs/)        |


---

## Installation and Setup  

1. **Clone the repository**:
    ```bash
    git clone https://github.com/5hayzi/Journal_React.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd Journal_React
    ```

3. **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm add
    ```

4. **Start the development server**:
    ```bash
    npm start 
    # or
    pnpm start
    ```
**Note:**
Since the Back-End and Front-End are seperated on different folders you may need to install/add packages seperately by changing the directory to that folder.
---

## Usage  
- **Create Journal**: Use the "Create Journal" page to add new notes with rich text formatting.
- **View Notes**: View all saved notes on the "View Notes" page, search, or filter entries.
- **Theme Toggle**: Switch between Light/Dark Mode using the theme toggle in the navigation bar.
- **Edit/Delete**: Edit or delete journal entries directly from the notes view page.
- **Profile Management**: Create a profile by signing up or logging in to manage your account.

---

## Images 
<div style="display: flex; flex-position: row; justify-content: space-evenly; margin-bottom: 30px;">
<img src="./App pics/image.png" alt="Homepage" width="500"/>
<img src="./App pics/image-1.png" alt="alt text" width="500"/> 
</div>

<div style="display: flex; flex-position: row; justify-content: space-evenly; margin-bottom: 30px;">
<img src="./App pics/image-2.png" alt="alt text" width="210" height="400"/> 
<img src="./App pics/image-3.png" alt="alt text" width="210" height="400"/> 
</div>

<div style="display: flex; flex-position: row; justify-content: space-evenly; margin-bottom: 30px;">
<img src="./App pics/image-4.png" alt="alt text" width="500"/>
<img src="./App pics/image-5.png" alt="alt text" width="500"/> 
</div>

<div style="display: flex; flex-position: row; justify-content: space-evenly; margin-bottom: 30px;">
<img src="./App pics/image-6.png" alt="alt text" width="210" height="400"/> 
<img src="./App pics/image-7.png" alt="alt text" width="700"/> 
</div>

<div style="display: flex; flex-position: row; justify-content: space-evenly; margin-bottom: 30px;">
<img src="./App pics/image-8.png" alt="alt text" width="500"/> 
<img src="./App pics/image-9.png" alt="alt text" width="500"/> 
</div>

---

## Contributions  
Contributions are welcome! Feel free to:
- Fork the repository
- Submit issues
- Create pull requests

---

## License  
This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---
