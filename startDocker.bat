@echo off
REM Check if 'bah-demo-monolith' is running
docker ps | findstr "bah-demo-monolith" >nul 2>&1
if %ERRORLEVEL% == 0 (
    echo Container 'bah-demo-monolith' is running. Stopping and removing...
    docker stop bah-demo-monolith
    docker rm bah-demo-monolith
) else (
    echo Container 'bah-demo-monolith' is not running.
)

REM Run the latest version of the container
echo Running the latest 'bah-demo-monolith' container...
REM docker pull bahdemomonolith:latest
docker run -d --name bah-demo-monolith -p 8080:8080 --network traefik-net ^
-e SPRING_DATASOURCE_URL="jdbc:postgresql://postgres:5432/boozblog" ^
-e SPRING_DATASOURCE_USERNAME=boozblogdbuser ^
-e SPRING_DATASOURCE_PASSWORD=boozblogdbuser123 bahdemomonolith:latest

echo Container 'bah-demo-monolith' has been started successfully.
