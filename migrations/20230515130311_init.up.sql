-- Add up migration script here
create table orders(
    id varchar not null primary key,
    username varchar not null,
    phone_number int not null,
    location varchar not null,
    amount_paid int not null    
);
create index order_idx on orders (id);

--users
create table users(
    id varchar not null primary key,
    username varchar not null,
    phone_number int not null,
    email varchar ,
    password varchar not null    
);
create index user_idx on users (id);