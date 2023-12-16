# Sirius

This is a basic Web app which displays the analysis of entered text.

## Tech Stacks
* Reacts-Js, Html and Css
* Docker
* VS Code

## Build Instruction
- Clone the repo <br>
  ```sh
     git clone https://github.com/anirudh-hegde/sirius.git 
  ```
- Move to Repository Directory <br>
  ```sh 
  cd sirius 
  ```
- Build Docker Container <br>
  ```sh
  docker build -t textutils  .
  ```
- Use the container and activate the website
  ```sh
  docker run -p 8090:3000 textutils
  ```
  
## Conclusion
Feel free to explore and alter source code.
Happy Hacking 🚀
