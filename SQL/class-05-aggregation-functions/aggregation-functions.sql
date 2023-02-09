-- aggregation functions
select * from sales;
select * from sales order by name, sale desc; -- Ordena pelo menor e desc pelo maior
select distinct city from sales; -- Valores distintos
select * from sales where name like "_a%"; -- Buscar valores pelo nome

select  * from sales where month = 'out';
select * from sales where month in('out', 'nov')
order by month;

select * from sales
where sale >= 3000 and sale < 4000
order by sale;

select * from sales
where sale between 3002 and 4000
order by sale;