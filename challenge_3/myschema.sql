
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE customer (
  ID int not null AUTO_INCREMENT UNIQUE, 
  name varchar(100),
  email varchar(100),
  password varchar(100),
  line1 varchar(100),
  line2 varchar(100),
  city varchar(100),
  state varchar(100),
  zipcode int not null,
  ccnumber int not null,
  date int not null,
  cvv int not null,
  billingzip int not null
);

INSERT INTO customer (name, email, password, line1, line2, city, state, zipcode, ccnumber, date, cvv, billingzip) VALUES ('george', 'omgeorge@gmail.com', 'imabeast', 'Hiawatha', 'lin2', 'Fremont', 'CA', '94539', '1123', '213', '122', '9998');
