-- 코드를 입력하세요
select ANIMAL_ID,name
from
(
select name,ANIMAL_ID,ANIMAL_TYPE
from ANIMAL_INS
where NAME like "%el%" or "%el" or "el%"
)a
where ANIMAL_TYPE = 'Dog'
order by name