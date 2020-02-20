create database emart;
use emart;
show tables;
drop table Customers;
CREATE TABLE Customers (
    Customer_id INT(5) PRIMARY KEY,
    Customer_name VARCHAR(20) NOT NULL,
    Contact_details VARCHAR(10) NOT NULL,
    Pwd VARCHAR(10) NOT NULL UNIQUE
);
    
CREATE TABLE Payment (
    Pay_ID INT(5) PRIMARY KEY,
    Order_ID INT(5) NOT NULL,
    Cardholder_name VARCHAR(30) NOT NULL,
    Card_no INT(16) NOT NULL,
    Bank_name VARCHAR(100) NOT NULL,
    Amount DOUBLE NOT NULL,
    Pay_date DATE NOT NULL
);

CREATE TABLE Bill (
    Bill_ID INT(5) PRIMARY KEY,
    Customer_ID INT(5) NOT NULL,
    Bill_date DATE NOT NULL,
    Order_ID INT(5) NOT NULL,
    Total_amount DOUBLE NOT NULL
);

CREATE TABLE Cart (
    Cart_ID INT(5) PRIMARY KEY,
    Product_ID INT(5) NOT NULL,
    Price DOUBLE NOT NULL,
    Quantity INT NOT NULL
);

CREATE TABLE Category (
	customer_id INT(5),
    category_Id INT(5) PRIMARY KEY,
    category_Name VARCHAR(50) NOT NULL UNIQUE,
	foreign key (customer_)
);

CREATE TABLE subcategory (
    subcategory_Id INT NOT NULL PRIMARY KEY,
    subcategoryName VARCHAR(50),
    categotyId INT,
    categoryName VARCHAR(50),
    subcategoryName VARCHAR(50)
);

CREATE TABLE products (
    productId INT NOT NULL PRIMARY KEY,
    price DOUBLE,
    productName VARCHAR(50),
    pdescription VARCHAR(100),
    subcategotyId INT,
    subcategoryName VARCHAR(50),
    categotyId INT,
    categoryName VARCHAR(50),
    subcategoryName VARCHAR(50)
);

CREATE TABLE Orders( OrderID varchar(20),
  
 		 OrderDate date NOT NULL,
 
  		 CustomerID varchar(20),
  
 		 DiscountId varchar(10),
  
 	 	DiscountValue long,
   
 		TotalAmount long,
   
 		PRIMARY KEY (OrderID),
 
  		FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID));

   CREATE TABLE Sellers(
	
	SellerID varchar(20) NOT NULL,
	
	SellerName varchar(20),

	MobileNumber varchar(10),

	Password varchar(10),
 
   	ProductID varchar(20),
   
	 BrandName varchar(20),
	
	PRIMARY KEY (SellerID),
  
 	 FOREIGN KEY (ProductID) REFERENCES Products(ProductID)

    );
