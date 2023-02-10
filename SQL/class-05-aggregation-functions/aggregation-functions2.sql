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

select count(*) from sales;

select sum(sale) from sales where city = 'Jucás';

select 
	name,
	count(*),
    sum(sale) as total,
    max(sale),
    min(sale),
    avg(sale),
    std(sale)
from sales 
group by name
having total > 400000
order by total desc;

	
