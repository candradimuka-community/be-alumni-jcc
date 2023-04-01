# alumni-JCC
Main website for alumni JCC

# Setup .env through file .example.env
You can customize the variable on your own .env file based on .example.env
Most important are: 
1. URL_FE : used to redirect after verified registration
2. PG_DB_NAME : use dev db for development
3. SMTP: using mailtrap / google SMTP with Google app password

# Execute wilayah.sql to database
Table wilayah is required for this project to work.
You can download the file here [cahyadsn/wilayah](https://github.com/cahyadsn/wilayah/blob/master/db/wilayah.sql)
Thanks to [@cahyadsn](https://github.com/cahyadsn) for providing this

# How to use
1. Clone the repo
2. Set Up The ENV Variables
3. Execute [wilayah.sql](https://github.com/cahyadsn/wilayah/blob/master/db/wilayah.sql)
4. Run the commands:
```
npm install
node ace migration:run
node ace db:seed
npm run dev
```


# API Documentation
[Postman Chunk JSON](https://api.postman.com/collections/10819275-af77b35a-e952-4022-affe-1f79bc04c761?access_key=PMAT-01GWVEG9SKW6C71P51M8M48WZY)

# Check and develop by branch
1. main -> API completed/existing
2. dev-be -> API endpoint development
3. you can make your own branch for experimental purpose

# Stack
- BE Framework - Adonis
- Databases - PostgreSQL/CockroachDB

# Support Link
- Figma : Under Development
- Database Structure : Under Development
- Brief Project : [Web-Alumni-Brief-Project.pdf](https://drive.google.com/file/d/1qMKNTlt5f4aaMQgOg3RVHPKr1p4-pdlZ/view?usp=sharing)
