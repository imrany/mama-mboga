-- Add up migration script here
create table orders(
    id varchar not null primary key,
    username varchar not null,
    phoneNumber varchar not null,
    location varchar not null,
    amount_paid varchar not null    
);
create index order_idx on orders (id);
