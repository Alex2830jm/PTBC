drop view public.list_alumos;
create view public.list_alumnos as
select
	a.id as alumno_id, 
	coalesce(du.nombres || ' ' || du.app || ' ' || du.apm) as alumno,
	a.matricula,
	g.plantel_id,
	s.semestre 
from public.alumnos a
inner join public.data_users du on a.user_id = du.user_id
inner join public.grupos g on a.grupo_id = g.id
inner join public.semestres s on g.semestre_id  = s.id;


select * from public.list_alumnos;