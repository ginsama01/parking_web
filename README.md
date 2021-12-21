<h1 align="center">Park Type</h1>

  <p align="center">
    Hệ thống tìm bãi đỗ xe ô tô
    <br />
 <a href="https://park-type-front.herokuapp.com/user/start">View Demo</a>
  </p>
</p>

## About The Project
 Hệ thống tìm kiếm bãi đỗ xe ô tô trong nội thành Hà Nội.
### Built With

Công nghệ sử dụng trong project:
* [Reactjs](https://reactjs.org/)
* [Nodejs](https://nodejs.dev/)
* [Express](https://expressjs.com/)
* [Postgresql](https://www.mysql.com/)
## Getting Started
Để thiết lập và chạy một bản sao cục bộ, hãy làm theo các bước đơn giản sau.
### Prerequisites

Bạn cần cài đặt những thứ dưới đây để có thể chạy project.
* Cài đặt nodejs (https://nodejs.org/en/download/)
* Cài đặt Mysql (https://dev.mysql.com/downloads/installer/)
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ginsama01/parktype_web.git
   ```
2. Thêm file cơ sở dữ liệu parking_web.sql vào local mysql và cấu hình file backend/config.js.
   ```yml
   'sql': {
        name: 'DB_NAME',
        user: 'YOUR_MYSQL_USER',
        pass: 'YOUR_MYSQL_PASSWORD,
        host: 'YOUR_MYSQL_HOST'
    }
   ```

3. Cài đặt thư viện node_modules và chạy.
- Với frontend
   ```sh
   cd frontend
   npm install
   npm run start
   ```
- Với backend
   ```sh
   cd backend
   npm install
   npm start
   ```


 
