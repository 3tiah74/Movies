$BaseDir = $PSScriptRoot

Write-Host "Starting Docker MySQL..." -ForegroundColor Cyan
docker start mysql_db

Start-Sleep -Seconds 5

Write-Host "Starting Eureka Server..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList '-NoExit', '-Command', "cd '$BaseDir\eureka-server'; mvn spring-boot:run"

Start-Sleep -Seconds 15

Write-Host "Starting Auth Service..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList '-NoExit', '-Command', "cd '$BaseDir\auth-service\auth-service'; java -Xmx256m -Xms128m -jar target\auth-service-0.0.1-SNAPSHOT.jar"

Start-Sleep -Seconds 8

Write-Host "Starting Movies Service..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList '-NoExit', '-Command', "cd '$BaseDir\movies-service'; java -Xmx256m -Xms128m -jar target\movies-0.0.1-SNAPSHOT.jar"

Start-Sleep -Seconds 8

Write-Host "Starting Review Service..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList '-NoExit', '-Command', "cd '$BaseDir\review-service'; java -Xmx256m -Xms128m -jar target\review-service-0.0.1-SNAPSHOT.jar"

Start-Sleep -Seconds 8

Write-Host "Starting Watchlist Service..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList '-NoExit', '-Command', "cd '$BaseDir\watchlist'; java -Xmx256m -Xms128m -jar target\watchlist-0.0.1-SNAPSHOT.jar"

Start-Sleep -Seconds 8

Write-Host "Starting API Gateway..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList '-NoExit', '-Command', "cd '$BaseDir\api-gateway\api-gateway'; mvn spring-boot:run"

Start-Sleep -Seconds 10

Write-Host "All services started. Open Eureka:" -ForegroundColor Green
Write-Host "http://localhost:8761" -ForegroundColor Yellow
Write-Host ""
Write-Host "Gateway base URL:" -ForegroundColor Green
Write-Host "http://localhost:8090" -ForegroundColor Yellow