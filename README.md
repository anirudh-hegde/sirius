# Sirius

This is a basic Web app which displays the analysis of entered text.

## Tech Stacks
. Reacts-Js, Html and Css
. Docker
. VSCode

# Build Instruction
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
- Use the container and activate the API <br>
  ```sh
  docker run -p 8090:3000 textutils
  ```
