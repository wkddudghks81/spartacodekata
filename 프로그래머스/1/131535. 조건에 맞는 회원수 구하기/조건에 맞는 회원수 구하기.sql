-- 코드를 입력하세요
select count(AGE)
from
(
SELECT AGE
from USER_INFO
where JOINED like '2021%'
)a
where AGE between 20 and 29