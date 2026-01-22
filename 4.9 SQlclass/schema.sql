CREATE TABLE user(
  id VARCHAR(50) PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(50) UNIQUE NOT NULL,
  password  VARCHAR(50) NOT NULL

);














--  terminal mai mqsql access karne k liye 
-- /usr/local/mysql/bin/mysql -u root -p  

-- and apply karne k liye ____source schema.sql;