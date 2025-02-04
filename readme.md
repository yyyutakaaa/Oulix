# Oulix - Private Server Homepage

**Oulix** is the source code for my personal homepage for my private home server. The site combines a sleek, responsive design with modern web technologies, allowing me to present my server services (such as Nextcloud) in a visually appealing and functional way.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Customization](#customization)
- [Contact](#contact)
- [License](#license)

## Description

This website serves as the gateway to my private server. The homepage is designed with a modern, minimalist aesthetic, emphasizing usability, security, and a professional look. Users can access services like Nextcloud and get an insight into the philosophy and functionalities behind the server.

## Features

- **Responsive Design:** The site adjusts effortlessly to various screen sizes using Tailwind CSS.
- **Modern Animations:** Subtle fade-in effects and gradient animations provide a dynamic user experience.
- **Clear Navigation:** A fixed, transparent navigation bar with a mobile-friendly burger menu.
- **About Section:** A personal narrative outlining the background and motivation behind the server.
- **Services Overview:** A detailed presentation of available services, including Nextcloud and, in the future, OpenVPN.
- **Contact Form:** A form that requires all fields to be filled out and saves submissions to a file on the server via PHP.
- **Tailwind CSS & FontAwesome:** Utilizes a utility-first CSS framework and icons for a modern, consistent aesthetic.

## Technologies Used

- **HTML5:** For the website structure.
- **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling.
- **JavaScript:** For interactive elements like the burger menu.
- **PHP:** For server-side processing of the contact form and saving submissions.
- **FontAwesome:** For adding icons that enhance the visual appeal.
- **Linux Server:** The site is hosted on my personal Linux server, ensuring complete control and privacy.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/<your-username>/Oulix.git
   cd Oulix
   ```

2. **Configure Your Server:**
   - Ensure your server has a web server (e.g., Apache or Nginx) and PHP support.
   - Copy the files to the appropriate directory on your web server.
   - Set the correct file permissions, especially for `contact_submissions.txt`, so that PHP can write to it:
     ```bash
     chmod 666 contact_submissions.txt
     ```

3. **Adjust to Your Needs:**
   - Modify the styling or content in `index.html` and other files as desired.
   - If you wish to use a background image, replace `path/to/your/background-image.jpg` in the custom CSS.

## Customization

- **Layout and Design:** The site is built with Tailwind CSS, enabling quick adjustments. Change the classes or add custom CSS to further refine the look and feel.
- **Adding Services:** To add extra services or sections, duplicate and modify the existing sections.
- **PHP Form:** Enhance the contact form with additional validation or storage options (e.g., saving to a database).

## Contact

For any questions or suggestions, please reach out via the contact form on the site. Alternatively, feel free to create issues in this repository for any improvements.

## License

This repository is licensed under the MIT License.

---

## My Thoughts on This Project

This project is a cool blend of design and technical skills. It demonstrates that with the right tools, you can create a professional, personalized server environment. The project also offers ample room for further expansion and refinement, making it an excellent learning project or a base for a more extensive server infrastructure.

Good luck and enjoy using Oulix!